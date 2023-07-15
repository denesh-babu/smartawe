import { Box, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Form2 from '../components/mui/form2'

function Contact() {
  return (

    <>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#0d0d0c' }}>
        <Box sx={{ width: '100%', height: ['17rem', '20rem', '25rem', '30rem', '40rem'], background: 'linear-gradient(to right bottom, #e61ffc, #6490eb)', position: 'relative' }}>

          <Box sx={{ display: 'flex', position: 'absolute', width: ['28%', '25%', '28%', '28%', '28%'], height: ['8rem', '13rem', '20rem', '25rem', '38rem'], right: ['8%', '10%', '10%', '9%', '11%'], bottom: ['-25%', '-37%', '-43%', '-45%', '-50%'] }}>
            <img style={{ width: '100%', height: '100%' }} src='/image-4.png' alt='img' />
          </Box>

          <Box sx={{ display: 'flex', gap: '1rem', alignItems: ['center', 'center', 'flex-start'], flexDirection: 'column', width: ['100%', '100%', '60%', '55%', '45%'], position: 'absolute', left: ['0%', '0', '5%', '9%', '9%'], top: ['0%', '0', '20%', '25%', '35%'], padding: '1rem', backgroundColor: '' }}>

            <Typography sx={{ fontWeight: 'bold', fontSize: ['2rem', '3rem', '2.5rem', '3rem'], textAlign: ['center', 'center', 'left'] }}>
              Contact Us
            </Typography>

            <Typography sx={{ color: 'white', fontSize: ['0.9rem', '1.2rem', '1rem', '1rem', '1.2rem'], wordSpacing: ['0rem', '0', '0', '0', '0.4rem'], lineHeight: ['1.5rem', '2rem', '2rem', '1.8rem', '2rem'], textAlign: ['center', 'center', 'left'], width: ['100%', '90%', '100%', '90%', '100%'] }}>
              Lörem ipsum jödirad infrar dohöd av besk, sur. Naserar fakesk. Hemir krol nynade polysm. Du kan vara drabbad. Bokstav ot, krolingar lamelig. Beheten devis utom dide. Supragt ryggsäcksmodellen bemens antroponetik.Loba hexar ber, smartball.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: '100%', height: ['100rem', '100rem', '90rem', '55rem', '60rem'], position: 'relative' }}>
          <Box sx={{ position: 'absolute', height: ['18rem', '25rem', '20rem', '25rem', '35rem'], bottom: "0%", left: '0%' }}>
            <img style={{ width: '100%', height: '100%' }} src='/Group1.png' alt='img' ></img>
          </Box>
          <Box sx={{ position: 'absolute', top: ['3%', '0%', '3%', "16%"], left: ['0%', '0%', '17%', '9%'], padding: ['3rem', '6rem', '1rem'], backgroundColor: "" }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: ['1.9rem', '3rem', '2.5rem'], color: 'white', textAlign: ['center', 'center', 'left'] }}>
              Contact Us
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', py: '1rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <Typography sx={{ color: '#626262', fontSize: ['0.8rem', '1.1rem', '0.8rem'] }}>
                  Office Address
                </Typography>
                <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                  <LocationOnIcon sx={{ color: '#b200bf' }} />
                  <Typography sx={{ color: 'white', width: ['100%', '90%', '45%', '55%'], fontSize: ['1rem', '1.3rem', '1rem'] }}>
                    Square Space, 37, Govinda St,Ayyavoo Naidu Colony,
                    Aminjikarai, Chennai, Tamil Nadu 600029
                  </Typography>
                </Box>
              </Box>


              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <Typography sx={{ color: '#626262', fontSize: ['0.8rem', '1.1rem', '0.8rem'] }}>
                  Mobile Number
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                    <PhoneIcon sx={{ color: '#b200bf' }} />
                    <Box>
                      <Typography sx={{ color: 'white', fontSize: ['1rem', '1.3rem', '1rem'] }}>
                        +91 9790890441
                      </Typography>
                      <Typography sx={{ color: 'white', fontSize: ['1rem', '1.3rem', '1rem'] }}>
                        +91 9710051619
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <Typography sx={{ color: '#626262', fontSize: ['0.8rem', '1.1rem', '0.8rem'] }}>
                  Email Id
                </Typography>
                <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                  <MailIcon sx={{ color: '#b200bf' }} />
                  <Typography sx={{ color: 'white', width: '15%', fontSize: ['1rem', '1.3rem', '1rem'] }}>
                    contact@smartawe.com
                  </Typography>
                </Box>
              </Box>
            </Box>

          </Box>

          <Box sx={{ width: ['100%', '100%', '75%', '52%', '40%'], height: ['auto', '30rem'], position: 'absolute', top: ['30%', '35%', '35%', '30%', "35%"], right: ['0', '0', '7%', '0%', '10%'], padding: ['0rem', '1rem', '0rem'] }}>
            <Box>
              <Typography sx={{ fontSize: ['1.9rem', '3rem', '2.7rem'], fontWeight: 'bold', color: 'white', textAlign: ['center', 'center', 'left'] }}>Get in Touch</Typography>
            </Box>
            <Box>
            <Form2 />
            </Box>
          
          </Box>
        </Box>
      </Box>

      {/* <Box sx={{ width: '100%', height: '75vh', position: 'relative', backgroundColor: '#0d0d0c' }}>
        <Box sx={{ position: 'absolute', height: ['18rem', '35rem'], bottom: "0%", left: '0%' }}>
          <img style={{ width: '100%', height: '100%' }} src='/Group.png' alt='img' ></img>
        </Box>
        <Box sx={{ position: 'absolute', top: ['0%', "-15%"], left: ['0%', '9%'], padding: '1rem', }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '2.2rem', color: 'white' }}>
            Contact Us
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', py: '1rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Typography sx={{ color: '#626262', fontSize: '0.8rem' }}>
                Office Address
              </Typography>
              <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                <LocationOnIcon sx={{ color: '#b200bf' }} />
                <Typography sx={{ color: 'white', width: '55%' }}>
                  Square Space, 37, Govinda St,Ayyavoo Naidu Colony,
                  Aminjikarai, Chennai, Tamil Nadu 600029
                </Typography>
              </Box>
            </Box>


            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Typography sx={{ color: '#626262', fontSize: '0.8rem' }}>
                Mobile Number
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                  <PhoneIcon sx={{ color: '#b200bf' }} />
                  <Box>
                    <Typography sx={{ color: 'white', }}>
                      +91 9790890441
                    </Typography>
                    <Typography sx={{ color: 'white', }}>
                      +91 9710051619
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Typography sx={{ color: '#626262', fontSize: '0.8rem' }}>
                Email Id
              </Typography>
              <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                <MailIcon sx={{ color: '#b200bf' }} />
                <Typography sx={{ color: 'white', width: '15%' }}>
                  contact@smartawe.com
                </Typography>
              </Box>
            </Box>
          </Box>

        </Box>

        <Box sx={{ width: '45%', height: '60vh', position: 'absolute', top: "10%", right: '9%', }}>
          <Box>
            <Typography sx={{ fontSize: '2.7rem', fontWeight: 'bold', color: 'white' }}>Get in Touch</Typography>
          </Box>
          <Form2 />
        </Box>

      </Box> */}








    </>
  )
}

export default Contact