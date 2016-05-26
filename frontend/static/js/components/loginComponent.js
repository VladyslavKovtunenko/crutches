import React from 'react'
import ReactDOM from 'react-dom'
import {Registration} from './registrationComponent'
import $ from "jquery";

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.login = '';
        this.email = '';
        this.submit = this.submit.bind(this);
        this.redirectToRegistration = this.redirectToRegistration.bind(this);
    }

    submit(e) {
        e.preventDefault();
        let user = {
            login: this.login.value,
            email: this.email.value
        };

        console.log(JSON.stringify(user));

        $.ajax({
            url: 'http://localhost:3000/login',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(user),
            success: function (data) {
                console.log(data);
            }
        })
    }

    redirectToRegistration(){
        ReactDOM.render(<Registration />, document.getElementById('container'));
    };
    
    render(){
        return (
            <form>
                <dl>
                    <dd>
                        <h3>
                            Login
                        </h3>
                    </dd>
                    <dd>
                        <label>
                            Email
                        </label>
                        <input id="email"
                               type="email"
                               ref={node => {this.login = node}}
                        />
                    </dd>
                    <dd>
                        <label>
                            Password
                        </label>
                        <input id="password"
                               type="password"
                               ref={node => {this.email = node}}
                        />
                    </dd>
                    <dd>
                        <button onClick={this.submit}>
                            Submit
                        </button>
                        <p onClick={this.redirectToRegistration}>
                            Registration
                        </p>
                    </dd>
                </dl>
            </form>
        );

    }
}
