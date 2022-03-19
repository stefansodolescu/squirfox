import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Divider} from '@mui/material';



const useStyle = makeStyles(() =>({
    footer: {
        textAlign: 'center',
        color:'#D3D3D3',
        backgroundColor:'black',
        padding: '10px',
        bottom: '0'
    },

}));



export default function Layout({children}) {
    const styles = useStyle();
  return (
        <CssBaseline>
            <Box component='body' maxWidth='xl' className={styles.layout}>
                <Navbar/>
                <div>
                    {children}
                </div>
                <Divider sx={{backgroundColor:'black'}}/>
                <footer className={styles.footer}>
                    <Typography variant='h5' component='p'>© 2022 Squirfox - All Rights Reserved</Typography>
                </footer>
            </Box>
        </CssBaseline>
  )
}