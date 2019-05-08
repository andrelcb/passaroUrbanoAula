import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/Oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService],
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertasServices: OfertasService) { }

  ngOnInit() {
    this.ofertasServices.getOfertas2()
      .then((ofertas: Oferta[]) => {
        console.log('a função resolvida 3 seg')
        this.ofertas = ofertas;
      })
      .catch((param: any) => {
        console.log(param);
      });
  }

}
