import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { IsloggedinService } from '../service/isloggedin.service';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(IsloggedinService).status()
    ? true
    : inject(Router).createUrlTree(['signin']);
};
