import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';
import BodyPartImg from '../assets/icons/body-part.png';
import TargetImg from '../assets/icons/target.png';
import EquipmentImg from '../assets/icons/equipment.png';

const Details = ({ exerciseDetails }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;

    const extraDetails = [
        {
            id: 0,
            icon: BodyPartImg,
            name: bodyPart
        },
        {
            id: 1,
            icon: TargetImg,
            name: target
        },
        {
            id: 2,
            icon: EquipmentImg,
            name: equipment
        }
    ]
    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
                <Typography color="text.light" variant='h5' textTransform="uppercase">
                    {name}
                </Typography>
                <Typography color="text.secondary" variant='h6'>
                    Exercises keeps you strong&nbsp;
                    <Box color="text.light" component="span">{name}</Box>
                    &nbsp;is the one of the best exercises to train your&nbsp;
                    <Box color="text.light" component="span">{bodyPart}.</Box>
                </Typography>
                {
                    extraDetails.map((item) => {
                        return <Stack key={item.id} direction="row" gap="24px" alignItems="center">
                            <Button sx={{ backgroundColor: "transparent", borderRadius: "50%", width: "100px", height: "100px" }}>
                                <img src={item.icon} alt={bodyPart} style={{ width: "50px", height: "50px" }} />
                            </Button>
                            <Typography color="text.light" variant="h6" textTransform="capitalize">
                                {item.name}
                            </Typography>
                        </Stack>
                    })
                }
            </Stack>
        </Stack>
    )
}

export default Details