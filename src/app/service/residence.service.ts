import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Residence} from "../../core/models/Residence";

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http:HttpClient) { }

  getnumberofvalue(list:any,criteria:any,value:any) {
    let nb = 0;
    for(let i in list)
    {
      if (list[i][criteria] === value) {
        nb ++;
      }
    }
    return nb;
  }

  getAllResidences(){
    return this.http.get<Residence[]>('http://localhost:3000/residence');
  }

  getResidenceById(id: any){
    return this.http.get<Residence>(`http://localhost:3000/residence/${id}`);
  }

  addResidence(residence: Residence){
    return this.http.post<Residence>('http://localhost:3000/residence', residence);
  }

  deleteResidence(id: any){
    return this.http.delete(`http://localhost:3000/residence/${id}`);
  }

  updateResidence(idupdate: number, residence: Residence){
    return this.http.put<Residence>(`http://localhost:3000/residence/${residence.id}`, residence);
  }

}
