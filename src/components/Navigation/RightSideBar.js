import React, { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CreateIcon from "@mui/icons-material/Create";
//import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import SettingsPowerIcon from "@mui/icons-material/SettingsPower";
//import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
//import PostAddIcon from "@mui/icons-material/PostAdd";
//import WorkIcon from "@mui/icons-material/Work";
import Box from '@mui/material/Box';
import { withRouter } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { signOut } from "../../actions/action";


function RightSideBar({history}) {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        left: false,
        right: false,
    });

    // Toggle the drawer
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // Information for the right side navigation ,The list of the items on the sidebar
    const rightSideData = [
        {
            text: "New Job",
            icon: <CreateIcon />,
            onClick: () => history.push("/create/job"),
        },
        {
            text: "Jobs",
            icon: <SelectAllIcon />,
            onClick: () => {
                history.push("/view/jobs")
            }
        },
        /* 
        ,
        {
            text: "New Customer",
            icon: <PersonAddIcon />,
            onClick: () => history.push("/create/customer"),
        },
        {
            text: "Customers",
            icon: <PeopleAltIcon />,
            onClick: () => history.push("/view/customers"),
        },
        {
            text: "New Inventory",
            icon: <PostAddIcon />,
            onClick: () => history.push("/create/inventory"),
        },
        {
            text: "Inventories",
            icon: <WorkIcon />,
            onClick: () => history.push("/list/inventory"),
        },
        */
        {
            text: "Logout",
            icon: <SettingsPowerIcon />,
            onClick: (() => dispatch(signOut())),
        },
    ];

    // The list of the items on the sidebar
    const list = (anchor) => (
        <Box
            //className='list'
            sx={{ width: '15rem' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {/* Destructure the text, icon and onClick from RightSideData*/}
               
                {rightSideData.map(({ text, icon, onClick }) => (
                    <ListItem button key={text} onClick={onClick}>
                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button  
                        style={{color: "#4e4af2", fontFamily: "Poppins", fontSize: "25px", fontWeight: "500"}} 
                        onClick={toggleDrawer(anchor, true)}>
                        MENU
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default withRouter(RightSideBar);
