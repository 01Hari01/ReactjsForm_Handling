import React, { Component } from "react";
import { Form, Button } from 'semantic-ui-react';
import jsonfile from'jsonfile';

var file = 'data.json'

var obj = {name: 'JP'}


export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            h0: "",
            h1: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.sendDataSomewhere = this.sendDataSomewhere.bind(this);
        const handleSaveToPC = (jsonData,filename) => {
            const fileData = JSON.stringify(jsonData);
            const blob = new Blob([fileData], {type: "text/plain"});
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = `${filename}.json`;
            link.href = url;
            link.click();
        }

    }


    handleChange = (e, {h0, h1}) => {
        this.setState({[h0]: h1})
    }

    sendDataSomewhere = function jsonfile(file){
        jsonfile.writeFile(file, obj, function (err) {
            console.error(err);
        });
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.sendDataSomewhere}>
                    <Form.Field>
                        <Form.Input name="name" value={this.state.h0} onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input name="email" value={this.state.h1} onChange={this.handleChange}/>
                    </Form.Field>
                    <input type='submit' onSubmit={this.state.handleChange}>Submit</input>
                </Form>
            </div>
        );
    }
}