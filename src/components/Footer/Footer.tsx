import React from 'react';
import {
    Box,
    Link,
    Container,
    List,
    ListItem,
    ListItemText,
    Button,
} from '@mui/material';

import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#000',
                color: '#fff',
                py: 4,
                px: 2,
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        flexWrap: 'wrap',
                    }}
                >
                    {/* Логотип слева */}
                    <Box sx={{ mb: { xs: 2, sm: 0 } }}>
                        <Button
                            variant="outlined"
                            sx={{
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: '#fff',
                                border: 'none',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#fff',
                                    color: '#000',
                                },
                            }}
                            className="footer__title"
                            onClick={() => {
                                const element = document.getElementById('Басты бет');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Discover Turkestan
                        </Button>
                    </Box>

                    {/* Контактная информация справа */}
                    <Box component="nav">
                        <List sx={{ padding: 0 }}>
                            <ListItem disableGutters>
                                <ListItemText
                                    primary="Автор: Нурметов Камилжан Шарифжанұлы"
                                    className="footer__text"
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText
                                    primary="6B07304 Геоинформатика мамандығы"
                                    className="footer__text"
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText
                                    primary={
                                        <Link
                                            href="mailto:komiljon_nurmetov03@mail.ru"
                                            color="inherit"
                                            underline="hover"
                                            className="footer__text"
                                        >
                                            Email: komiljon_nurmetov03@mail.ru
                                        </Link>
                                    }
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText
                                    primary={
                                        <Link
                                            href="tel:+77073272003"
                                            color="inherit"
                                            underline="hover"
                                            className="footer__text"
                                        >
                                            Номер: +7 707 327 2003
                                        </Link>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
