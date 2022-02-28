import {Component, OnInit} from '@angular/core';
import {Animais} from "../animais";
import {UsuarioService} from "../../autenticacao/usuario/usuario.service";
import {AnimaisService} from "../animais.service";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {
  animais!: Animais;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.animais = this.activateRoute.snapshot.data['animais'];
    });
  }

}
