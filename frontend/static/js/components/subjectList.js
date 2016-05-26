import React from 'react'
import {Subject} from './subject'

export class SubjectList extends React.Component{
    constructor(props){
        super(props);

        //console.log(this.props);
    }

    render(){
        return (
            <div>
                {this.props.info.subjects.map((subject) => (
                    <Subject
                        subject = {subject}
                        groupID = {this.props.info.groupID}
                        userID = {this.props.info.userID}
                    />
                ))
                }
            </div>
        );
    }
}