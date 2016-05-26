import React from 'react'

export class DoneTask extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ol>
                {this.props.tasks.map((task, index) => (
                    <li>
                        <h3>{task.subject}</h3>
                        <dl>
                            <dt>{task.title}</dt>
                            <dd>{task.description}</dd>
                            <dd>Deadline: {task.deadline.toString()}</dd>
                        </dl>
                    </li>
                ))}
            </ol>
        );
    }
}