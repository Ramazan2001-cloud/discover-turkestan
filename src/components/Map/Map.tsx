import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Button, Box, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import L, { Icon } from 'leaflet';
import './Map.scss';

const defaultIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const activeIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const monuments = [
    { name: 'Қожа Ахмет Ясауи кесенесі', position: [43.2970, 68.2690] },
    { name: 'Рабиға Сұлтан Бегім кесенесі', position: [43.2972, 68.2719] },
    { name: 'Сауран қалашығы', position: [43.5042, 67.7650] },
    { name: 'Жұма мешіті', position: [43.2958, 68.2706] },
    { name: 'Шілдехана (Қылует жер асты мешіті)', position: [43.2965, 68.2678] },
    { name: 'Әзірет Сұлтан қорық-мұражайы', position: [43.2963, 68.2690] },
    { name: 'Ескі Түркістан қалашығы', position: [43.2928, 68.2986] },
];

function MapController({ position }: { position: [number, number] }) {
    const map = useMap();
    map.flyTo(position, 16);
    return null;
}

function Map() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClick = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <Box width="100%" height="100%">
            {/* Кнопки сверху */}
            <Box p={2} display="flex" justifyContent="center">
                <Stack
                    spacing={2}
                    direction={isSmallScreen ? 'column' : 'row'}
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                    width="100%"
                    textAlign="center"
                    gap="20px"
                    sx={{marginBottom: "20px"}}
                >
                    {monuments.map((monument, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <Button
                                key={index}
                                variant={isActive ? 'contained' : 'outlined'}
                                color={isActive ? 'primary' : 'inherit'}
                                onClick={() => handleClick(index)}
                                sx={{
                                    color: isActive ? undefined : '#1976d2', // Синий цвет текста
                                    borderColor: isActive ? undefined : '#1976d2', // Синий бордер
                                    '&:hover': {
                                        borderColor: '#1565c0', // Цвет при ховере
                                        backgroundColor: isActive ? undefined : 'rgba(21, 101, 192, 0.04)',
                                    },
                                }}
                            >
                                {monument.name}
                            </Button>
                        );
                    })}
                </Stack>
            </Box>

            {/* Карта */}
            <Box width="100%" height="600px">
                <MapContainer
                    center={[43.2970, 68.2690]}
                    zoom={14}
                    scrollWheelZoom={false}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    {monuments.map((monument: any, index) => (
                        <Marker
                            key={index}
                            position={monument.position}
                            icon={activeIndex === index ? activeIcon : defaultIcon}
                        >
                            <Popup>{monument.name}</Popup>
                        </Marker>
                    ))}
                    {activeIndex !== null && (
                        <MapController position={monuments[activeIndex].position as [number, number]} />
                    )}
                </MapContainer>
            </Box>
        </Box>
    );
}

export default Map;
