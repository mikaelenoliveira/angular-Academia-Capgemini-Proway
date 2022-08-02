import { UsuarioService } from './usuario.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwt_decode from "jwt-decode";

import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdm implements CanActivate {

  constructor(private router: Router, private UsuarioService: UsuarioService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //verifica o localStorage

    var x = this.UsuarioService.getDadosToken()

    let usuarioLogado: boolean = x.perfil == 'ADM'
    if(usuarioLogado){
      return true
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }

}
