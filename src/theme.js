import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF2625',
            card:"#2E2E2E"
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#E0C2FF',
            light: '#F5EBFF',
            // dark: will be calculated from palette.secondary.main,
        },
        info:{
            main:"#000000",
            "100" : "2E2E2E",
        },
        text:{
            primary:"#FF2625",
            secondary:"#B2B2B2",
            light:"#FFFFFF",
            card : "#2E2E2E"
        },
    },
});

export default theme;