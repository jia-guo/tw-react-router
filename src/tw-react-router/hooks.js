import RouterContext from './RouterContext';
import { useContext } from 'react';
import matchPath from './matchPath';

export function useHistory() {
  return useContext(RouterContext).history;
}

export function useLocation() {
  return useContext(RouterContext).location;
}

export function useParams() {
  const match = useContext(RouterContext).match;
  return match ? match.params : {};
}

export function useRouteMatch(pathname) {
  const { location } = useContext(RouterContext);
  return matchPath(location.pathname, pathname);
}
