import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CrudService} from "../crud.service";
import {Observable} from "rxjs";
import {BoUser} from "../../models/boUser";

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends CrudService<any, string> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, `${environment.apiUrl}/admin/dashboard`);
  }

  getCircularChart(): Observable<BoUser> {
    return this._http.get<BoUser>(`${environment.apiUrl}/api/circular_chart`);
  }

  getDrillDownChart(): Observable<BoUser> {
    return this._http.get<BoUser>(`${environment.apiUrl}/api/drill_down_chart`);
  }

}
