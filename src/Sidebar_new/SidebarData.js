import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>
    },
    {
        title: 'Dimensions',
        path: '/dimensions',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Stator',
                path: '/stator',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Rotor',
                path: '/rotor',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Housing',
                path: '/rotor',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'KeyDimensions',
                path: '/keydimensions',
                icon: <IoIcons.IoIosPaper />
            },

        ]
    },
    {
        title: 'Heat Transfer',
        path: '/htc',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Option 1',
                path: 'option1',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            }
        ]
    },
    {
        title: 'Losses',
        path: '/losses',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'FEA',
        path: '/fea',
        icon: <IoIcons.IoMdPeople />
    },
    {
        title: 'CFD',
        path: '/cfd',
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'cfd1',
                path: 'cfd1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'cfd2',
                path: 'cfd2',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Results',
        path: '/results',
        icon: <IoIcons.IoMdHelpCircle />
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <IoIcons.IoMdHelpCircle />
    }
];
