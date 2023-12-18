import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Divider } from '@mui/material';
import { LaboratoryMenu } from 'app/shared/layout/menus/laboratory';

const Menu = ({ mobile, toggleDrawer }) => {
  const closeMenu = () => {
    if (mobile) {
      toggleDrawer();
    }
  };
  return (
    <>
      <React.Fragment>
        <LaboratoryMenu closeMenu={closeMenu} />
        <Divider></Divider>

        <ListSubheader component="div" inset>
          Módulos
        </ListSubheader>

        <ListItemButton component={'a'} href="localhost:3000/" onClick={closeMenu}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Historia clínica" />
        </ListItemButton>

        <ListItemButton component={'a'} href="localhost:5173/" onClick={closeMenu}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Observaciones y procedimientos" />
        </ListItemButton>

        <ListItemButton component={'a'} href="localhost:5174/" onClick={closeMenu}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Medicamentos" />
        </ListItemButton>
      </React.Fragment>
    </>
  );
};

export default Menu;
