import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AutenticacaoService} from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AutenticacaoService, private router: Router) {
  }

  usuario: string = "";
  senha: string = "";

  ngOnInit(): void {
  }

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['animais']).then(r => console.log(r)).catch(er => console.log(er));
      },
      (error) => {
        alert('Usuário ou senha inválido!');
      }
    );
  }
}
