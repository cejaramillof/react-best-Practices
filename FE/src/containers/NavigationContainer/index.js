import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import { logout } from 'containers/AuthContainer/meta/actions';
import { getUser, selectIsAuthenticated } from "containers/AuthContainer/meta/selectors";
import { updateThemeMode } from './../App/meta/actions';

const mapStateToProps = (state) => ({
    routes: [
        {
            key: 'vacations',
            path: '',
            text: 'Vacations'
        },
        {
            key: 'profile',
            path: 'profile',
            text: 'Profile'
        },
        {
            key: 'example',
            path: 'example',
            text: 'Example'
        },
    ],
    user: getUser(state),
    isAuthenticated: selectIsAuthenticated(state)
});

const mapDispatchToProps = ({
    logout,
    updateThemeMode,
});

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

export default NavigationContainer;
