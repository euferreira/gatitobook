import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, mapTo, Observable, of, throwError} from "rxjs";
import {Animais, Animal} from "./animais";
import {TokenService} from "../autenticacao/token.service";
import {environment} from "../../environments/environment";

const API = environment.apiUrl;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`);
  }

  buscaPorId(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }

  excluirAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean> {
    return this.http.post(`${API}/photos/${id}/like`, {}, {
      observe: 'response'
    }).pipe(mapTo(true), catchError(
      (error) => {
        return error.status === NOT_MODIFIED ? of(false) : throwError(error);
      }
    ));
  }
}
