import { matchPath, Route } from 'inferno-router';

export async function loadInitialProps(
  routes: Route[],
  pathname: string,
  ctx: any
) {
  const promises: Promise<any>[] = [];
  const match = (routes as any).find((route: any) => {
    const match = matchPath(pathname, route);
    if (match && route.component && (route.component as any).getInitialProps) {
      promises.push(
        (route.component as any).load
          ? (route.component as any)
              .load() // load it as well
              .then(() =>
                (route.component as any)
                  .getInitialProps({ match, ...ctx })
                  .catch(() => {})
              )
          : (route.component as any)
              .getInitialProps({ match, ...ctx })
              .catch(() => {})
      );
    }
    return match;
  });
  return {
    match,
    data: (await Promise.all(promises))[0],
  };
}
