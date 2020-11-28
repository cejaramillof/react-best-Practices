import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BasicInfo from "./BasicInfo";
import OrdersHistory from "./OrdersHistory";
import { Chip, Grid } from '@material-ui/core';

function Profile({ profile, getProfile, updateUserStatus }) {

    useEffect(() => {
        if (getProfile) {
            getProfile();
        }
    }, []);

    console.count("Profile");

    return (
        <Grid container direction="column" alignItems="center">
            <Chip onClick={updateUserStatus} label={profile.status} style={{
                backgroundColor: profile.status === 'active' ? 'green' : '',
                color: profile.status === 'active' ? 'white' : ''
            }} />
            <BasicInfo profile={profile} />
            <OrdersHistory profile={profile} />
        </Grid>
    );
}

Profile.propTypes = {
    user: PropTypes.object,
};

export default Profile;
