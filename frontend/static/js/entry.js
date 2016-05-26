import React from 'react'
import ReactDOM from 'react-dom'
import {loginForm, regForm} from './tpmData/logRegData'
import {Form} from './components/singIn/registrationComponent'
import {Login} from './components/singIn/loginComponent'
import {Registration} from './components/singIn/registrationComponent'
import {User} from './components/userComponent'
import {Johny} from './tpmData/userData'
import {md5} from './md5'

// ReactDOM.render(<User info={Johny}/>, document.getElementById('container'));
// ReactDOM.render(<Registration />, document.getElementById('container'));

console.log(md5('j43oniwinf1234tkf!@#$!@#'));