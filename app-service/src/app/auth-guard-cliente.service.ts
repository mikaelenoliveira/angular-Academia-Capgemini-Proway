import { UsuarioService } from './usuario.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,  } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardClienteService implements CanActivate {

  constructor(private router: Router, private UsuarioService: UsuarioService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var t = this.UsuarioService.getDadosToken()
    if(t.perfil == 'CLIENTE'){
      return true
    }
    else{
      this.router.navigate(['/erros'])
      return false
    }
  }
}
