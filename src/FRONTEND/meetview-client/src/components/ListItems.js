import React from 'react';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: '#232529',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon/>
            </ListItemIcon>
            <ListItemText primary="Orders"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Customers"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon/>
            </ListItemIcon>
            <ListItemText primary="Reports"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <ListItemText primary="Integrations"/>
        </ListItem>
    </div>
);

const secondaryListItems = (
    <div>
        <ListSubheader inset>Friends List</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Friend 1"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Friend 2"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Friend 3"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Friend 4"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Friend 5"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Friend 5"/>
        </ListItem>
    </div>
);

export const thirdListItems = (
    <div>
        <Box display="flex" justifyContent="center" m={1} p={1} alignItems="flex-end">
            <Fab mx="auto" aria-label="Add" size="small" style={{background: '#5a656a'}}>
                <AddIcon style={{color: '#eaf8fc'}}/>
            </Fab>
        </Box>

        <Box display="flex" justifyContent="center" m={1} p={1} alignItems="flex-end">
            <Fab mx="auto" aria-label="Add" size="small" style={{background: '#5a656a'}}>
                <SearchIcon style={{color: '#eaf8fc'}}/>
            </Fab>
        </Box>

    </div>
);

export default function ListItems() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return(
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Pixel Sample App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
                <Divider/>
                <List className={classes.fab}>{thirdListItems}</List>
            </Drawer>
        </div>

    )
}