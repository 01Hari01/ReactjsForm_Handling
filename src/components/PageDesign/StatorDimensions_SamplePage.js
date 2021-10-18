import React, {Component} from "react";
import Select from "react-select/base";
import {SelectPicker} from 'rsuite';

const lamination_options=[
    {value:'slots',label:'slots'},
    {value:'holes',label: 'holes'},
];

class StatorDimensions_Sample extends Component{
    state={
        selectedOption:null,
    };
    handleChange=(selectedOption)=>{
        this.setState({selectedOption});
        console.log(`selected Option is`+selectedOption);

    };
    render() {

        return(
            <SelectPicker data={lamination_options} appearance='subtle' placeholder='Slots' onSelect={this.handleChange}/>


        );
    }
}
export default StatorDimensions_Sample