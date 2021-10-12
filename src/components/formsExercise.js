import React, {Component} from "react";
class formsExercise extends Component{
    constructor() {
        super();
        this.state={
            coreLength:'',
            innerDiameter:'',
            outerDiameter:'',
            packingFactor:'',
            slots:'',
            material:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }
    changeHandler(event){
        this.setState({[event.target.name]:event.target.value});
    }
    submitForm=event=>{
        event.preventDefault();
        fetch('http://127.0.0.1:8000/stator/',{
            method:'POST',
            body:JSON.stringify({
                coreLength:this.state.coreLength,
                innerDiameter:this.state.innerDiameter,
                outerDiameter:this.state.outerDiameter,
                packingFactor:this.state.packingFactor,
                slots:this.state.slots,
                material:this.state.material
            }),
            headers:{
                'Content-type':'application/json; charset=UTF-8',
            },
        credentials:'include'
        })
            .then(response=>response.json())
            .then((data)=>console.log(data));
        this.setState({
            coreLength:'',
            innerDiameter:'',
            outerDiameter:'',
            packingFactor:'',
            slots:'',
            material:''
        });
    }
    // eslint-disable-next-line react/require-render-return
    render(){
        return(
            <table className='table-table-bordered'>
                <tbody>
                <tr>
                    <th>coreLength</th>
                    <td><input defaultValue={this.state.coreLength} name='coreLength' type='number'/></td>
                </tr>
                <tr>
                    <th>inner Diameter</th>
                    <td><input defaultValue={this.state.innerDiameter} name='innerDiameter' type='number' className='form-control'/></td>
                </tr>
                <tr>
                    <th>Outer Diameter</th>
                    <td><input defaultValue={this.state.outerDiameter} name='outerDiameter' type='number' className='form-control'/></td>
                </tr>
                <tr>
                    <th>packing Factor</th>
                    <td><input defaultValue={this.state.packingFactor} name='packingFactor' type='number' className='form-control'/></td>
                </tr>
                <tr>
                    <th>slots</th>
                    <td><input defaultValue={this.state.slots} name='slots' type='number' className='form-control'/></td>
                </tr>
                <tr>
                    <th>material</th>
                    <td><input defaultValue={this.state.material} name='material' type='text' className='form-control'/></td>
                </tr>
                <tr>
                    <td colSpan='2'>
                        <input type='submit' onClick={this.submitForm} className='btn btn-dark'/>
                    </td>
                </tr>
                </tbody>

            </table>
        );
    }
}
export default formsExercise;