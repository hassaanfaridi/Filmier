import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({

    imageLink: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10% 0',
        width: 'inherit',
    },
    image: {
        width: '90%',
    },
    links: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
    },
    genreImage: {
        filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
    }

}));





