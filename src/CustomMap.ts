import { User } from './User';
import { Company } from './Company';

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

    addUserMarker(user: User): void {
        new google.maps.Marker({
            map: this.googleMaps,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            }
        });
    }

    addCompanyMarker(company: Company): void {
        new google.maps.Marker({
            map: this.googleMaps,
            position: {
                lat: company.location.lat,
                lng: company.location.lng
            }
        });
    }
}