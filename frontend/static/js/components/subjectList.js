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
                        idGroup = {this.props.info.idGroup}
                        idUser = {this.props.info.idUser}
                    />
                ))
                }
            </div>
        );
    }
}