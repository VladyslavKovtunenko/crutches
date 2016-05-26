import React from 'react'
import ReactDOM from 'react-dom'
import {TodoTask} from './todoTask'
import {DoneTask} from './doneTask'

export class User extends React.Component{
    constructor(props){
        super(props);

        let done = [],
            todo = [],
            name = this.props.info.firstName + ' ' + this.props.info.lastName;

        const sortDeadline = (a, b) => {
            if(a.deadline.getFullYear() > b.deadline.getFullYear()) return 1;
            if(a.deadline.getMonth() > b.deadline.getMonth()) return 1;
            if(a.deadline.getDate() > b.deadline.getDate()) return 1;
            return -1;
        };

        for (let i = 0; i < this.props.info.tasks.length; i++){
            if(this.props.info.tasks[i].isDone){
                done.push(this.props.info.tasks[i]);
            } else {
                todo.push(this.props.info.tasks[i]);
            }
        }

        todo.sort(sortDeadline);
        done.sort(sortDeadline);

        this.state = {
            name,
            todo,
            done
        };

        this.showTodo = this.showTodo.bind(this);
        this.showDone = this.showDone.bind(this);
    }

    showTodo(){
        ReactDOM.render(<TodoTask tasks={this.state.todo}/>, document.getElementById('todoContainer'));
    }

    showDone(){
        ReactDOM.render(<DoneTask tasks={this.state.done}/>, document.getElementById('doneContainer'));
    }
    
    render(){
        return(
            <div><img src={this.props.info.avatar}/>
                <dl>
                    <dd>
                        <h3>{this.state.name}</h3>
                    </dd>
                    <dd>
                        <p>{this.props.info.group}</p>
                    </dd>
                    <dd>
                        <ul>
                            <h4>Tasks:</h4>
                            <li onClick={this.showTodo}>
                                ToDo: {this.state.todo.length}
                                <div id="todoContainer"></div>
                            </li>
                            <li onClick={this.showDone}>
                                Done: {this.state.done.length}
                                <div id="doneContainer"></div>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </div>
        );
    }
}