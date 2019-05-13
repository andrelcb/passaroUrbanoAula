import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/Oferta.model';
import {URL_API} from './app.api';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient ){}
    
    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?=destaque=true`)
            .toPromise()
            .then((response: any) => {
                return response
            });
    }

   public getOfertasPorCategoria(categoria: String) :Promise<Oferta[]> {
       return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
       .toPromise()
       .then((response: any) => {
           return response
    })
   }

   public getOfertasPorId(id: number): Promise<Oferta> {
     return this.http.get(`${URL_API}/ofertas?id=${id}`)
     .toPromise()
     .then((response: any) =>{
            return response.shift();
        } 
     );
   }

   public getComoUsarOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((response: any) => {
            return response.shift().descricao;
        })
   }

   public getOndeFicaOfertasPorId(id: numver) :Promise<string>{
       return this.http.get(`${URL_API}/onde-fica?id=${id}`)
       .toPromise()
       .then((response: any) => {
            return response.shift().descricao;
       })
   }
}