import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import Card from './Components/Component3D'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Card />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
