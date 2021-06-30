import { User } from './User';
import { Company } from './Company';

export interface Mappable {
    location: {
        lat: number;
        lng: number
    };
    markerContent(): string;
}

export class CustomMap {
    private googleMaps: google.maps.Map;

    constructor(divId: string) {
        this.googleMaps = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 1.2,
                lng: 36.8
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMaps,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMaps, marker);
        })
    }
}