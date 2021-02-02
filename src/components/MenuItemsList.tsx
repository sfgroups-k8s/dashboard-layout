import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";

import { DRAWER_LIST } from "../constants/menu";
import MenuItem from "./MenuItem";

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    width: theme.spacing(30),
  },
}));

const MenuItemsList = () => {
  const classes = useStyles();

  const { pathname } = useLocation();

  return (
    <Grid className={classes.list}>
      <List>
        {DRAWER_LIST.map(({ literal, route, Icon }) => (
          <MenuItem
            Icon={Icon}
            literal={literal}
            route={route}
            key={route}
            selected={pathname === route}
          />
        ))}
      </List>
    </Grid>
  );
};

export default MenuItemsList;
