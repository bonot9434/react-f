import React, {useEffect, useState} from 'react'

const App = props => {
  const [state,setState] = useState(props)
  const {name, price} = state

  // useEffectはrenderの後で実行される
  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate')
  })
  
  // 空の第二引数は初回のみuseEffect
  useEffect(() => {
    console.log('This is like componentDidMount')
  }, [])

  // 特定、変更時のみ
  useEffect(() => {
    console.log('This callback is for name only')
  }, [name])

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price+1})}>+1</button>
      <button onClick={() => setState({...state, price: price-1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}


export default App;
