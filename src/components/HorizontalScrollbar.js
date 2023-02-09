import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import BodyParts from './BodyParts';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';
import Hint from './Hint';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} sx={{ visibility: { lg: "visible", xs: "hidden" } }} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} sx={{ visibility: { lg: "visible", xs: "hidden" } }} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, bodyParts }) => {

    return (
        <div>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                {

                    data.map((item) => {
                        return (
                            <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
                                {
                                    !bodyParts
                                        ?
                                        <ExerciseCard exercise={item} />
                                        :
                                        <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                                }
                            </Box>
                        )
                    })
                }
            </ScrollMenu>
            <Hint />
        </div>
    )
}

export default HorizontalScrollbar
// setBodyPart={setBodyPart}
// 