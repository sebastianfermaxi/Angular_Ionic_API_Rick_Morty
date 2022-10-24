import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss'],
})
export class ListUsuariosComponent implements OnInit {

  usuarios$: Observable<any>;

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.getUsuarios();
  }
  getUsuarios():void{

    this.usuarios$ = this.usuarioService.getUsuarios();


  }
}
