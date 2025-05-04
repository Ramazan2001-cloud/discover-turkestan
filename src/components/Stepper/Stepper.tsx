import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './Stepper.scss';

const steps = [
    'Түркістан — Қазақстанның рухани астанасы',
    'Қожа Ахмет Ясауи кесенесі',
    'Тарихи және мәдени құндылықтары',
];

export default function HorizontalLinearStepper() {
    return (
        <Box sx={{ width: '100%', maxWidth: '100%', px: { xs: 1, sm: 2 }, marginBottom: '20px' }}>
            <Stepper alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label} completed={true }>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
