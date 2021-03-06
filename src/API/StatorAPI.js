import React, {Component} from "react";
class StatorAPI extends Component{
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
        this.state={
            slotType:'',
            H0:'',
            H1:'',
            H2:'',
            W0:'',
            W1:'',
            W2:''
        }
        this.state={
            Conductor_type:'',
            Nwpcc:'',
            Whcc:'',
            wins_wire:'',
            wins_cond:'',
            cond_material:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm_Slot=this.submitForm_Slot.bind(this);
        this.submitForm_stator=this.submitForm_stator.bind(this);
        this.submitForm_Conductor=this.submitForm_Conductor.bind(this);
    }
    changeHandler(event){
        this.setState({[event.target.name]:event.target.value});
        console.log('This is at the change handler');
        console.log(this.state)
    }
    submitForm_Slot=event=>{
        event.preventDefault();
        console.log(this.state)
        fetch('http://127.0.0.1:8000/slot/',{
            method:'POST',
            body:JSON.stringify({
                slotType:this.state.slotType,
                H0:this.state.H0,
                H1:this.state.H1,
                H2:this.state.H2,
                W0:this.state.W0,
                W1:this.state.W1,
                W2:this.state.W2
            }),
            headers:{
                'Content-type':'application/json;',
            },
            // credentials:'include'
        })
            .then(respose=>respose.json())
            .then((data)=>console.log(data));
        this.setState({
            slotType:'',
            H0:'',
            H1:'',
            H2:'',
            W0:'',
            W1:'',
            W2:''
        });

    }
    submitForm_Conductor=event=>{
        event.preventDefault();
        console.log(this.state)
        fetch('http://127.0.0.1:8000/conductor/',{
            method:'POST',
            body:JSON.stringify({
                Conductor_type:this.state.Conductor_type,
                Nwpcc:this.state.Nwpcc,
                Whcc:this.state.Whcc,
                Wins_wire:this.state.Wins_wire,
                Wins_cond:this.state.Wins_cond,
                Cond_material:this.state.Cond_material
            }),
            headers:{
                'Content-type':'application/json;',
            },
            // credentials:'include'
        })
            .then(response=>response.json())
            .then((data)=>console.log(data));
        this.setState({
            Conductor_type:'',
            Nwpcc:'',
            Whcc:'',
            Wins_cond:'',
            Cond_material:''
        });


    }


    submitForm_stator=event=>{
        event.preventDefault();
        console.log(this.state)
        fetch('http://127.0.0.1:8000/stator/',{
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
            <>
                <div>
                    <h1>This is for Stator forms submission</h1>
                    <table className='table-table-bordered'>
                        <tbody>
                        <tr>
                            <th>Slottype</th>
                            <td><input defaultValue={this.state.slotType} onChange={this.changeHandler} name='slotType' className='form-control' type='text'/></td>
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
                            <td><input defaultValue={this.state.W1} onChange={this.changeHandler} name='W1' type='text' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>W2</th>
                            <td><input defaultValue={this.state.W2} onChange={this.changeHandler} name='W2' type='text' className='form-control'/></td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <input type='submit' onClick={this.submitForm_Slot} className='btn btn-dark'/>
                            </td>
                        </tr>
                        </tbody>

                    </table>


                </div>
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
                            <input type='submit' onClick={this.submitForm_stator} className='btn btn-dark'/>
                        </td>
                    </tr>
                    </tbody>

                </table>
                <div>
                    <table className='table-table-bordered'>
                        <tbody>
                        <tr>
                            <th>Conductor Type</th>
                            <td><input defaultValue={this.state.Conductor_type} onChange={this.changeHandler} name='Conductor_type' className='form-control' type='text'/></td>
                        </tr>

                        <tr>
                            <th>Nwpcc</th>
                            <td><input defaultValue={this.state.Nwpcc} onChange={this.changeHandler} name='Nwpcc' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>Whcc</th>
                            <td><input defaultValue={this.state.Whcc} onChange={this.changeHandler} name='Whcc' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>Wins Wire</th>
                            <td><input defaultValue={this.state.Wins_wire} onChange={this.changeHandler} name='Wins wire' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>Wins Cond</th>
                            <td><input defaultValue={this.state.Wins_cond} onChange={this.changeHandler} name='W0' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>Cond Material</th>
                            <td><input defaultValue={this.state.Cond_material} onChange={this.changeHandler} name='W1' type='text' className='form-control'/></td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <input type='submit' onClick={this.submitForm_Conductor} className='btn btn-dark'/>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
            </>
        );
    }
}
export default StatorAPI;