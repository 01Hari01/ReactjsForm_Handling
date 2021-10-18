import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Model Tree',
        path: '/Model Tree',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Dimensions',
        path: '/dimensions',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
        subNav:[
            {
                title: 'Stator',
                path: '/stator',
                icon: <IoIcons.IoIosAlarm/>
            },
            {
                title: 'Rotor',
                path: '/rotor',
                icon: <IoIcons.IoIosAlarm/>
            },
            {
                title: 'keyDimensions',
                path: '/keydimensions',
                icon: <IoIcons.IoIosAlarm/>
            },
        ]

    },
    {
        title: 'Visualise',
        path: '/',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Coolant',
        path: '/',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Heat Transfer Coefficients',
        path: '/',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Losses',
        path: '/',
        icon: <IoIcons.IoIosFastforward />,
        cName: 'nav-text',
    },
    {
        title: 'Results',
        path: '/',
        icon: <IoIcons.IoIosAddCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Compare Results',
        path: '/',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Sensitivity Study',
        path: '/',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/login',
        icon: <IoIcons.IoIosAlarm />,
        cName: 'nav-text'
    },

];