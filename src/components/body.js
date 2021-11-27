import React, { useState } from 'react';
import './style.css'
import { FaTrashAlt, FaPencilAlt, FaHandPointRight } from "react-icons/fa";



function Bodys() {
    const editIconsty = {
        color: "#010A1B",
        marginLeft: "30px",
        height: "40px"
    };

    const pointIconsty = {
        color: "#fff",
        marginLeft: "-30px",
        height: "40px"
    };


    const [myinns, setinn] = useState("invi");

    // state = {
    //     tasks: [{
    //         id: 1,
    //         task: "Complete Todo App"
    //     }, {

    //         id: 2,
    //         task: "Test Todo App"


    //     }]
    // }



    const [mytasks, settask] = useState([
        { id: 1, task: 'Your first task is to test all functionalities of this react todo app and then go ahead to star ⭐ this repo on Github and Hit the FOLLOW !!!' }

    ]);
    // const [mytask, settask] = useState('');
    var [taskdat, settaskdata] = useState("")
    var [taskdatup, settaskdataup] = useState("")
    var [taskdatupind, settaskdataupind] = useState("")



    const handelTaskDelete = (tt) => {
        // console.log("Delete");
        // console.log(tt);

        setinn((pp) => {
            return pp = 'invi';
        });



        settask(p => p.filter(k => k.task !== tt) //safer approach

            // return pre.concat(newTask);


        );
        //const mytasksn = mytasks.filter(k => k.task !== tt);



    }


    // const getIndex1 = (value, arr) => {
    //     for (var i = 0; i < arr.length; i++) {
    //         if (arr[i].task === value) {
    //             return i;
    //         }
    //     }
    // }
    const handelTaskEdit = (te, co) => {
        console.log("Edit");


        setinn((pp) => {
            return pp = 'vis';
        });

        // var ind = getIndex1(taskdatup, mytasks)
        settaskdataupind((par) => {
            return par = co;
        });


        settaskdataup((pam) => {
            return pam = te;
        });


    }

    const handelTaskUpdate = () => {
        // console.log("Update")

        setinn((pp) => {
            return pp = 'invi';
        });

        // console.log(mytasks[taskdatupind].task)

        settask((pre) => { //safer approach

            // if ((pre[ind].task !== taskdatup)) {
            pre[taskdatupind].task = taskdatup
                //     // }
            return pre



        });
        // settask(p => mytasks[ind].task = "mohit")

    }


    const handelTaskAdd = () => {
        // const [title, setTitle] = useState('')
        // const ta = document.getElementbyId('newTask');

        const newTask = {
            id: mytasks.length + 1,
            task: taskdat
        }


        //this.state.push(newTask);

        if (newTask.task !== '') {
            settask((pre) => { //safer approach

                return pre.concat(newTask);


            });

        }

        settaskdata((pp) => {
            return taskdat = '';
        });


        // settask([
        //     ...mytask, newTask
        // ]);
        //settask(mytask.concat(newTask));
        //  console.log(mytask);
    };


    return ( <
        div >


        <
        div className = "main-div" >
        <
        div className = "new-tasker" >
        <
        div > < strong > Add new task < /strong>< div > < /div > <
        input
        //onChange = { event => setTitle(event.target.value) }
        type = "text"
        className = "newTaski"
        value = { taskdat }
        onChange = {
            (e) => {

                settaskdata(e.target.value)

            }
        }

        placeholder = "Enter your task here" / > < button

        onClick = { handelTaskAdd }

        >
        Add Task < /button> < /
        div >



        <
        div className = { myinns } > < strong >
        Update Task < /strong> < div > < /div > <
        input
        //onChange = { event => setTitle(event.target.value) }
        type = "text"
        className = "newTaski"
        value = { taskdatup }
        onChange = {
            (e) => {

                settaskdataup(e.target.value)

            }
        }

        placeholder = "Enter your task here" / > < button

        onClick = { handelTaskUpdate }

        >
        Update < /button> < /
        div >


        <
        /
        div >

        <
        div className = "task-shower" >
        <
        div className = "mytasks" > < span > Your All tasks < /span> < /div >

        {



            mytasks.map((check, index) => {
                return (

                    <
                    div key = { index }
                    className = "tadks-div-sm" >

                    <
                    div className = "task-head-and-del" > < div > < FaHandPointRight style = { pointIconsty }
                    /> Task: < /div > < div className = "delete-icon" > < FaTrashAlt style = { editIconsty }
                    onClick = {
                        () => { handelTaskDelete(check.task) }
                    }
                    / > < FaPencilAlt style = { editIconsty }
                    onClick = {

                        () => { handelTaskEdit(check.task, index) }
                    }
                    / > < /div > < /div > <
                    span > { check.task } < /span> 




                    <
                    / 
                    div >
                )
            })


        }


        <
        /div>



        <
        /div>


        <
        /div>

    );
}


export default Bodys;