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

    // public getOfertas2(): Promise<Oferta[]>{
    //     return new Promise((resolve, reject) => {
    //         let deuCerto = true;
    //         if(deuCerto) {
    //             setTimeout(() => {
    //                 resolve(this.ofertas);
    //             }, 3000);
    //         } else {
    //             reject({ codigoErro: 404, mensagemErro: "Servidor não Encontrado"})
    //         }
    //     })
    //     .then((ofertas: Oferta[]) => {
    //         //fazer trativa
    //         console.log('primeiro then');
    //         return ofertas;
    //     })
    //     .then((ofertas: Oferta[]) => {
    //         console.log('segundo then');
    //         return new Promise((resolve2, reject2) => {
    //             setTimeout(() => {
    //                 resolve2( ofertas );
    //             }, 3000);
    //         })
    //     })
    //     .then((ofertas: Oferta[]) => {
    //         console.log('TERCEIRO THEN EXECUTADO APOS 3 SEGUNDOS POR QUE ESTAVA AGUARADANDO A PROMISE')
    //         return ofertas;
    //     })
    // }
}