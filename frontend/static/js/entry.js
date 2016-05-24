import React from 'react'
import ReactDOM from 'react-dom'
import {loginForm, regForm} from './tpmData/logRegData'
import {Form} from './components/formComponent'
import {User} from './components/userComponent'
import {Johny} from './tpmData/userData'
import $ from "jquery";

//ReactDOM.render(<Form info={loginForm}/>, document.getElementById('container'));
ReactDOM.render(<Form info={regForm}/>, document.getElementById('container2'));
//ReactDOM.render(<User info={Johny}/>, document.getElementById('container3'));
