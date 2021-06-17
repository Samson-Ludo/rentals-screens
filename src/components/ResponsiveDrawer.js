import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import FindProperty from "./FindProperty";

import "./ResponsiveDrawer.css";
import SearchResultCard from "./SearchResultCard";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: "#201B20",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#201B20",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
    background: "#2D232B",
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = <FindProperty />;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Navbar handleDrawerToggle={handleDrawerToggle} />

      <div className={classes.root}>
        <CssBaseline />
        <nav className={`${classes.drawer}`} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={`${classes.content} mainContent`}>
          <div className={classes.toolbar} />
          <div className="result-container">
            <h2>15 Search Results</h2>
            <div>
              <SearchResultCard />
              <SearchResultCard />
              <SearchResultCard />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ResponsiveDrawer;
