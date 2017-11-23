import * as types from '../constants/actionTypes';
import initialState from './initialState';
import * as _ from 'lodash'

// Figure out events towards knokke and de panne based on location
function getDirection (event, position) {
      return event.latitude - position.latitude > 0 ? 1 : 0; 
}

function getLetter (num) {
      return String.fromCharCode(num).toUpperCase() 
}

// IN: Selected events
// OUT: Stops to display on the result page for 2 directions)
// Knokke and De panne are the two farmost stops 
export const planReducer = (state = initialState.planEvents, action) => {
    switch(action.type){

      case types.PLAN_RESET:
            return initialState.planEvents

      case types.PLAN_ROUTE:

      let planEvents = {
            towardsKnokke: [],
            towardsDePanne: []
      }

      let stops = {
            knokke: [],
            depanne: []
      }

      let eventsFlag = {
            knokke: false,
            depanne: false
      }
     
      // What event is either towards Knokke or De panne from selected starting point
      // Split events towards Knokke/De panne
      action.payload.events.map((event, index) => {
            if (getDirection(event, action.payload.townpos) > 0) {
                  planEvents.towardsKnokke.push(event)
            } else {
                  planEvents.towardsDePanne.push(event)
            }
      })
      
      // What stop is either towards Knokke or De panne from selected starting point
      // Split stops towards Knokke/De panne
      stops = {
            knokke: action.payload.stops.filter(stop => stop.direction_id === 5500 ),
            depanne: action.payload.stops.filter(stop => stop.direction_id === 5501 )
      }
      // Sort by stop order
      stops.knokke = _.sortBy(stops.knokke, stop => stop.stop_sequence)
      stops.depanne = _.sortBy(stops.depanne, stop => stop.stop_sequence)

      // We don't need stops in the opposite direction
      // Return all stops from start position
      stops.knokke = [...stops.knokke.splice(stops.knokke.map(stop => stop.id).indexOf(action.payload.townpos.stop_id))]
      // Hack for finding stops toward depanne (API provides only stops towards knokke in /town endpoint)
      let stop_id_panne = parseInt(501+('' + action.payload.townpos.stop_id).substr(3),10)
      stops.depanne = [...stops.depanne.splice(stops.depanne.map(stop => stop.id).indexOf(stop_id_panne))]

      // We don't need to display stops further than the last event
      // Store position of the last relevant stop
      let lastStop = {
            knokke: stops.knokke.length,
            depanne: stops.depanne.length,
      }

      let stopsToKnokke = [...stops.knokke]
      let stopsToDePanne = [...stops.depanne]

      // Get letter from num to associate letter to stops with event
      let currentCount = 97 // === A
      let currentLetter = getLetter(currentCount)

      // Attach event to corresponding/nearby stop 
      planEvents.towardsKnokke.map((event, i) => {

            let eventStop

            // Select appropriate direction for event stop
            if (_.get(event, 'stops')) {
                  eventStop = event.stops.filter( stop => stop.direction_id === 5500 )
            }

            // Look for corresponding stop in the list of stops
            stops.knokke.map((stop, index) => {   
                                 
                  if (eventStop && stop.id === eventStop[0].id) {
                        if (stopsToKnokke[index].events) {
                              if (stopsToKnokke[index].events.filter(item => item.id === event.id).length === 0) {
                                    stopsToKnokke[index].events.push(event)
                              }
                        } else {
                              stopsToKnokke[index].events = [event]
                              stopsToKnokke[index].label = currentLetter
                              currentCount += 1
                              currentLetter = getLetter(currentCount)
                        }
                        eventsFlag.knokke = true
                        lastStop.knokke = index
                  }
            })

            // No events on line, no stop
            if (!eventsFlag.knokke) {
                  lastStop.knokke = 0
            }

      })

      planEvents.towardsDePanne.map((event, i) => {
            
            let eventStop

            // Select appropriate direction for event stop
            if (_.get(event, 'stops')) {
                  eventStop = event.stops.filter( stop => stop.direction_id === 5501 )
            }

            // Look for corresponding stop in the list of stops
            stops.depanne.map((stop, index) => {   
                                 
                  if (eventStop && stop.id === eventStop[0].id) {
                        if (stopsToDePanne[index].events) {
                              if (stopsToDePanne[index].events.filter(item => item.id === event.id).length === 0) {
                                    stopsToDePanne[index].events.push(event)
                              }
                        } else {
                              stopsToDePanne[index].events = [event]
                              stopsToDePanne[index].label = currentLetter
                              currentCount += 1
                              currentLetter = getLetter(currentCount)
                        }
                        eventsFlag.depanne = true
                        lastStop.depanne = index
                  }
            })

            // No events on line, no stop
            if (!eventsFlag.depanne) {
                  lastStop.depanne = 0
            }
      })

      // Removing stops after last event or return empty array if no result
      planEvents.towardsKnokke = eventsFlag.knokke ? stopsToKnokke.slice(0, lastStop.knokke + 1 ) : []
      planEvents.towardsDePanne = eventsFlag.depanne ? stopsToDePanne.slice(0, lastStop.depanne + 1 ) : []

      return planEvents

      default:
            return state;
    }
};
