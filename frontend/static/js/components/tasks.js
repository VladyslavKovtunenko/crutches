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
                        <dd><h4>{task.title}</h4></dd>
                        <dd>{task.description}</dd>
                        <dd>Deadline: {task.deadline.toString()}</dd>
                    </dl>
                    <form role="form" className="form-horizontal">
                        <div className="form-group">
                            <input type="file"/>
                        </div>
                    </form>
                </li>))
            }
        </ol>;
    }
}
