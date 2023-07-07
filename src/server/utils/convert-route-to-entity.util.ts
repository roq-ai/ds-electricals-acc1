const mapping: Record<string, string> = {
  orders: 'order',
  organizations: 'organization',
  products: 'product',
  requests: 'request',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
