import React, {Component} from "react";
import axios from "axios";

export default class AxiosRequest extends Component{
    state={
        CoreLength:'',
        innerDiameter: '',
        OuterDimeter:' ',
        packingFactor: '',
        slots:'',
        material:''
    }
    handleChange=event=>{
        this.setState({CoreLength:event.target.value});
        this.setState({innerDiameter:event.target.value});
        this.setState({OuterDiameter:event.target.value});
        this.setState({packingFactor:event.target.value});
        this.setState({slots:event.target.value});
        this.setState({material:event.target.value});
    }
    handleSubmit=event=>{
        event.preventDefault();
        axios.post(`https://localhost:8000/stator`)
            .then(res=>{
                console.log(res);
                console.log(res.data);
            })
    }
    render() {
        return(
            <div className='form-control'>
                <form onSubmit={this.handleSubmit} className='form-group'>
                    Cl:<input type='number' name='CoreLength' onChange={this.handleChange}/><br/>
                    iD:<input type='number' name='innerDiameter' onChange={this.handleChange}/><br/>
                    hc:<input type='number' name='outerDiameter' onChange={this.handleChange}/><br/>
                    pf:<input type='number' name='packingFactor' onChange={this.handleChange}/><br/>
                    slots:<input type='number' name='slots' onChange={this.handleChange}/><br/>
                    material:<input type='text'   name='material' onChange={this.handleChange}/><br/>
                    submit<button type='submit'   onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }

}