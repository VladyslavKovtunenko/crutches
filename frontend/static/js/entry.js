import React from 'react'
import ReactDOM from 'react-dom'
import {loginForm, regForm} from './logRegData'
import {Form} from './formComponent'
import {User} from './userComponent'
import {Johny} from './userData'

ReactDOM.render(<Form info={loginForm}/>, document.getElementById('container'));
ReactDOM.render(<Form info={regForm}/>, document.getElementById('container2'));
ReactDOM.render(<User info={Johny}/>, document.getElementById('container3'));
