import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/Oferta.model';
import { Observable, interval, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  private tempoObservableSubscription: Subscription
  private meuObservableTesteSubscription: Subscription
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


  //     let tempo  = interval(2000);
  //     this.tempoObservableSubscription =  tempo.subscribe((intervalo: number) => {
  //       console.log(intervalo);
  //     });
      
  //     //observable (observavel)]
  //       let meuObservableTeste = Observable.create((observer: Observer<number>) => {
  //         observer.next(1);
  //         observer.next(2);
  //         observer.complete();
  //       });

  //     //observable (observador)
  //     this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
  //       (resultado: any) => console.log(resultado),
  //       (erro: any) => console.log(erro),
  //       (complete: any) => console.log('Evento finaliza com sucesso'),
  //     );
  }

  // ngOnDestroy() {
  //   this.meuObservableTesteSubscription.unsubscribe();
  //   this.tempoObservableSubscription.unsubscribe();
  // }

}
