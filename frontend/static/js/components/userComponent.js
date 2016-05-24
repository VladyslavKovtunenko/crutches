import React from 'react'

export class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info: this.props.info,
            todo: 0,
            done: 0
        }
    }

    componentWillMount(){
        /**
         * TODO counting done and todo tasks
         */

        /*Example*/
        const todos = 3;
        const dones = 5;
        this.setState({
            todo: todos,
            done: dones    
        });
        /*End*/
    }
    
    render(){
        return(
            <div><img src={this.state.info.avatar}/>
                <dl>
                    <dd>
                        <h3>{this.state.info.name}</h3>
                    </dd>
                    <dd>
                        <p>{this.state.info.group}</p>
                    </dd>
                    <dd>
                        <ul>
                            <h4>Tasks:</h4>
                            <li>ToDo: {this.state.todo}</li>
                            <li>Done: {this.state.done}</li>
                        </ul>
                    </dd>
                    <dd>
                        <h4>ToDo tasks</h4>
                    </dd>
                    <dd>
                        <h4>Done tasks</h4>
                    </dd>
                </dl></div>
        );
    }
}