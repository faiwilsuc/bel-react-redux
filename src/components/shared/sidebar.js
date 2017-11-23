import React from 'react';

import SidebarItemText from './sidebaritemtext';
import SidebarItemImage from './sidebaritemimage';

export default class Sidebar extends React.Component {
    render() {

        let sidebarItems = [
            {
                type: 'text',
                text: 'Een handig overzicht van alle Kusttram-haltes',
                linkText: 'download kaart',
                linkUrl: '/images/thermometer-kusttram-2017.png'
            },
            {
                type: 'image',
                title: 'Doe niet als Onni!',
                imagePath: 'images/image.png',
                imageAlt: 'panda',
                text: 'Geniet van de kust, maar heb ook aandacht voor de Kusttram!',
                linkText: 'lees meer',
                linkUrl: '/onni'
            },
            {
                type: 'image',
                title: 'Waar te koop?',
                imagePath: 'images/image1.png',
                imageAlt: 'waar te koop',
                text: '<span>Lijnwinkel </span>en verkoopautomaat aan de kust',
                linkText: 'vind een lijnwinkel',
                linkUrl: '/waartekoop'
            },
        ];

        return (
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="left_content1">
                    {sidebarItems.map((sidebarItem, index) => {
                       
                         switch (sidebarItem.type) {
                            case 'text':  return <SidebarItemText key={index} text={sidebarItem.text} linkText={sidebarItem.linkText} linkUrl={sidebarItem.linkUrl} />;
                            case 'image': return <SidebarItemImage key={index} title={sidebarItem.title} imagePath={sidebarItem.imagePath} imageAlt={sidebarItem.imageAlt} text={sidebarItem.text} linkText={sidebarItem.linkText} linkUrl={sidebarItem.linkUrl} />
                            default:
                        }
                        
                    })}
                </div>
            </div>
        );
    } 
}