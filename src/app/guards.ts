import { inject } from '@angular/core';
import {
  CanActivateChildFn,
  CanActivateFn,
  CanDeactivateFn,
  CanMatchFn,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';

// Any component guarded by canDeactivate must have this method
export interface CanLeave {
  canLeave: () => boolean;
}

// 1. CanMatch: decides if the route can even be matched/loaded
export const canMatchGuard: CanMatchFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  console.log('CanMatch guard ran');
  return auth.isLoggedIn() ? true : router.createUrlTree(['/about']);
};

// 2. CanActivate: decides if the route can be entered
export const canActivateGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  console.log('CanActivate guard ran');
  return auth.isLoggedIn() ? true : router.createUrlTree(['/about']);
};

// 3. CanActivateChild: decides if the child routes can be entered
export const canActivateChildGuard: CanActivateChildFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  console.log('CanActivateChild guard ran');
  return auth.isLoggedIn() ? true : router.createUrlTree(['/about']);
};

// 4. CanDeactivate: decides if the user can leave the route
export const canDeactivateGuard: CanDeactivateFn<CanLeave> = (component) => {
  console.log('CanDeactivate guard ran');
  return component.canLeave();
};