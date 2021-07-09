import compose from './compose'
export default function applyMiddleware(...middlewares) {
  return (createStore) => {
    return (reducer) => {
      const store = createStore(reducer)
      const chain = middlewares.map(middleware => middleware(store))
      const {dispatch} = store
      const newDispatch = compose(...chain)(dispatch)

      return {
        ...store,
        dispatch: newDispatch
      }
    }
  }
}