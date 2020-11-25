import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import { logout } from './../../components/Lectures/AuthProvider/meta/actions';


const mapStateToProps = state => ({
    routes: [{ key: 'home', path: 'home', text: 'Home' }, { key: 'vacations', path: 'vacations', text: 'Vacations' }]
});

const mapDispatchToProps = {
    logout,
};

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

export default NavigationContainer;
