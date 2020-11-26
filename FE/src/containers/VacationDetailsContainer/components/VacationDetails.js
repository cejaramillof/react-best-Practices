import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';

function VacationDetails({ vacation, dispatchGetVacationDetails }) {
    const { id } = useParams();

    useEffect(() => {
        dispatchGetVacationDetails(id);
    }, [])

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={vacation.image}
                    title={vacation.description}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {vacation.destination}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {vacation.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" size="small" color="primary">
                    Order
            </Button>
                <Button size="small" color="secondary">
                    Learn More
            </Button>
            </CardActions>
        </Card>
    );
}

VacationDetails.defaultProps = {
    vacation: {}
}

VacationDetails.propTypes = {
    vacation: PropTypes.object,
}

export default VacationDetails;