export default function createStore(reducer, enhancer)  {
  if(enhancer) {
    const newCreateStore = enhancer(createStore)
    const newStore = newCreateStore(reducer);
    return newStore
  }
  let state = reducer(undefined,{type: ''})
  let listeners =  []
  const dispatch = (action) => {
    state = reducer(state, action)
    for(let i = 0; i < listeners.length; i++ ){
      listeners[i]()
    }
  }

  const subscribe = (listener) => {
    listeners.push(listener) 
  }

  const getState = ()=> {
    return state
  }
  return {
    dispatch,
    subscribe,
    getState
  }
}