import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/Oferta.model';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient ){}
    
    public getOfertas(): Promise<Oferta[]> {
        return this.http.get('http://localhost:3000/ofertas')
            .toPromise()
            .then((response: any) => response.json());
    }

   public getOfertasPorCategoria(categoria: String) :Promise<Oferta[]> {
       return this.http.get('http://localhost:3000/ofertas?categoria=${categoria}')
       .toPromise()
       .then((response: any) => response.json())
   }
}