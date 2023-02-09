import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
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
                <Typography color="#FF2625" variant='h3' textTransform="uppercase">
                    {name}
                </Typography>
                <Typography color="#3A1212" variant='h6'>
                    Exercises keeps you strong . &nbsp;
                    <span style={{ color: "#FF2526", textTransform: "capitalize" }}><strong>"{name}"</strong></span> is the one of the best exercises to train your <span style={{ color: "#FF2526", textTransform: "capitalize" }}><strong>"{bodyPart}"</strong></span>.
                </Typography>
                {
                    extraDetails.map((item) => {
                        return <Stack key={item.id} direction="row" gap="24px" alignItems="center">
                            <Button sx={{ backgroundColor: "#FFF2DB", borderRadius: "50%", width: "100px", height: "100px" }}>
                                <img src={item.icon} alt={bodyPart} style={{ width: "50px", height: "50px" }} />
                            </Button>
                            <Typography color="#FF2526" variant="h6" textTransform="capitalize">
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