import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import AddListItem from './AddListItems';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
      maxWidth: 500,
  },
  media: {
      height: 140,
  },
});

const itemsData = [{ text: 'line 1' }, { text: 'line 2' }, { text: 'line 3' }];

export default function InteractiveList() {
  const classes = useStyles();

  const [items, setItems] = useState(itemsData);

  const addItemToFirst = () => {
    const newItems = [{ text: 'line 4' }, ...items];
    setItems(newItems);
  }

  return (
    <div className={classes.root}>
      <Fab onClick={addItemToFirst} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Grid item xs={12} md={6}>
        <List dense={true}>
          {items.map(item => (<AddListItem key={item.text} text={item.text} />))}
        </List>
      </Grid>
    </div>
  )
}
