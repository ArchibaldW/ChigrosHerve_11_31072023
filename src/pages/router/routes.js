const ROUTES = {
  home: '/',
  about: '/about',
  product: (productId = ':productId') => {
    return `/products/${productId}`
  },
}

export default ROUTES
