const { CardActionArea, CardContent, Typography, CardMedia } = require("@material-ui/core");
import { PropTypes } from 'prop-types';
import { Card } from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core/CardActionArea';
import { CardMedia } from '@material-ui/core/CardMedia';
import { CardContent } from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {

  },
  media: {

  },

});

function Order({ order }) {
  const classes = useStyles();
  console.count("Order");
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          src={order.image}
          title={order.description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {order.amount}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {order.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Order.PropTypes = {
  order: PropTypes.object,
}

export default Order;
