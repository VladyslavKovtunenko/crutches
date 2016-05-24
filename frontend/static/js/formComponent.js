import React from 'react'

export class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props;
    }

    render(){
        let string =[],
            i;
        string[0] = <dd><h3>{this.state.info.header}</h3></dd>;
        for(i = 1; i < this.state.info.list.length; i++){
            string[i]= (
                <dd>
                    <label>
                        {this.state.info.list[i-1].label}
                    </label>
                    <input id={this.state.info.list[i-1].form.id} type={this.state.info.list[i-1].form.type} placeholder={this.state.info.list[i-1].form.placeholder}/>
                </dd>);
        }
        string[i] = (
            <dd>
                <input type={this.state.info.list[i-1].label}/>
                <button id={this.state.info.list[i-1].button.id}>
                    {this.state.info.list[i-1].button.text}
                </button>
            </dd>);

        return (
            <form id={this.state.info.formId}>
                <dl>
                    {string}
                </dl>
            </form>);

    }
}


/*
export let Form = React.createClass({
    render: function () {
        var string = [];
        var i;
        string[0] = <dd><h3>{this.props.info.header}</h3></dd>;
        for(i = 1; i < this.props.info.list.length; i++){
            string[i]= <dd><label>{this.props.info.list[i-1].label}</label>
                <input id={this.props.info.list[i-1].form.id} type={this.props.info.list[i-1].form.type} placeholder={this.props.info.list[i-1].form.placeholder}/>
            </dd>;
        }
        string[i] = <dd><input type={this.props.info.list[i-1].label}/><button id={this.props.info.list[i-1].button.id}>{this.props.info.list[i-1].button.text}</button></dd>;

        return <form id={this.props.info.formId}><dl>{string}</dl></form>;
    }
});
*/
