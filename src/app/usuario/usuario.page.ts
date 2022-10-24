import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  id: string;
  usuario$: Observable<any>;

  constructor(private aRoute: ActivatedRoute,
              private usuariosService: UsuariosService) {
    this.id = aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
   }

  ngOnInit() {
    this.usuario$ = this.usuariosService.getUsuario(this.id);
  }

}
