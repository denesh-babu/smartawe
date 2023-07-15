import { Box, Typography } from '@mui/material'
import React from 'react'
import Select from '../components/mui/select'
import { careers } from '../utils/data'

function Careers() {
    return (
        <>
            <Box>
                <Box sx={{ width: '100%', height: '100vh', backgroundColor: "#0d0c0d", backgroundImage: "url(/careers-bg1.png)", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5rem' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <Typography className='study-title' sx={{ fontSize: '2.5rem', fontWeight: '500' }}>CAREERS</Typography>
                        <Typography sx={{ fontSize: '2.5rem', color: 'white' }}>Lead the change! Be the inspiration!</Typography>
                    </Box>
                    <Box sx={{ width: '60%', height: '60vh', backgroundImage: 'url(/careers-img1.png)', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: '60vh', backgroundColor: '#0d0c0d', padding: '10rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <Box sx={{ backgroundColor: '#bbb', display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '2rem', color: 'white', }}>VIEW JOB OPENING</Typography>
                        <Select />
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", gap: '1rem' }}>
                            {careers.map((item) => (
                                <Box sx={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '4px', border: "1px solid #1e1e1e", p: '1rem' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <Box sx={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: '#1e1e1e', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                           {item.icon}

                                        </Box>
                                        <Box >
                                            <Typography sx={{ fontSize: '1.1rem', width: '100%', color: 'white' }}>{item.title}</Typography>
                                            <Typography sx={{ fontSize: '0.7rem', color: '#c2c2c2' }}>{item.subtitle}</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: '#fc00ff', textDecoration: 'underline' }}>{item.btn}</Typography>
                                    </Box>

                                </Box>
                            ))}

                        </Box>
                    </Box>
                </Box>



            </Box>
        </>
    )
}

export default Careers