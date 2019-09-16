// @flow

export const HOME_PAGE_ROUTE = '/';
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404';

export const helloEndpointRoute = (num: ?number) =>
  `/ajax/hello/${num || ':num'}`;
