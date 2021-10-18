import {useState} from "react";
import {ProSidebar,SidebarHeader,Menu,MenuItem,SubMenu} from "react-pro-sidebar";
import {icons} from "react-icons";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from  'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import ''
import {FaGem, FaHeart} from "react-icons/fa";

function StatorPage(){
    const [navbarOpen,setNavbarOpen]=useState(true)
    return(
        <div>
            <ProSidebar>
                <SidebarHeader>
                    Cohere Dashboard
                </SidebarHeader>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem/>}>Home</MenuItem>
                    <SubMenu title="Dimensions" icon={<FaHeart/>}>
                        <MenuItem icon={<FaGem/>}>Stator</MenuItem>
                        <MenuItem icon={<FaGem/>}>Rotor</MenuItem>
                        <MenuItem icon={<FaGem/>}>Housing</MenuItem>
                        <MenuItem icon={<FaGem/>}>Key Dimensions</MenuItem>
                    </SubMenu>
                    <MenuItem icon={<FaGem/>}>Losses</MenuItem>
                    <MenuItem icon={<FaGem/>}>Results</MenuItem>
                    <MenuItem icon={<FaGem/>}>Heat Transfer</MenuItem>
                    <MenuItem icon={<FaGem/>}>CFD</MenuItem>
                    <MenuItem icon={<FaGem/>}>FEA</MenuItem>
                </Menu>
            </ProSidebar>
        </div>

    )
}

export default StatorPage;