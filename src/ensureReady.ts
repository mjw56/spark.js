import { matchPath } from 'inferno-router';
import { IRouteProps } from 'inferno-router/Route';

/**
 * This helps us to make sure all the async code is loaded before rendering.
 */
export async function ensureReady(routes: IRouteProps[], pathname?: string) {
  await Promise.all(
    routes.map(route => {
      const match = matchPath(pathname || window.location.pathname, route);
      if (match && route && route.component && (route.component as any).load) {
        return (route.component as any).load();
      }
      return undefined;
    })
  );

  let data;
  if (typeof window !== undefined && !!document) {
    data = JSON.parse(
      (document as any).getElementById('server-app-state').textContent
    );
  }
  return Promise.resolve(data);
}
