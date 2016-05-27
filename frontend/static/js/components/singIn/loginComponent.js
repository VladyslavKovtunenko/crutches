import React from 'react'
import ReactDOM from 'react-dom'
import {Registration} from './registrationComponent'
import $ from "jquery";
import {md5} from '../../md5'
import {User} from '../userComponent'

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.pass = '';
        this.email = '';
        this.submit = this.submit.bind(this);
        this.redirectToRegistration = this.redirectToRegistration.bind(this);
    }

    submit(e) {
        e.preventDefault();
        let user = {
            password: md5(this.pass.value),
            email: this.email.value
        };

        console.log(user);

        $.ajax({
            url: 'http://localhost:3000/login',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(user),
            success: function (data) {
                ReactDOM.render(<User info={data}/>, document.getElementById('container'));
            }
        })
    }

    redirectToRegistration(){
        ReactDOM.render(<Registration />, document.getElementById('container'));
    };
    
    render(){
        return (
            <form role="form" className="form-horizontal">
                <div className="form-group">
                    <label>Email</label>
                    <input id="email"
                           type="email"
                           className="form-control"
                           ref={node => {this.email = node}}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input id="password"
                           type="password"
                           className="form-control"
                           ref={node => {this.pass = node}}
                    />
                </div>
                <div className="form-group">
                    <button
                        onClick={this.submit}
                        className="btn btn-default"
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={this.redirectToRegistration}
                        className="btn btn-link"
                    >
                        Registration
                    </button>
                </div>
            </form>
        );
    }
}
