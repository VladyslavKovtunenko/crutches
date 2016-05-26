import React from 'react'
import ReactDOM from 'react-dom'
import {loginForm, regForm} from './tpmData/logRegData'
import {Form} from './components/registrationComponent'
import {Login} from './components/loginComponent'
import {Registration} from './components/registrationComponent'
import {User} from './components/userComponent'
import {Johny} from './tpmData/userData'

ReactDOM.render(<User info={Johny}/>, document.getElementById('container'));
// ReactDOM.render(<Registration />, document.getElementById('container'));
