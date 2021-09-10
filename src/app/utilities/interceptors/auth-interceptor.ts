import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "../services/authentication/token.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        // Get the token
        const token = this.tokenService.activeAuthenticatedToken;

        // Clone the request and add parameters to the created clone
        const authenticatedRequest = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`),
        });

        return next.handle(authenticatedRequest);
    }
}