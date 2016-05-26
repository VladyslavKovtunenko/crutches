/**
 * TODO this data must coming from server
 */

export const Johny = {
    avatar: "http://www.metallica.marjantrajkovski.com/img/clanovi/james-hetfield.jpg",
    firstName: "John",
    lastName: "Smith",
    group: "PM3",
    tasks:[
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
    ]
};