import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/Oferta.model';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;
  constructor(private route: ActivatedRoute,
    private ofertasServices: OfertasService) { }

  ngOnInit() {
    this.ofertasServices.getOfertasPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      })

      // //observavel olhando o observador
      // this.route.params.subscribe((parametro: any) => {
      //   console.log(parametro);
      // },
      // (erro: any) => {
      //   console.log(erro)
      // },
      // () => {
      //   console.log('processamento foi classificado como concluido')
      // })


      // let tempo  = interval(2000);
      // tempo.subscribe((intervalo: number) => {
      //   console.log(intervalo);
      // });
  }

}
