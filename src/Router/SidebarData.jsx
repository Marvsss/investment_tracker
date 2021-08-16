import React, {  } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon:  <HomeIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/Settings',
        icon:  <SettingsIcon />,
        cName: 'nav-text'
    },
]