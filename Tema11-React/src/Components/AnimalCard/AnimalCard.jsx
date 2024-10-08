import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const AnimalCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Esta es la descripción de un(a) {props.name} que tomaba cafe Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, assumenda, eos, maxime tenetur ut illo porro iste nisi praesentium debitis hic blanditiis quo! Veritatis quia itaque at quos, eveniet vitae?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}

export default AnimalCard