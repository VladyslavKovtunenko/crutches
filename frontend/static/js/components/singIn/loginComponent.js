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

    /*getInputDOMNode() {
        return this.refs.input.getDOMNode();
    }*/

    submit(e) {
        e.preventDefault();
        /*let user = {
            password: md5(this.pass.value),
            email: this.email.value
        };*/
        let user = {
            password: this.pass.value,
            email: this.email.value
        };

        console.log(user);
        console.log(this.getInputDOMNode());

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

/*
<form role="form" class="form-horizontal">

    <dl>
        <div class="form-group">
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
                       class="form-control"
                       ref={node => {this.email = node}}
                />
            </dd>
        </div>
        <div class="form-group">
            <dd>
                <label>
                    Password
                </label>
                <input id="password"
                       type="password"
                       class="form-control"
                       ref={node => {this.pass = node}}
                />
            </dd>
        </div>
        <dd>
            <button
                onClick={this.submit}
                class="btn btn-default"
            >
                Submit
            </button>
            <button
                type="button"
                onClick={this.redirectToRegistration}
                class="btn btn-link"
            >
                Registration
            </button>
        </dd>
    </dl>

</form>*/


/*<div>
 <h3>
 Login
 </h3>
 <form>
 <FormGroup controlId="formControlsText">
 <ControlLabel>Email</ControlLabel>
 <FormControl id="email"
 type="email"
 ref={node => {this.email = node}}
 />
 </FormGroup>
 <FormGroup controlId="formControlsText">
 <ControlLabel>Password</ControlLabel>
 <FormControl type="password"
 ref={node => {this.pass = node}}
 />
 </FormGroup>
 <ButtonToolbar>
 <Button
 onClick={this.submit}
 >
 Submit
 </Button>
 <Button
 bsStyle="link"
 onClick={this.redirectToRegistration}
 >
 Registration
 </Button>
 </ButtonToolbar>
 </form>
 </div>);*/