import React from 'react'
import ReactDOM from 'react-dom'
import {loginForm, regForm} from './tpmData/logRegData'
import {Login} from './components/singIn/loginComponent'
import {Registration} from './components/singIn/registrationComponent'
import {User} from './components/userComponent'
import {Johny} from './tpmData/userData'

 ReactDOM.render(<User info={Johny}/>, document.getElementById('container'));
// ReactDOM.render(<Registration />, document.getElementById('container'));
//ReactDOM.render(<Login />, document.getElementById('container'));
console.log(document.body);