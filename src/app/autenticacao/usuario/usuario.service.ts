import { Injectable } from '@angular/core';
import {TokenService} from "../token.service";
import jwtDecode from "jwt-decode";
import {Usuario} from "./usuario";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({}); //propaga o valor para quem se inscreveu nele
  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwtDecode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  isLogado() {
    return this.tokenService.possuiToken();
  }
}
