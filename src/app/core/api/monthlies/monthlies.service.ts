import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Monthly } from '../../models/monthly';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../crud.service';

@Injectable({
  providedIn: 'root'
})
export class MonthliesService extends CrudService<any, string> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient, `${environment.apiUrl}/api/monthlies`);
  }
}
