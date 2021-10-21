import React, {Component} from "react";
import {FaGem, FaHeart} from "react-icons/fa";
import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';



class CoolingAPI extends Component{

    constructor() {
        super();

        this.state={
            water_jacket:'',
            airgap_Rotor:'',
            airgap_stator:'',
            rotor_face:'',
            stator_face:'',
            stator_windingGap:'',
            statorOuterEW:'',
            stator_innerEW:'',
            shaft:''
        }

        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm_cooling=this.submitForm_cooling.bind(this);
    }
    changeHandler(event){
        this.setState({[event.target.name]:event.target.value});
        console.log('This is at the change handler');
        console.log(this.state)
    }

    submitForm_cooling=event=>{
        event.preventDefault();
        console.log(this.state)
        fetch('http://127.0.0.1:8000/cooling/',{
            method:'POST',
            body:JSON.stringify({
                water_jacket:this.state.water_jacket,
                airgap_Rotor:this.state.airgap_Rotor,
                airgap_stator:this.state.airgap_stator,
                rotor_face:this.state.rotor_face,
                stator_face:this.state.stator_face,
                stator_windingGap:this.state.stator_windingGap,
                statorOuterEW:this.state.statorOuterEW,
                stator_innerEW:this.state.stator_innerEW,
                shaft:this.state.shaft
            }),
            headers:{
                'Content-type':'application/json;',
            },
            // credentials:'include'
        })
            .then(respose=>respose.json())
            .then((data)=>console.log(data));
        this.setState({
            water_jacket:'',
            airgap_Rotor:'',
            airgap_stator:'',
            rotor_face:'',
            stator_face:'',
            stator_windingGap:'',
            statorOuterEW:'',
            stator_innerEW:'',
            shaft:''
        });
    }

    // eslint-disable-next-line react/require-render-return
    render(){


        return(

            <>

                   <section>
                    <ProSidebar>
                        <SidebarHeader>
                            <h1>Cohere Dashboard</h1>
                        </SidebarHeader>
                        <SidebarContent>
                            <Menu iconShape="square">
                                <MenuItem icon={<FaGem/>}>Home</MenuItem>
                                <SubMenu  defaultOpen='true' title="Dimensions" icon={<FaHeart/>}>
                                    <MenuItem icon={<FaGem/>}><a href="/stator"> Stator</a></MenuItem>
                                    <MenuItem icon={<FaGem/>}><a href="/rotor"> Rotor</a></MenuItem>
                                    <MenuItem icon={<FaGem/>}><a href="/housing"> Housing</a></MenuItem>
                                    <MenuItem icon={<FaGem/>}>Key Dimensions</MenuItem>
                                </SubMenu>
                                <MenuItem icon={<FaGem/>}>Losses</MenuItem>
                                <MenuItem icon={<FaGem/>}>Results</MenuItem>
                                <MenuItem icon={<FaGem/>}>Heat Transfer</MenuItem>
                                <MenuItem icon={<FaGem/>}>CFD</MenuItem>
                                <MenuItem icon={<FaGem/>}>FEA</MenuItem>
                                <MenuItem icon={<FaGem/>}>Settings</MenuItem>
                                <MenuItem icon={<FaGem/>}>Logout</MenuItem>
                            </Menu>
                        </SidebarContent>
                    </ProSidebar>

                           <h1>This is for Cooling forms submission</h1>
                           <table className='table-table-bordered' align='center'>
                               <tbody align='center'>
                               <tr>
                                   <th>water_jacket</th>
                                   <td><input defaultValue={this.state.water_jacket} onChange={this.changeHandler} name='water_jacket' className='form-control' type='number'/></td>
                               </tr>
                               <tr>
                                   <th>airgap_Rotor</th>
                                   <td><input defaultValue={this.state.airgap_Rotor} onChange={this.changeHandler} name='airgap_Rotor' type='number' className='form-control'/></td>
                               </tr>
                               <tr>
                                   <th>airgap_stator</th>
                                   <td><input defaultValue={this.state.airgap_stator} onChange={this.changeHandler} name='airgap_stator' type='number' className='form-control'/></td>
                               </tr>
                               <tr>
                                   <th>rotor_face</th>
                                   <td><input defaultValue={this.state.rotor_face} onChange={this.changeHandler} name='rotor_face' type='number' className='form-control'/></td>
                               </tr>
                               <tr>
                                   <th>stator_face</th>
                                   <td><input defaultValue={this.state.stator_face} onChange={this.changeHandler} name='stator_face' type='number' className='form-control'/></td>
                               </tr>
                               <tr>
                                   <th>stator_windingGap</th>
                                   <td><input defaultValue={this.state.stator_windingGap} onChange={this.changeHandler} name='stator_windingGap' type='number' className='form-control'/></td>
                               </tr>
                               <tr>
                                   <th>statorOuterEW</th>
                                   <td><input defaultValue={this.state.statorOuterEW} onChange={this.changeHandler} name='statorOuterEW' type='number' className='form-control'/></td>
                               </tr>
                               <tr>
                                   <th>stator_innerEW</th>
                                   <td><input defaultValue={this.state.stator_innerEW} onChange={this.changeHandler} name='stator_innerEW' type='number' className='form-control'/></td>
                               </tr>
                               <tr>
                                   <th>shaft</th>
                                   <td><input defaultValue={this.state.shaft} onChange={this.changeHandler} name='shaft' type='number' className='form-control'/></td>
                               </tr>
                               <tr>
                                   <td colSpan='2'>
                                       <input type='submit' onClick={this.submitForm_cooling} className='btn btn-dark'/>
                                   </td>
                               </tr>
                               </tbody>
                           </table>

                   </section>

                </>


        );
    }
}
export default CoolingAPI;