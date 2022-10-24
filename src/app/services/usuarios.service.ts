import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario>{

    return this.http.get<any>(environment.API_URL).pipe(map(res =>{
      return res.results.map( ({id,name,image,gender,status,origin})=>{
        return {
          id,
          name,
          image,
          gender,
          status,
          origin: origin.name
        }
      })
  }))

}

getUsuario(id:string): Observable<Usuario>{
   return this.http.get<any>(environment.API_URL+'/'+id);
}

}
