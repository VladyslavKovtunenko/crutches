import React from 'react'
import ReactDOM from 'react-dom'
import {TodoTask} from './tasks'
import {SubjectList} from './subjectList'

export class User extends React.Component{
    constructor(props){
        super(props);
        
        let name = this.props.info.firstName + ' ' + this.props.info.lastName;
        
        /*
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
        this.showDone = this.showDone.bind(this);*/

        this.state = {
            name
        };

        console.log(this.props);

        this.subjectList = {
            userID: this.props.info.userID,
            groupID: this.props.info.groupID,
            subjects: this.props.info.subjects
        }
    }
    
    render(){
        return(
            <div>
                <div className="col-md-6">
                    <img src={this.props.info.avatar}/>
                </div>
                <div className="col-md-6">
                    <h2>{this.state.name}</h2>
                    <p className="lead">{this.props.info.groupName}</p>
                </div>
                <div className="col-md-12">
                <ul className="list-unstyled">
                    <h3>Subjects:</h3>
                    <SubjectList info = {this.subjectList} />
                </ul>
                    </div>
            </div>
        );
    }
}
