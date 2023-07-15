import { Box, Typography } from '@mui/material'
import React from 'react'
import Form1 from '../components/mui/form1'

function Job() {
  return (
    <>
      <Box>
        <Box sx={{ width: '100%', height: '70vh', backgroundColor: '#0d0c0d', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Box sx={{ width: '50%', height: '50vh', backgroundImage: 'url(/job-bg1.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', alignItems: "flex-end", justifyContent: 'center' }}>
            <Box sx={{ width: '85%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <Box sx={{ backgroundColor: '' }}>
                <Typography sx={{ color: "white", fontSize: "1.8rem" }}>Front End</Typography>
                <Typography className='study-title' sx={{ fontSize: '2.5rem', fontWeight: '600' }}> Developer</Typography>
              </Box>
              <Box sx={{ backgroundColor: '', width: '90%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Typography sx={{ color: "white", fontSize: '1.1em' }}>JOB DESCRIPTION</Typography>
                <Typography sx={{ color: "white", fontSize: '0.9rem', lineHeight: '1.8rem' }}>We create websites, Mobile Apps and web applications for top clients. We are looking for talented IOS/Android developers to join our team. You will turn interfaces into rich user experiences, working with our team as you model user behavior, create wireframes, and design interface concepts and graphic layouts.</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: '', width: '45%', padding: '1rem' }}>
            <Form1 />
          </Box>
        </Box>
        <Box sx={{width:'100%', backgroundColor: '#0d0c0d',px:'10rem',py:'3rem',display:'flex',flexDirection:'column',gap:'3rem'}}>
          <Box sx={{}}>
          <Typography sx={{color:'white',fontSize:'2rem'}}>What will you work on?</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          <Typography sx={{color:'white'}}>Design, build and maintain high performance, reusable and reliable code.</Typography>
          <Typography sx={{color:'white'}}>Write efficient Kotlin/Java code following MVVM pattern.</Typography>
          <Typography sx={{color:'white'}}>Improve code structure and architecture in service of testability and maintainability .</Typography>
          <Typography sx={{color:'white'}}>Build Android / IOS software components for interfacing with multiple applications.</Typography>
          <Typography sx={{color:'white'}}>Design, build and maintain high performance, reusable and reliable code.</Typography>
          <Typography sx={{color:'white'}}>Formulate clear and efficient technical documents.</Typography>
          <Typography sx={{color:'white'}}>Prior experience in working with Android Services & Notifications and CI/CD optimization</Typography>
          <Typography sx={{color:'white'}}>Working experience with popular third-party libraries for networking, async, and image loading</Typography>
          <Typography sx={{color:'white'}}>Proven knowledge of Reactive programming, design principles and patterns along with material design Apply now</Typography>
          <Typography sx={{color:'white'}}>Working experience with popular third-party libraries for networking, async, and image loading</Typography>
          </Box>
             
        </Box>
      </Box>

    </>
  )
}

export default Job











// ":hover": { border: '1px solid #B300BE' } 