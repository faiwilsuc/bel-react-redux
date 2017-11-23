import * as _ from 'lodash'

// KM
const MAX_DISTANCE = 10

// Get timing bewteen location and event
function getDistance (userSelection, event) {

    // degree/km
    const DEG = 110.567

    // Squared values for x & y axis
    let x = Math.pow(event.latitude - userSelection.latitude, 2)
    let y = Math.pow(event.longitude - userSelection.longitude, 2)

    // Compute distance
    let distance = Math.round(Math.sqrt(x + y) * DEG * 10) / 10

    // Return distance in KM
    return {
        id: event.id,
        distance
    }

}

// Date range filter
function isInRange (event, userSelection) {

    let rangeStart = new Date(userSelection.start_date).getTime()
    let rangeEnd = new Date(userSelection.end_date).getTime()

    if (event.period_type === 1) {
        return true
    }

    if (event.period_type === 2) {
        let eventStart = new Date(event.period.start_date).getTime()
        let eventEnd = new Date(event.period.end_date).getTime()
        
        return rangeStart >= eventStart && rangeEnd <= eventEnd
    }

    if (event.period_type === 3) {
        let inRange = false
        event.occurrence_dates.map((occurence) => {
            let occurence_date = new Date(occurence.date).getTime()
            if (rangeStart < occurence_date && occurence_date <= rangeEnd ) {
                inRange = true
            }
        })
        return inRange
    }
}


export default function filterEvents (userSelection, events) {
    let filteredEvents = []

    // get distance for each event
    events.map((event) => {
        let eventDistance = getDistance(userSelection, event)
        if (eventDistance.distance < MAX_DISTANCE) {
            filteredEvents.push(_.merge({}, event, { distance: eventDistance.distance }))
        }
    })

    // Filter on dates
    filteredEvents = filteredEvents
        .filter((value) => {
            return isInRange(value, userSelection) === true
        })

    // return sorted list by distance
    return _.sortBy(filteredEvents, item => item.distance)    
    
};