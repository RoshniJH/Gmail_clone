import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
const  dispatch = useDispatch();

    return <div className="sidebar">
    <Button 
    startIcon={<AddIcon fontSize="large" />} 
    className="startbar__compose"
    onClick={() =>dispatch(openSendMessage())}
    >
    Compose
    </Button>
    <SidebarOption Icon={InboxIcon} title="Inbox" number={53} selected={true}/>
    <SidebarOption Icon={StarIcon} title="Starred" number={5} />
    <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={2} />
    <SidebarOption Icon={LabelImportantIcon} title="Important" number={5} />
    <SidebarOption Icon={NearMeIcon} title="Sent" number={20} />
    <SidebarOption Icon={NoteIcon} title="Drafts" number={3} />
    <SidebarOption Icon={ExpandMoreIcon} title="More" number={7} />
    <div className="sidebar__footer">
    <div className="sidebar__footerIcon">
    <IconButton>
    <PersonIcon />
    </IconButton>
    <IconButton>
    <DuoIcon />
    </IconButton>
    <IconButton>
    <PhoneIcon/>
    </IconButton>
    </div>
    </div>
    </div>
}

export default Sidebar;