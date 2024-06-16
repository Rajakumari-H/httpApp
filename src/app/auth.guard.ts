import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router)

  let isLoggedIn = localStorage.getItem('userName')
  if(isLoggedIn) return true;
  else{
  router.navigateByUrl('/login')
  return false;
  }
};
