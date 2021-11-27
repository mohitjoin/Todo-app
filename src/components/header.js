import React from 'react'
import './style.css'


export default class HeadToDo extends React.Component {



    render() {
        let url = "https://github.com/mohitk30";
        return (

            <
            nav >

            <
            span className = "heading-app" >
            ToDo App < /span > <
            a className = "github-link"
            href = { url } > Github < /a > < /
            nav >

        );
    }
}