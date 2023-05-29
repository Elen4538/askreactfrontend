import {Component} from 'react';
import AppHeader from "../app-header";

import './app.css';
import AddQuestion from "../add-question/add-question";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Lena'
        }
        //this. here we bind methods
    }

    render() {
        return (
            <div className="App">
                <AppHeader/>
                <i>This is my first page</i>
                <br/>
                <AddQuestion/>

            </div>
        )
    }
}


