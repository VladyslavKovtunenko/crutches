import React from 'react'
import ReactDOM from 'react-dom'
import {Login} from './loginComponent'
import $ from 'jquery'
import {md5} from '../md5'


export class Registration extends React.Component{
    constructor(props){
        super(props);
        this.email = '';
        this.password = '';
        this.confPass = '';
        this.name = '';
        this.lastName = '';
        this.group = '';
        this.submit = this.submit.bind(this);
        this.redirectToLogin = this.redirectToLogin.bind(this);
    }

    submit(e) {
        e.preventDefault();

        if(!this.valid(this.password.value, this.confPass.value)){
            console.log('lolka');
            return;
            // need work on error
        }

        let userData = {
            email: this.email.value,
            password: md5(this.password.value),
            name: this.name.value,
            lastName: this.lastName.value,
            group: this.group.value
        };
        
        console.log(userData);
        
        $.ajax({
            url: 'http://localhost:3000/registration',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(userData),
            success: function (data) {
                console.log(data);
            }
        })
    }

    valid(firstPass, secondPass){
        return firstPass === secondPass;
    }

    redirectToLogin(){
        ReactDOM.render(<Login />, document.getElementById('container'));
    }

    render(){
        return (
            <form>
                <dl>
                    <dd>
                        <h3>
                            Registration
                        </h3> 
                    </dd>
                    <dd> 
                        <label>
                            Email address
                        </label>
                        <input 
                            type="email" 
                            placeholder="email@something.com" 
                            ref={node => {this.email = node}}
                        />
                    </dd>
                    <dd> 
                        <label>
                            Password
                        </label> 
                        <input  
                            type="password"
                            placeholder="safe password" 
                            ref={node => {this.password = node}}
                        /> 
                    </dd>
                    <dd>
                        <label>
                            Confirm password
                        </label> 
                        <input 
                            type="password" 
                            placeholder="safe password, again"
                            ref={node => {this.confPass = node}}
                        /> 
                    </dd>
                    <dd> 
                        <label>
                            Name
                        </label>
                        <input 
                            type="text" 
                            placeholder="John" 
                            ref={node => {this.name = node}}
                        /> 
                    </dd>
                    <dd> 
                        <label>
                            Last name
                        </label> 
                        <input 
                            type="text" 
                            placeholder="Smith" 
                            ref={node => {this.lastName = node}}
                        /> 
                    </dd>
                    <dd> 
                        <label>
                            Group
                        </label> 
                        <input 
                            type="text" 
                            placeholder="PM-3"
                            ref={node => {this.group = node}}
                        /> 
                    </dd> 
                    <dd>
                        <button type="button" onClick={this.submit}>
                            Submit
                        </button>
                        <p onClick={this.redirectToLogin}>
                            Login
                        </p>
                    </dd> 
                </dl> 
            </form>
        );
    }
}
