import React, {Component} from "react";
class RotorAPI extends Component{
    constructor() {
        super();
        this.state={
            lamination_type:'',
            coreLength:'',
            rotor_innerDiameter:'',
            rotor_outerDiameter:'',
            holes:'',
            packingFactor:'',
            material:''
        }

        this.state={
            holeType:'',
            H0:'',
            H1:'',
            H2:'',
            W0:'',
            W1:'',
            W3:'',
            magnet_material:''
        }

        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm_hole=this.submitForm_hole.bind(this);
        this.submitForm_rotor=this.submitForm_rotor.bind(this);

    }
    changeHandler(event){
        this.setState({[event.target.name]:event.target.value});
        console.log('This is at the change handler');
        console.log(this.state)
    }
    submitForm_rotor=event=>{
        event.preventDefault();
        console.log(this.state)
        fetch('http://127.0.0.1:8000/rotor/',{
            method:'POST',
            body:JSON.stringify({
                laminationType:this.state.laminationType,
                coreLength:this.state.coreLength,
                rotor_innerDiameter:this.state.rotor_innerDiameter,
                rotor_outerDiameter:this.state.rotor_outerDiameter,
                holes:this.state.holes,
                packingFactor:this.state.packingFactor,
                material:this.state.material
            }),
            headers:{
                'Content-type':'application/json;',
            },
            // credentials:'include'
        })
            .then(respose=>respose.json())
            .then((data)=>console.log(data));
        this.setState({
            laminationType:'',
            coreLength:'',
            rotor_innerDiameter:'',
            rotor_outerDiameter:'',
            holes:'',
            packingFactor:'',
            material:''
        });

    }
    submitForm_hole=event=>{
        event.preventDefault();
        console.log(this.state)
        fetch('http://127.0.0.1:8000/holes/',{
            method:'POST',
            body:JSON.stringify({
                holeType:this.state.holeType,
                H0:this.state.H0,
                H1:this.state.H1,
                H2:this.state.H2,
                W0:this.state.W0,
                W1:this.state.W1,
                W3:this.state.W3,
                magnet_material:this.state.magnet_material
            }),
            headers:{
                'Content-type':'application/json;',
            },
            // credentials:'include'
        })
            .then(response=>response.json())
            .then((data)=>console.log(data));
        this.setState({
            holeType:'',
            H0:'',
            H1:'',
            H2:'',
            W0:'',
            W1:'',
            W3:'',
            magnet_material:''

        });
    }
    // eslint-disable-next-line react/require-render-return
    render(){
        return(
            <>
                <div>
                    <h1>This is for Stator forms submission</h1>
                    <table className='table-table-bordered'>
                        <tbody>
                        <tr>
                            <th>lamination_type</th>
                            <td><input defaultValue={this.state.laminationType} onChange={this.changeHandler} name='lamination_type' className='form-control' type='text'/></td>
                        </tr>

                        <tr>
                            <th>coreLength</th>
                            <td><input defaultValue={this.state.coreLength} onChange={this.changeHandler} name='coreLength' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>rotor_innerDiameter</th>
                            <td><input defaultValue={this.state.rotor_innerDiameter} onChange={this.changeHandler} name='rotor_innerDiameter' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>rotor_outerDiameter</th>
                            <td><input defaultValue={this.state.rotor_outerDiameter} onChange={this.changeHandler} name='rotor_outerDiameter' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>holes</th>
                            <td><input defaultValue={this.state.holes} onChange={this.changeHandler} name='holes' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>packingFactor</th>
                            <td><input defaultValue={this.state.packingFactor} onChange={this.changeHandler} name='packingFactor' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>material</th>
                            <td><input defaultValue={this.state.material} onChange={this.changeHandler} name='material' type='text' className='form-control'/></td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <input type='submit' onClick={this.submitForm_rotor} className='btn btn-dark'/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>


                <table className='table-table-bordered'>
                    <tbody>
                    <tr>
                        <th>holeType</th>
                        <td><input defaultValue={this.state.holeType} onChange={this.changeHandler} name='holeType' className='form-control' type='text'/></td>
                    </tr>

                    <tr>
                        <th>H0</th>
                        <td><input defaultValue={this.state.H0} onChange={this.changeHandler} name='H0' type='number' className='form-control'/></td>
                    </tr>
                    <tr>
                        <th>H1</th>
                        <td><input defaultValue={this.state.H1} onChange={this.changeHandler} name='H1' type='number' className='form-control'/></td>
                    </tr>
                    <tr>
                        <th>H2</th>
                        <td><input defaultValue={this.state.H2} onChange={this.changeHandler} name='H2' type='number' className='form-control'/></td>
                    </tr>
                    <tr>
                        <th>W0</th>
                        <td><input defaultValue={this.state.W0} onChange={this.changeHandler} name='W0' type='number' className='form-control'/></td>
                    </tr>
                    <tr>
                        <th>W1</th>
                        <td><input defaultValue={this.state.W1} onChange={this.changeHandler} name='W1' type='number' className='form-control'/></td>
                    </tr>
                    <tr>
                        <th>W3</th>
                        <td><input step="0.1" defaultValue={this.state.W3} onChange={this.changeHandler} name='W3' type='number' className='form-control'/></td>
                    </tr>
                    <tr>
                        <th>magnet_material</th>
                        <td><input defaultValue={this.state.magnet_material} onChange={this.changeHandler} name='magnet_material' type='text' className='form-control'/></td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <input type='submit' onClick={this.submitForm_hole} className='btn btn-dark'/>
                        </td>
                    </tr>
                    </tbody>

                </table>
            </>
        );
    }
}
export default RotorAPI;