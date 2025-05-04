import ReactPlayer from 'react-player/youtube';
import { Box } from '@mui/material';

const VideoPlayer = () => {
    return (
        <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto' }}>
            <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=qDkjYV4YGhg"
                    controls
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                />
            </Box>
        </Box>
    );
};

export default VideoPlayer;
