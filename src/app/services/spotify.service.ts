import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class SpotifyService {

    constructor( private http: HttpClient ) {
    }

    getNewReleases() {
    
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQA1rVhXhN04-KxuvY91GMG4d2EVMphwjbIt3JEfySNvJfgCczClRjeJM-DMZoiG48WfsY61pjkrHnjRzSU'
        });
        this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
            .subscribe( data => {
                console.log(data);
            });
    }
}