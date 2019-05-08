import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/Oferta.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient ){}
    
    public getOfertas(): Promise<Oferta[]> {
        return this.http.get('http://localhost:3000/ofertas')
            .toPromise()
            .then((response: any) => response.json())
    }
}