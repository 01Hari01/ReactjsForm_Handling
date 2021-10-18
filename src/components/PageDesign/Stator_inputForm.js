import SplitPane from "react-split-pane";
import React, {useState} from "react";

import './dimensions.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from "./sidebarData";
import { IconContext } from 'react-icons';
import {useForm} from "react-cool-form";
import './inputform.css';
function Stator_inputForm() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const div_style={
        background:'skyblue',
        float:'right'
    }
    const button_style={
        background: 'yellow',
        border:'',
    }
    const{form,use}=useForm({
        defaultValues:{},
        onSubmit:values => alert(JSON.stringify(values,undefined,2))
    })
    return (
        <>

            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <a href='/#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </a>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <a href='/#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </a>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <a href={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>

                <SplitPane split="vertical" minSize={360}>
                    <form ref={form} noValidate>
                        <div className='count'>Stator Dimensions Page</div>
                        <div>
                            <input name='coreDimensions' placeholder='coreDimensions' required/>
                        </div>
                        <div>
                            <input name='innerDimensions' placeholder='innerDimensions' required/>
                        </div>
                        <select name='slots'>
                            <option value=''>I am interested in </option>
                            <option value='react'>Slots</option>
                            <option value='react'>Holes</option>
                        </select>
                    </form>


                        <form  className='form-1' id='SlotForm'><br/><br/>
                            <b className=''>Slot Type</b><br/><select className=''>
                                <option>Parallel</option>
                                <option>Round</option>
                            </select><br/>
                        </form>
                        <form className='form-1'>
                            <table className='table-table-bordered'>
                                <tbody>
                                <tr>
                                    <th>H0</th>
                                    <td><input className='inputs' name='H0' type='number'/></td>
                                </tr>
                                <tr>
                                    <th>H1</th>
                                    <td><input name='H1' type='number' className='form-control'/></td>
                                </tr>
                                <tr>
                                    <th>H2</th>
                                    <td><input name='H2' type='number' className='form-control'/></td>
                                </tr>
                                <tr>
                                    <th>W0</th>
                                    <td><input  name='W0' type='number' className='form-control'/></td>
                                </tr>
                                <tr>
                                    <th>W1</th>
                                    <td><input  name='W1' type='number' className='form-control'/></td>
                                </tr>
                                <tr>
                                    <th>W2</th>
                                    <td><input  name='W2' type='text' className='form-control'/></td>
                                </tr>
                                <tr>
                                    <td colSpan='2' align='center'>{''}{''}
                                        <input type='submit'  className='btn btn-dark'/><br/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                        <form className='form-1'>
                            <table className='table-table-bordered'>
                                <tbody>
                                <tr>
                                    <th><b>Conductor Type</b> </th>
                                    <td><select  name='Conductor Type'  className='form-control'>
                                        <option>Randomly Wound</option>
                                        <option>Rectangular</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <th>Nwpcc</th>
                                    <td><input  name='Nwpcc' type='number'/></td>
                                </tr>
                                <tr>
                                    <th>Wwire</th>
                                    <td><input  name='Wwire' type='number' className='form-control'/></td>
                                </tr>
                                <tr>
                                    <th>Winswire</th>
                                    <td><input name='wins_wire' type='number' className='form-control'/></td>
                                </tr>
                                <tr>
                                    <th>Wins_cond</th>
                                    <td><input  name='wins_cond' type='number' className='form-control'/></td>
                                </tr>
                                <tr>
                                    <th>Material</th>
                                    <td><select  name='Conductor Material' className='form-control'>
                                        <option>Copper</option>
                                        <option>Iron</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <th> Ins_Material</th>
                                    <td><select  name='Insulating material'  className='form-control'>
                                        <option>Resin</option>
                                        <option>Iron</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td colSpan='2' align='center'>{''}{''}
                                        <input type='submit'  className='btn btn-dark'/><br/>
                                    </td>
                                </tr>
                                </tbody>

                            </table>

                        </form>

                    <div className="col-sm-9 showcase-img">
                        Images Window <br/>
                        <button style={button_style} type='submit' >UPDATE VIEW</button>
                        <footer className='footer'>Help/Explanations Window (TBD)</footer>
                    </div>
                    <div className="col-sm-9 showcase-img_ParallelSlot">

                    </div>
                </SplitPane>

        </>

    );
}
export default Stator_inputForm;
