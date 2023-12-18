import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Divider } from '@mui/material';
import { LaboratoryMenu } from 'app/shared/layout/menus/laboratory';
import { Link } from 'react-router-dom';

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

        <ListItemButton component={Link} to="http://localhost:5174/med" onClick={closeMenu}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Medicamentos" />
        </ListItemButton>

        <ListItemButton component={Link} to="http://localhost:3000/emr" onClick={closeMenu}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Historia Clínica" />
        </ListItemButton>

        <ListItemButton component={Link} to="http://localhost:5173/oap" onClick={closeMenu}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Observaciones y procedimientos" />
        </ListItemButton>
      </React.Fragment>
    </>
  );
};

export default Menu;
