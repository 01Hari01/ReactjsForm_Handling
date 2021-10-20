import React, {Component} from "react";
class RotorAPI extends Component{
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
        console.log('This is at the change handler');
        console.log(this.state)
    }
    submitForm_holes=event=>{
        event.preventDefault();
        console.log(this.state)
        fetch('http://127.0.0.1:8000/holes/',{
            method:'POST',
            body:JSON.stringify({
                slot:this.state.slot


            })

        })
    }

    submitForm_slot=event=>{
        event.preventDefault();
        console.log(this.state)
        fetch('http://127.0.0.1:8000/slot/',{
            method:'POST',
            body:JSON.stringify({
                coreLength:this.state.coreLength,
                InnerDiameter:this.state.innerDiameter,
                outerDiameter:this.state.outerDiameter,
                packingFactor:this.state.packingFactor,
                slots:this.state.slots,
                material:this.state.material
            }),
            headers:{
                'Content-type':'application/json;',
            },
            // credentials:'include'
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
                    <td><input defaultValue={this.state.coreLength} onChange={this.changeHandler} name='coreLength' className='form-control' type='number'/></td>
                </tr>

                <tr>
                    <th>inner Diameter</th>
                    <td><input defaultValue={this.state.innerDiameter} onChange={this.changeHandler} name='innerDiameter' type='number' className='form-control'/></td>
                </tr>
                <tr>
                    <th>Outer Diameter</th>
                    <td><input defaultValue={this.state.outerDiameter} onChange={this.changeHandler} name='outerDiameter' type='number' className='form-control'/></td>
                </tr>
                <tr>
                    <th>packing Factor</th>
                    <td><input defaultValue={this.state.packingFactor} onChange={this.changeHandler} name='packingFactor' type='number' className='form-control'/></td>
                </tr>
                <tr>
                    <th>slots</th>
                    <td><input defaultValue={this.state.slots} onChange={this.changeHandler} name='slots' type='number' className='form-control'/></td>
                </tr>
                <tr>
                    <th>material</th>
                    <td><input defaultValue={this.state.material} onChange={this.changeHandler} name='material' type='text' className='form-control'/></td>
                </tr>
                <tr>
                    <td colSpan='2'>
                        <input type='submit' onClick={this.submitForm_slot} className='btn btn-dark'/>
                    </td>
                </tr>
                </tbody>

            </table>
        );
    }
}
export default RotorAPI;