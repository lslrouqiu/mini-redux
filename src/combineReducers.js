export default function combineReducers (arg)  {
  const keys = Object.keys(arg)
 
  return (state={}, action) => {
    const nextState = {}
    for(let i = 0; i < keys.length;i++) {
      const key = keys[i]
      const reducer = arg[key]
      const keyState = reducer(state[key], action)
      nextState[keys[i]] = keyState
    }
    return nextState
  }
}