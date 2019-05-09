import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/Oferta.model';
import {URL_API} from './app.api';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient ){}
    
    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}?=destaque=true`)
            .toPromise()
            .then((response: any) => {
                return response
            });
    }

   public getOfertasPorCategoria(categoria: String) :Promise<Oferta[]> {
       return this.http.get(`${URL_API}?categoria=${categoria}`)
       .toPromise()
       .then((response: any) => {
           return response
    })
   }

   public getOfertasPorId(id: number): Promise<Oferta> {
     return this.http.get(`${URL_API}?id=${id}`)
     .toPromise()
     .then((response: any) =>{
            return response.shift();
        } 
     );
   }
}