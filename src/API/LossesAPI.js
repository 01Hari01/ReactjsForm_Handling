import React, {Component} from "react";
class LossesAPI extends Component{
    constructor() {
        super();

        this.state={
            stator_winding_core:'',
            stator_winding_EWNDE:'',
            stator_winding_EWDE:'',
            stator_backIron:'',
            stator_Tooth:'',
            rotor_magnet:'',
            rotor_laminationInner:'',
            rotor_laminationOuter:''
        }

        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm_losses=this.submitForm_losses.bind(this)
    }
    changeHandler(event){
        this.setState({[event.target.name]:event.target.value});
        console.log('This is at the change handler');
        console.log(this.state)
    }
    submitForm_losses=event=>{
        event.preventDefault();
        console.log(this.state)
        fetch('http://127.0.0.1:8000/losses/',{
            method:'POST',
            body:JSON.stringify({
                stator_winding_core:this.state.stator_winding_core,
                stator_winding_EWNDE:this.state.stator_winding_EWDE,
                stator_winding_EWDE:this.state.stator_winding_EWDE,
                stator_backIron:this.state.stator_backIron,
                stator_Tooth:this.state.stator_Tooth,
                rotor_magnet:this.state.rotor_magnet,
                rotor_laminationInner:this.state.rotor_laminationInner
            }),
            headers:{
                'Content-type':'application/json;',
            },
            // credentials:'include'
        })
            .then(respose=>respose.json())
            .then((data)=>console.log(data));
        this.setState({
            stator_winding_core:'',
            stator_winding_EWNDE:'',
            stator_winding_EWDE:'',
            stator_backIron:'',
            stator_Tooth:'',
            rotor_magnet:'',
            rotor_laminationInner:'',
            rotor_laminationOuter:''

        });

    }

    // eslint-disable-next-line react/require-render-return
    render(){
        return(
            <>
                <div>
                    <h1>This is for Losses forms submission</h1>
                    <table className='table-table-bordered'>
                        <tbody>
                        <tr>
                            <th>stator_winding_core</th>
                            <td><input defaultValue={this.state.stator_winding_core} onChange={this.changeHandler} name='stator_winding_core' className='form-control' type='number'/></td>
                        </tr>

                        <tr>
                            <th>stator_winding_EWNDE</th>
                            <td><input defaultValue={this.state.stator_winding_EWNDE} onChange={this.changeHandler} name='stator_winding_EWNDE' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>stator_winding_EWDE</th>
                            <td><input defaultValue={this.state.stator_winding_EWDE} onChange={this.changeHandler} name='stator_winding_EWDE' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>stator_backIron</th>
                            <td><input defaultValue={this.state.stator_backIron} onChange={this.changeHandler} name='stator_backIron' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>stator_Tooth</th>
                            <td><input defaultValue={this.state.stator_Tooth} onChange={this.changeHandler} name='stator_Tooth' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>rotor_magnet</th>
                            <td><input defaultValue={this.state.rotor_magnet} onChange={this.changeHandler} name='rotor_magnet' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>rotor_laminationInner</th>
                            <td><input defaultValue={this.state.rotor_laminationInner} onChange={this.changeHandler} name='rotor_laminationInner' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>rotor_laminationOuter</th>
                            <td><input defaultValue={this.state.rotor_laminationOuter} onChange={this.changeHandler} name='rotor_laminationOuter' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <input type='submit' onClick={this.submitForm_losses} className='btn btn-dark'/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </>
        );
    }
}
export default LossesAPI;