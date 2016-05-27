import React from 'react'
import ReactDOM from 'react-dom'
import {Login} from './loginComponent'
import $ from 'jquery'
import {md5} from '../../md5'
import {User} from '../userComponent'

export class Registration extends React.Component{
    constructor(props){
        super(props);
        this.email = '';
        this.password = '';
        this.confPass = '';
        this.name = '';
        this.lastName = '';
        this.nameGroup = '';
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
            firstName: this.name.value,
            lastName: this.lastName.value,
            nameGroup: this.group.value
        };
        
        console.log(userData);
        
        $.ajax({
            url: 'http://localhost:3000/user',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(userData),
            success: function (data) {
                ReactDOM.render(<User info={data}/>, document.getElementById('container'));
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
            <form role="form" className="form-horizontal">
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                           placeholder="email@something.com"
                           className="form-control"
                           ref={node => {this.email = node}}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                           placeholder="safe password"
                           className="form-control"
                           ref={node => {this.password = node}}
                    />
                </div>
                <div className="form-group">
                    <label>Confirm password</label>
                    <input type="password"
                           placeholder="safe password, again"
                           className="form-control"
                           ref={node => {this.confPass = node}}
                    />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"
                           placeholder="John"
                           className="form-control"
                           ref={node => {this.name = node}}
                    />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text"
                           placeholder="Smith"
                           className="form-control"
                           ref={node => {this.lastName = node}}
                    />
                </div>
                <div className="form-group">
                    <label>Group</label>
                    <input type="text"
                           placeholder="PM-3"
                           className="form-control"
                           ref={node => {this.nameGroup = node}}
                    />
                </div>
                <div className="form-group">
                    <button
                        onClick={this.submit}
                        className="btn btn-default"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={this.redirectToLogin}
                        className="btn btn-link"
                    >
                        Log in
                    </button>
                </div>
            </form>
        );
    }
}
