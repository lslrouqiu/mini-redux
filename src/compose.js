export default function compose(...middlewares) {
  return middlewares.reduce((func,middleware) => (...args) => func(middleware(...args)))
}