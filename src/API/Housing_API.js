import React, {Component} from "react";
class HousingAPI extends Component{
    constructor() {
        super();
        this.state={
            housingType:'',
            housingLength:'',
            housingInnerDimameter:'',
            housingOuterDiamter:'',
            waterJacket:'',
            material:''
        }

        this.state={
            innerTemperature:'',
            flowRate:'',
            water_jacket_diameter:'',
            contactGaphousing:''
        }

        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm_housing=this.submitForm_housing.bind(this);
        this.submitForm_Waterjacket=this.submitForm_Waterjacket.bind(this);


    }
    changeHandler(event){
        this.setState({[event.target.name]:event.target.value});
        console.log('This is at the change handler');
        console.log(this.state)
    }
    submitForm_housing=event=>{
        event.preventDefault();
        console.log(this.state)
        fetch('http://127.0.0.1:8000/housing/',{
            method:'POST',
            body:JSON.stringify({
                housingType:this.state.housingType,
                housingLength:this.state.housingLength,
                housingInnerDimameter:this.state.housingInnerDimameter,
                housingOuterDiamter:this.state.housingOuterDiamter,
                waterJacket:this.state.waterJacket,
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
            housingType:'',
            housingLength:'',
            housingInnerDimameter:'',
            housingOuterDiamter:'',
            waterJacket:'',
            material:'',
        });

    }
    submitForm_Waterjacket=event=>{
        event.preventDefault();
        console.log(this.state)
        fetch('http://127.0.0.1:8000/waterjacket/',{
            method:'POST',
            body:JSON.stringify({
                innerTemperature:this.state.innerTemperature,
                flowRate:this.state.flowRate,
                water_jacket_diameter:this.state.water_jacket_diameter,
                contactGaphousing:this.state.contactGaphousing
            }),
            headers:{
                'Content-type':'application/json;',
            },
            // credentials:'include'
        })
            .then(response=>response.json())
            .then((data)=>console.log(data));
        this.setState({
            innerTemperature:'',
            flowRate:'',
            water_jacket_diameter:'',
            contactGaphousing:''
        });
    }
    // eslint-disable-next-line react/require-render-return
    render(){
        return(
            <>
                <div>
                    <h1>This is for Housing forms submission</h1>
                    <table className='table-table-bordered'>
                        <tbody>
                        <tr>
                            <th>housingType</th>
                            <td><input defaultValue={this.state.housingType} onChange={this.changeHandler} name='housingType' className='form-control' type='text'/></td>
                        </tr>

                        <tr>
                            <th>housingLength</th>
                            <td><input defaultValue={this.state.housingLength} onChange={this.changeHandler} name='housingLength' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>housingInnerDimameter</th>
                            <td><input defaultValue={this.state.housingInnerDimameter} onChange={this.changeHandler} name='housingInnerDimameter' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>housingOuterDiamter</th>
                            <td><input defaultValue={this.state.housingOuterDiamter} onChange={this.changeHandler} name='housingOuterDiamter' type='number' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>waterJacket</th>
                            <td><input defaultValue={this.state.waterJacket} onChange={this.changeHandler} name='waterJacket' type='text' className='form-control'/></td>
                        </tr>
                        <tr>
                            <th>material</th>
                            <td><input defaultValue={this.state.material} onChange={this.changeHandler} name='material' type='text' className='form-control'/></td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <input type='submit' onClick={this.submitForm_housing} className='btn btn-dark'/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>


                <table className='table-table-bordered'>
                    <tbody>
                    <tr>
                        <th>innerTemperature</th>
                        <td><input defaultValue={this.state.innerTemperature} onChange={this.changeHandler} name='innerTemperature' className='form-control' type='number'/></td>
                    </tr>

                    <tr>
                        <th>flowRate</th>
                        <td><input defaultValue={this.state.flowRate} onChange={this.changeHandler} name='flowRate' type='number' className='form-control'/></td>
                    </tr>
                    <tr>
                        <th>water_jacket_diameter</th>
                        <td><input defaultValue={this.state.water_jacket_diameter} onChange={this.changeHandler} name='water_jacket_diameter' type='number' className='form-control'/></td>
                    </tr>
                    <tr>
                        <th>contactGaphousing</th>
                        <td><input defaultValue={this.state.contactGaphousing} onChange={this.changeHandler} name='contactGaphousing' type='number' className='form-control'/></td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <input type='submit' onClick={this.submitForm_Waterjacket} className='btn btn-dark'/>
                        </td>
                    </tr>
                    </tbody>

                </table>
            </>
        );
    }
}
export default HousingAPI;