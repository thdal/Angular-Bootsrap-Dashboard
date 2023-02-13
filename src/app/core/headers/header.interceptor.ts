import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import {TokenStorageService} from "../services/token-storage.service";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: request.headers
        .set('Access-Control-Allow-Origin', '*')
        .set("Access-Control-Allow-Credentials", "true")
        .set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
        .set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    });

    const token = this.token.getToken();

    if (token != null) {
      //request = request.clone({ headers: request.headers.set('Authorization', token.accessToken) });
    }

    return next.handle(request);
  }
}
