import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(private ofertasService:OfertasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.ofertasService.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
    .then((response: string) => {
      this.comoUsar = response;
    });
  }

}
