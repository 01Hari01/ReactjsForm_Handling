import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {useState} from "react";
import Icon from "react-suite/build/components/ui/Icon";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from  'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import ''
import {FaGem, FaHeart} from "react-icons/fa";

function PSBar(){
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

export default PSBar;