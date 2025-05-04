import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { monuments } from '../../data/monuments';
import './Cards.scss';

export default function Cards() {
    return (
        <div className="cards-wrapper">
            {monuments.map((monument, index) => (
                <Card
                    key={index}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <CardMedia
                        component="img"
                        alt={monument.title}
                        height="200"
                        image={monument.image}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {monument.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Ғасыр: {monument.century}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', marginTop: '10px' }}
                        >
                            {monument.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            component="a"
                            href={monument.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Толығырақ
                        </Button>
                    </CardActions>
                </Card>

            ))}
        </div>
    );
}
