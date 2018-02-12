import React  from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css'
// import PropTypes from 'prop-types';
// import registerServiceWorker from './registerServiceWorker';
// import { TestJS, TestReact } from './WhyReact'

ReactDOM.render(<App />, document.getElementById('root'));



// TestJS()
// TestReact()

// var root = document.querySelector('#root')
// console.log(root)
// var el = document.createElement('div')
// el.textContent = 'Alex'
// el.className = 'test'
// root.appendChild(el)


// ReactDOM.render(
//   React.createElement('div', {children: 'Alex', className: 'test'}),
//   document.querySelector('#root')
// );

//
//
// const MyComponent = ({children}) => <div>{children}</div>
// MyComponent.propTypes = {
//   msg: PropTypes.string.isRequired
// }
//
//

// NOT React




// var createAlex = (msg, className , element) => {
//   var root = element || document.querySelector('#root')
//   console.log(root)
//   var el = document.createElement('div')
//   el.textContent = msg
//   el.className = className
//   root.appendChild(el)
// }
//
//
//  var el = document.querySelector('#root')
//  var el = document.createElement('table')
// createAlex('preved', 'test')

// REACT
// const AlexComponent = function({ msg, children, onClick}) {
//   return (
//     <div onClick={onClick}>
//       {children}
//       {(msg ? <div>{msg}</div> : null)}
//     </div>
//
//   )
// }
//
// class AAA extends Component {
//
//   state = { name: 'alex', time: null}
//
//   timerCallBack = () => {
//     this.setState({ time: new Date().toLocaleTimeString()})
//   }
//
//   componentDidMount() {
//     // console.log(this)
//     setInterval(this.timerCallBack,1000)
//   }
//
//   clicked = () => {
//     console.log(this)
//     var { name } = this.state
//     console.log(name)
//   }
//
//   render() {
//     console.log('render')
//     return (<div><AlexComponent onClick={this.clicked} msg={`${this.state.name} hello ${this.state.time}`}/></div>)
//   }
// }
//
//
//
// ReactDOM.render(
//
//   <AAA></AAA>
//   ,
//   document.querySelector('#root')
// )
