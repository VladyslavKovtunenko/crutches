import React from 'react'

export class Tasks extends React.Component{
    constructor(props){
        super(props);

        console.log(this.props);
    }

    render(){
        return <ol>
            {this.props.tasks.map((task) => (
                <li>
                    <dl>
                        <dt>{task.title}</dt>
                        <dd>{task.description}</dd>
                        <dd>Deadline: {task.deadline.toString()}</dd>
                    </dl>
                    <dl>
                        <input type="file"/>
                    </dl>
                </li>))
            }
        </ol>;
    }
}
