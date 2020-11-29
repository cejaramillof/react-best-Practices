import React, { memo, useEffect } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExampleIcon from '@material-ui/icons/Build';
import VacationsIcon from '@material-ui/icons/AirplanemodeActive';
import ProfileIcon from '@material-ui/icons/PermContactCalendar';
import ListIcon from '@material-ui/icons/FormatListNumbered';
import ExitIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { styles } from "../meta/styles";
import NavItem from "./NavItem";
import { Switch } from '@material-ui/core';
import VacationsContainer from './../../VacationsContainer/';
import { Switch as RouterSwitch, Route, Link } from 'react-router-dom';
// import  LoginPage from 'containers/LoginPage/Loadable';
import ProfileContainer from '../../ProfileContainer';
import LoginPage from '../../LoginPage';
import PublicRoute from '../../../components/Routes/PublicRoute';
import PrivateRoute from './../../../components/Routes/PrivateRoute';
import { PropTypes } from 'prop-types';
import VacationDetailsContainer from './../../VacationDetailsContainer/index';
import InteractiveList from './../../VacationsContainer/components/InteractiveList';

const useStyles = styles;
const icons = {
    'example': <ExampleIcon />,
    'vacations': <VacationsIcon />,
    'profile': <ProfileIcon />,
    'list': <ListIcon />,
};

function Navigation({ routes, user, logout, updateThemeMode, isAuthenticated }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [selectedKey, setSelectedKey] = React.useState(routes[0].key);
    const [mode, setMode] = React.useState('light');

    const changeMode = () => {
        if (mode === 'light') {
            setMode('dark')
            updateThemeMode('dark');
            return;
        }
        setMode('light')
        updateThemeMode('light');
    }

    useEffect(() => {
        const drawerItems = routes.map(route => (
            <Link to={route.path} key={route.path}>
                <NavItem
                    onClick={() => setSelectedKey(route.key)}
                    selectedKey={selectedKey}
                    icon={icons[route.key]}
                    item={route} />
            </Link>)
        );
        setItems(drawerItems)
    }, [routes, selectedKey]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
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
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Vacations
                    </Typography>
                    <Switch
                        checked={mode === 'light'}
                        onChange={changeMode}
                        color="secondary"
                        inputsProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    {user && <Typography variant="h6" noWrap>{user.username}</Typography>}
                    {user && <Button onClick={logout} color="inherit">Sign Out</Button>}

                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {items}
                </List>
                <Divider />
                <List>
                    {['Sign Out'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{<ExitIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <RouterSwitch>
                    <Route path="/example" exact>
                        <div className={classes.drawerHeader} />
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                            donec massa sapien faucibus et molestie ac.
                        </Typography>
                        <Typography paragraph>
                            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                        </Typography>
                    </Route>
                    <Route path="/list" exact component={InteractiveList} />
                    <PrivateRoute path="/" exact component={VacationsContainer} isAuthenticated={isAuthenticated} />
                    <PrivateRoute path="/vacation/:id" exact component={VacationDetailsContainer} isAuthenticated={isAuthenticated} />
                    <PublicRoute path="/login" exact component={LoginPage} isAuthenticated={isAuthenticated} />
                    <PrivateRoute path="/profile" exact component={ProfileContainer} isAuthenticated={isAuthenticated} />
                </RouterSwitch>
            </main>
        </div>
    );
}

Navigation.propTypes = {
    isAuthenticated: PropTypes.bool,
};

export default memo(Navigation);
