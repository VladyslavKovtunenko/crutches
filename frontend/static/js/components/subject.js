import React from 'react'
import ReactDOM from 'react-dom'
import {Tasks} from './tasks'
import {ClearTasks} from './clearTasks'
import $ from 'jquery'


export class Subject extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);

        this.showTasks = this.showTasks.bind(this);
        this.isShowing = false;
    }

    showTasks(){
        if (!this.isShowing) {
            const url = '/' + this.props.idUser + '/' + this.props.idGroup + '/' + this.props.subject.idSubject;
            const domain = 'http://localhost:3000';
            console.log(domain + url);
            /*$.ajax({
                         url: domain,
                         type: 'GET',
                         contentType: 'application/json',
                         success: function (data) {
                         const tasks = [
                         {
                         subject: "Programing",
                         title: "Fibonacci sequence",
                         description: "Write a function to generate the nth Fibonacci number. Solutions can be iterative or recursive.",
                         deadline: new Date(2016, 3, 13),
                         isDone: true
                         },
                         {
                         subject: "Object-oriented programming",
                         title: "Classes",
                         description: "Create simple program exemple using classes in Java",
                         deadline: new Date(2016, 5, 12),
                         isDone: false
                         },
                         {
                         subject: "Programing",
                         title: "Bubble Sort",
                         description: "Build a general C program that creates or loads an array of integers. Write a function called bubblesort that sorts a copy of the array of integers and counts how many comparisons and exchanges are required to perform the sort.",
                         deadline: new Date(2016, 4, 5),
                         isDone: true

                         },
                         {
                         subject: "Object-oriented programming",
                         title: "Create simple ToDoList. Add functionality for create and delete task",
                         description: "",
                         deadline: new Date(2016, 4, 30),
                         isDone: false
                         },
                         {
                         subject: "Numerical analysis",
                         title: "Euler method",
                         description: "Create Matlab program for solving any ordinary differential equation using the Euler method.",
                         deadline: new Date(2016, 5, 7),
                         isDone: false
                         }
                         ];
                         ReactDOM.render(<Tasks task = {tasks}/>, document.getElementById(this.props.subject.subjectName));
                         }
                         });*/
            const tasks = [
                {
                    subject: "Programing",
                    title: "Fibonacci sequence",
                    description: "Write a function to generate the nth Fibonacci number. Solutions can be iterative or recursive.",
                    deadline: new Date(2016, 3, 13),
                    isDone: true
                },
                {
                    subject: "Object-oriented programming",
                    title: "Classes",
                    description: "Create simple program exemple using classes in Java",
                    deadline: new Date(2016, 5, 12),
                    isDone: false
                },
                {
                    subject: "Programing",
                    title: "Bubble Sort",
                    description: "Build a general C program that creates or loads an array of integers. Write a function called bubblesort that sorts a copy of the array of integers and counts how many comparisons and exchanges are required to perform the sort.",
                    deadline: new Date(2016, 4, 5),
                    isDone: true

                },
                {
                    subject: "Object-oriented programming",
                    title: "Create simple ToDoList. Add functionality for create and delete task",
                    description: "",
                    deadline: new Date(2016, 4, 30),
                    isDone: false
                },
                {
                    subject: "Numerical analysis",
                    title: "Euler method",
                    description: "Create Matlab program for solving any ordinary differential equation using the Euler method.",
                    deadline: new Date(2016, 5, 7),
                    isDone: false
                }
            ];
            ReactDOM.render(<Tasks tasks={tasks}/>, document.getElementById(this.props.subject.nameSubject));
            this.isShowing = true;
        } else {
            ReactDOM.render(<ClearTasks/>, document.getElementById(this.props.subject.nameSubject));
            this.isShowing = false;
        }
    }

    render(){
        return (
            <li onClick = {this.showTasks}>
                <h4>{this.props.subject.nameSubject}</h4>
                <div id={this.props.subject.nameSubject}></div>
            </li>
        )
    }
}
