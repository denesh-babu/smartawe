import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';



function About() {
  return (
    <>
      <Box sx={{ backgroundColor: '#0d0c0d', }}>
        <Box sx={{ width: '100%', backgroundImage: ['url(/about-bg1c1.png)','url(/about-bg1c1.png)','url(/about-bg1.png)'], height: ['42rem', '52rem', '34rem', '40rem', '54rem'], position: 'relative', backgroundPosition: 'center', backgroundSize: ['cover'], backgroundRepeat: 'no-repeat', backgroundColor: '#0d0c0d', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography sx={{ fontSize: ['2rem', '2.5rem', '3rem', '4rem', "5rem"], color: 'white', fontWeight: '600' }}>About Us</Typography>
        </Box>
        <Box sx={{ width: '100%', display: "flex", gap: ['0.5rem', '1rem'], paddingTop: ['3rem', '5rem', '5rem', '8rem', '10rem'], px: ['1rem', '4rem', '5rem', '8rem', '10rem'], backgroundColor: '#0d0c0d'  }}>
          <Box sx={{ width: '5px', height: ['2.5rem', '3.5rem', '4rem', '5rem', '5.5rem'], background: ' linear-gradient(180.06deg, #7100E2 10%, #B300BE 100%)', borderRadius: '8px' }}>

          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{ fontSize: ['0.8rem', '1rem', '1.2rem', '1.4rem', '1.5rem'], color: "#5c5d5c", fontWeight: '600' }}>About</Typography>
            <Typography className='home-title' sx={{ fontSize: ['1rem', '1.5rem', '1.5rem', '2rem', '2.5rem'], color: 'white', fontWeight: '600' }}>SMART AWE</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: ['32rem', '32rem', '25rem', '45rem', '53rem'], backgroundColor: '#0d0c0d', backgroundImage: 'url(/hero-bg-line.png)', display: 'flex', flexDirection: ['column-reverse', 'column-reverse', 'row'], alignItems: 'center', padding: ['1rem', '3rem', '5rem', '8rem', '10rem'], backgroundPosition: "center", marginTop: ['2rem', '0rem', '2rem'], backgroundSize: 'cover' }}>

          <Box sx={{ width: ['100%', '100%', '100%', '80%', '50%'], height: ['15rem', '20rem', '15rem', '18rem', '28rem'], display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: ['0rem', '0rem', '0rem', '0rem', '15rem'] }}>


            <Typography sx={{ width: ['100%', '100%', '100%', '90%', '65%'], fontSize: '1rem', fontWeight: 100, color: '#fff', lineHeight: ['1.5rem', '2rem', '2rem', '2.3rem'] }}>At SmartAwe, we trust in digital technology as a platform for businesses to reach both the local and global markets. We provide software development and automation solutions for small businesses, innovative startups and big brands. With a smart strategy, design, development and beyond, we love to work together with our clients as a long-term digital partner.We love the growth of our clients as we love the web.</Typography>

          </Box>
          <Box sx={{ width: ['100%', '100%', '40%'], height: ['17rem', '19rem', '30rem', '40rem', '42rem'], display: 'flex', justifyContent: 'center', marginTop: ['-0rem', '-0rem'], alignItems: ['flex-start', 'center'], backgroundColor: '', }}>
            <img src='/about-img1.png' style={{ width: 'auto', height: '100%' }} alt='img' />
          </Box>

        </Box>

        <Box sx={{ width: '100%', height: '', backgroundColor: '#0d0c0d' }}>
          <Box sx={{ width: '100%', height: '5rem' }}>
            <Typography sx={{ color: 'white', fontSize: '2rem', textAlign: 'center', fontWeight: 'bold' }}>Our  Team</Typography>
          </Box>
          {/* display none */}
          <Box sx={{ width: '100%', display: ['flex', 'flex', 'none'], flexDirection: 'column', gap: ['3rem', '8rem'] }}>
            <Box sx={{ width: '100%', position: 'relative', display: ['flex', 'flex', 'none'], flexDirection: 'column', height: ['15rem', '19rem', '0'] }}>
              <Box sx={{ width: ['100%', '100%', '50%'], height: ['30rem', '50rem', '80vh'], position: 'absolute', top: ['-50%', '-70%', '-45%'], left: ['0', '0', '5%'], }}>
                <img src='/about-img9.png' style={{ width: '100%', height: '100%', opacity: '0.8' }} alt='img' />
              </Box>
              <Box sx={{ width: ['80%', '80%', '40%'], height: ['13rem', '19rem', '25vh'], backgroundColor: '', backgroundImage: 'url(/about-img10.png)', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: 'absolute', top: ['-0%'], left: ['10%'] }}>

              </Box>
              <Box sx={{ width: '100%', padding: '1rem', display: ['flex', 'flex', 'none'], flexDirection: 'column', position: 'absolute', top: ['83%', '100%', '80%'], left: '0' }}>
                <Typography sx={{ color: 'white', fontSize: ['1rem', '1.3rem'], textAlign: 'center', fontWeight: 'bold' }}>Raj Kumar</Typography>
                <Typography sx={{ color: 'gray', fontSize: ['0.9rem', '1.2rem'], textAlign: 'center', fontWeight: 'bold' }}> Chief Executive Officer</Typography>
              </Box>
            </Box>
            <Box sx={{ width: '100%', position: 'relative', display: ['flex', 'flex', 'none'], flexDirection: 'column', height: ['15rem', '19rem', '0'] }}>
              <Box sx={{ width: ['100%', '100%', '50%'], height: ['30rem', '50rem', '80vh'], position: 'absolute', top: ['-50%', '-70%', '-45%'], left: ['0', '0', '5%'], }}>
                <img src='/about-img9.png' style={{ width: '100%', height: '100%', opacity: '0.8' }} alt='img' />
              </Box>
              <Box sx={{ width: ['80%', '80%', '40%'], height: ['13rem', '19rem', '25vh'], backgroundColor: '', backgroundImage: 'url(/about-img11.png)', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: 'absolute', top: ['-0%'], left: ['10%'] }}>

              </Box>
              <Box sx={{ width: '100%', padding: '1rem', display: ['flex', 'flex', 'none'], flexDirection: 'column', position: 'absolute', top: ['83%', '100%', '80%'], left: '0' }}>
                <Typography sx={{ color: 'white', fontSize: ['1rem', '1.3rem'], textAlign: 'center', fontWeight: 'bold' }}>Selvin</Typography>
                <Typography sx={{ color: 'gray', fontSize: ['0.9rem', '1.2rem'], textAlign: 'center', fontWeight: 'bold' }}>Chief Technology Officer</Typography>
              </Box>
            </Box>
            <Box sx={{ width: '100%', position: 'relative', display: ['flex', 'flex', 'none'], flexDirection: 'column', height: ['15rem', '19rem', '0'] }}>
              <Box sx={{ width: ['100%', '100%', '50%'], height: ['30rem', '50rem', '80vh'], position: 'absolute', top: ['-50%', '-70%', '-45%'], left: ['0', '0', '5%'], }}>
                <img src='/about-img9.png' style={{ width: '100%', height: '100%', opacity: '0.8' }} alt='img' />
              </Box>
              <Box sx={{ width: ['80%', '80%', '40%'], height: ['13rem', '19rem', '25vh'], backgroundColor: '', backgroundImage: 'url(/about-img12.png)', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: 'absolute', top: ['-0%'], left: ['10%'] }}>

              </Box>
              <Box sx={{ width: '100%', padding: '1rem', display: ['flex', 'flex', 'none'], flexDirection: 'column', position: 'absolute', top: ['83%', '100%', '80%'], left: '0' }}>
                <Typography sx={{ color: 'white', fontSize: ['1rem', '1.3rem'], textAlign: 'center', fontWeight: 'bold' }}>Pradeep</Typography>
                <Typography sx={{ color: 'gray', fontSize: ['0.9rem', '1.2rem'], textAlign: 'center', fontWeight: 'bold' }}>Chief Operating Officer</Typography>
              </Box>
            </Box>
          </Box>
          {/* display none */}

          <Box sx={{ width: '100%', display: ['none', 'none', 'flex'], flexDirection: ['column', 'row'], justifyContent: 'center', alignItems: 'center', position: 'relative', gap: ['0', '0', '18rem', '20rem'] }}>



            <Box sx={{ width: '35%', height: '16rem', display: ['none', 'flex'], alignItems: 'center', justifyContent: 'space-between', px: ['3rem', '3rem', '1rem', '1rem', '3rem'], backgroundImage: 'url(/about-img7.png)', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
              <Box sx={{ backgroundColor: "", px: ['0', '0', '0rem', '0rem', '4rem'], display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <Typography sx={{ color: 'white', fontSize: ['0', '0', '1.5rem', '1.8rem'], fontWeight: 'bold' }}>Selvin</Typography>
                <Typography sx={{ color: 'white', fontSize: ['0', '0', '1rem', '1rem'], }}>Chief Technology Officer</Typography>
              </Box>
              <Box sx={{ width: ['80%', '0', '40%', '40%'], height: ['0', '0', '11rem', '14rem'], backgroundColor: '', backgroundImage: 'url(/about-img11.png)', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
              </Box>
            </Box>

            <Box sx={{ width: ['100%', '50%'], height: ['50rem', '45rem'], backgroundImage: 'url(/about-img9.png)', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: 'absolute', top: ['0%', '-85%'], left: ['0', '25%'], backgroundColor: '' }}>
            </Box>
            <Box sx={{ width: ['0', '0', '19%', '17%'], height: ['0', '0', '16rem', '17rem'], backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(/about-img10.png)', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '0%', left: ['0', '0', '41%', '41.5%'] }}>
            </Box>

            <Box sx={{ width: ['80%', '35%'], height: '16rem', display: ['none', 'flex'], alignItems: 'center', justifyContent: 'space-between', px: ['0', '0', '1rem', '1rem', '3rem'], backgroundImage: 'url(/about-img8.png)', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
              <Box sx={{ width: ['40%', '40%', '40%', '40%'], height: ['15vh', '15vh', '11rem', '14rem'], backgroundColor: '', backgroundImage: 'url(/about-img12.png)', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
              </Box>
              <Box sx={{ px: ['0rem', '0', '0', '0', '4rem'], display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <Typography sx={{ color: 'white', fontSize: '1.8rem', fontWeight: 'bold' }}>Pradeep</Typography>
                <Typography sx={{ color: 'white', fontSize: '1rem' }}>Chief Operating Officer</Typography>
              </Box>
            </Box>


          </Box>
          <Box sx={{ width: '100%', padding: '2rem', display: ['none', 'none', 'flex'], flexDirection: 'column' }}>
            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>Raj Kumar</Typography>
            <Typography sx={{ color: 'white', fontSize: '1.3rem', textAlign: 'center', fontWeight: 'bold' }}>Chief Executive Officer</Typography>
          </Box>
        </Box>










        <Box sx={{ width: '100%', display: "flex", gap: ['0.5rem', '1rem'], py: ['2rem', '8rem', '8rem', '8rem'], px: ['1rem', '4rem', '4rem', '10rem'], backgroundColor: "#0d0c0d" }}>
          <Box sx={{ width: '5px', height: ['1.5rem', '3rem'], background: ' linear-gradient(180.06deg, #7100E2 10%, #B300BE 100%)', borderRadius: '8px' }}>

          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: ['1rem', '2rem'], color: "#FFF", fontWeight: '600' }}>How we do</Typography>
          </Box>
        </Box>

        <Box sx={{ width: '100%', height: ['52rem', '65rem', '0'], backgroundColor: '#0d0c0d', position: 'relative', display: ['flex', 'flex', 'none'] }}>

          <Box sx={{ width: ['30%'], display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: ['0rem', '0.1rem'], position: 'absolute', top: '5%', left: ['2%', '7%'] }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
              <Box sx={{ width: '1.3rem', height: '2px', backgroundColor: "#F407FE" }}></Box>
              <Typography sx={{ color: "#F407FE", fontSize: ['0.5rem', '0.8rem'], fontWeight: 'bold' }}>Step 1</Typography>
            </Box>
            <Typography sx={{ color: "white", fontSize: ["1.1rem", '1.3rem'] }}>Process</Typography>
            <Typography sx={{ color: "white", fontSize: ['0.5rem', '0.8rem'], width: '90%', textAlign: 'right' }}>Open a 24x7 global online store front to sell your quality services or products</Typography>
          </Box>

          <Box sx={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0rem', position: 'absolute', top: '25%', right: ['2%', '7%'] }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
              <Box sx={{ width: '1.3rem', height: '2px', backgroundColor: "#af42f4" }}></Box>
              <Typography sx={{ color: "#af42f4", fontSize: ['0.5rem', '0.8rem'], fontWeight: 'bold' }}>Step 2</Typography>
            </Box>
            <Typography sx={{ color: "white", fontSize: ["1.1rem", '1.3rem'] }}>Process</Typography>
            <Typography sx={{ color: "white", fontSize: ['0.5rem', '0.8rem'], width: '90%', textAlign: 'left' }}>Open a 24x7 global online store front to sell your quality services or products</Typography>
          </Box>

          <Box sx={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0rem', position: 'absolute', top: '45%', left: ['2%', '7%'] }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
              <Box sx={{ width: '1.3rem', height: '2px', backgroundColor: "#8667EF" }}></Box>
              <Typography sx={{ color: "#8667EF", fontSize: ['0.5rem', '0.8rem'], fontWeight: 'bold' }}>Step 3</Typography>
            </Box>
            <Typography sx={{ color: "white", fontSize: ["1.1rem", '1.3rem'] }}>Process</Typography>
            <Typography sx={{ color: "white", fontSize: ['0.5rem', '0.8rem'], width: '90%', textAlign: 'right' }}>Open a 24x7 global online store front to sell your quality services or products</Typography>
          </Box>

          <Box sx={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0rem', position: 'absolute', top: '64%', right: ['2%', '7%'] }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
              <Box sx={{ width: '1.3rem', height: '2px', backgroundColor: "#598DE9" }}></Box>
              <Typography sx={{ color: "#598DE9", fontSize: ['0.5rem', '0.8rem'], fontWeight: 'bold' }}>Step 4</Typography>
            </Box>
            <Typography sx={{ color: "white", fontSize: ["1.1rem", '1.3rem'] }}>Process</Typography>
            <Typography sx={{ color: "white", fontSize: ['0.5rem', '0.8rem'], width: '90%', textAlign: 'left' }}>Open a 24x7 global online store front to sell your quality services or products</Typography>
          </Box>
          <Box sx={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0rem', position: 'absolute', top: '84%', left: ['2%', '7%'] }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
              <Box sx={{ width: '1.3rem', height: '2px', backgroundColor: "#00DBDE" }}></Box>
              <Typography sx={{ color: "#00DBDE", fontSize: ['0.5rem', '0.8rem'], fontWeight: 'bold' }}>Step 5</Typography>
            </Box>
            <Typography sx={{ color: "white", fontSize: ["1.1rem", '1.3rem'] }}>Process</Typography>
            <Typography sx={{ color: "white", fontSize: ['0.5rem', '0.8rem'], width: '90%', textAlign: 'right' }}>Open a 24x7 global online store front to sell your quality services or products</Typography>
          </Box>


          <Box sx={{ width: '50%', height: ['52rem', '65rem', '0'], backgroundImage: 'url(/about-img13.png)', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: 'absolute', top: '0%', left: '25%' }}>

          </Box>



        </Box>







        <Box sx={{ width: '100%', padding: ['0', '0', '5rem', '10rem'], backgroundColor: '#0d0c0d', position: 'relative', display: ['none', 'none', 'flex'], flexDirection: 'column' }}>
          <Box sx={{ backgroundColor: '', width: '18%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: ['0', '0', '0.3rem', '0.9rem'], position: 'absolute', top: ['0', '0', '-20%', '0', '0'], left: ['0', '0', '25%', '27%', '25%'] }}>
            <Typography sx={{ color: "white", fontSize: '0.8rem', width: '80%', textAlign: 'center' }}>Open a 24x7 global online store front to sell your quality services or products</Typography>
            <Typography sx={{ color: "white", fontSize: "1.5rem" }}>Process</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
              <Typography sx={{ color: "#af42f4", fontSize: '0.7rem', fontWeight: 'bold' }}>Step 2</Typography>
              <Box sx={{ width: '1.5rem', height: '2px', backgroundColor: '#af42f4' }}></Box>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: '', width: '18%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: ['0', '0', '0.3rem', '0.9rem'], position: 'absolute', top: ['0', '0', '-20%', '0', '0'], right: ['0', '0', '24.5%', '26.5%', '25%'] }}>
            <Typography sx={{ color: "white", fontSize: '0.8rem', width: '80%', textAlign: 'center' }}>Open a 24x7 global online store front to sell your quality services or products</Typography>
            <Typography sx={{ color: "white", fontSize: "1.5rem" }}>Process</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
              <Typography sx={{ color: "#598DE9", fontSize: '0.7rem', fontWeight: 'bold' }}>Step 4</Typography>
              <Box sx={{ width: '1.5rem', height: '2px', backgroundColor: '#598DE9' }}></Box>
            </Box>
          </Box>

          <Box sx={{ backgroundColor: '', width: '18%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: ['0', '0', '0.3rem', '0.9rem'], position: 'absolute', top: ['0', '0', '80%', '73%', '80%'], left: ['0', '0', '8.5%', '12%', '8.5%'] }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
              <Box sx={{ width: '1.5rem', height: '2px', backgroundColor: '#F407FE' }}></Box>
              <Typography sx={{ color: "#F407FE", fontSize: '0.7rem', fontWeight: 'bold' }}>Step 1</Typography>
            </Box>
            <Typography sx={{ color: "white", fontSize: "1.5rem" }}>Process</Typography>
            <Typography sx={{ color: "white", fontSize: '0.8rem', width: '80%', textAlign: 'center' }}>Open a 24x7 global online store front to sell your quality services or products</Typography>
          </Box>
          <Box sx={{ backgroundColor: '', width: '18%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: ['0', '0', '0.3rem', '0.9rem'], position: 'absolute', top: ['0', '0', '80%', '73%', '80%'], left: ['0', '0', '41.5%', '41.5', '41.5%'] }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
              <Box sx={{ width: '1.5rem', height: '2px', backgroundColor: '#8667EF' }}></Box>
              <Typography sx={{ color: "#8667EF", fontSize: '0.7rem', fontWeight: 'bold' }}>Step 3</Typography>
            </Box>
            <Typography sx={{ color: "white", fontSize: "1.5rem" }}>Process</Typography>
            <Typography sx={{ color: "white", fontSize: '0.8rem', width: '80%', textAlign: 'center' }}>Open a 24x7 global online store front to sell your quality services or products</Typography>
          </Box>
          <Box sx={{ backgroundColor: '', width: '18%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: ['0', '0', '0.3rem', '0.9rem'], position: 'absolute', top: ['0', '0', '80%', '73%', '80%'], right: ['0', '0', '8%', '12%', '8.5%'] }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
              <Box sx={{ width: '1.5rem', height: '2px', backgroundColor: '#00DBDE' }}></Box>
              <Typography sx={{ color: "#00DBDE", fontSize: '0.7rem', fontWeight: 'bold' }}>Step 5</Typography>
            </Box>
            <Typography sx={{ color: "white", fontSize: "1.5rem" }}>Process</Typography>
            <Typography sx={{ color: "white", fontSize: '0.8rem', width: '80%', textAlign: 'center' }}>Open a 24x7 global online store front to sell your quality services or products</Typography>
          </Box>
          <Box >
            <img src='/about-img2.png' style={{ width: '100%', height: '100%' }} alt='img' />
          </Box>

        </Box>
        <Box sx={{ width: '100%', display: "flex", gap: ['0.5rem', '1rem'], py: ['2rem', '2rem', '8rem', '8rem'], px: ['1rem', '4rem', '5rem', '10rem'], justifyContent: 'flex-end', backgroundColor: "#0d0c0d" }}>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: ['1rem', '1.5rem', '1.5rem', '2rem'], color: "#FFF", fontWeight: '600' }}>Partners</Typography>
          </Box>
          <Box sx={{ width: '5px', height: ['1.5rem', '2rem', '2.5rem', '3rem', '3rem'], background: ' linear-gradient(180.06deg, #7100E2 10%, #B300BE 100%)', borderRadius: '8px' }}>
          </Box>

        </Box>

        <Box sx={{ width: '100%', display: 'flex', flexDirection: "column", gap: '5rem', backgroundColor: "#0d0c0d" }}>
          <Box sx={{ width: '100%', height: ['25vh', '20vh', '17rem'], backgroundColor: '#1e1f1f', display: 'flex', flexDirection: ['row'], flexWrap: ['wrap', 'wrap', 'nowrap'], justifyContent: 'center', alignItems: 'center', gap: ['1rem', '2rem', '5rem'] }}>
            <Box sx={{ width: ['35%', '20%', '17%'], height: ['5rem', '9rem'], backgroundImage: 'url(/about-img3.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>

            </Box>
            <Box sx={{ width: ['35%', '20%', '17%'], height: ['5rem', '9rem'], backgroundImage: 'url(/about-img4.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>

            </Box>
            <Box sx={{ width: ['35%', '20%', '17%'], height: ['5rem', '9rem'], backgroundImage: 'url(/about-img5.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>

            </Box>
            <Box sx={{ width: ['35%', '20%', '17%'], height: ['5rem', '9rem'], backgroundImage: 'url(/about-img6.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>

            </Box>

          </Box>

          <Box sx={{ width: '100%', height: ['15rem', '16rem', '22rem', '27rem', '27rem'], backgroundColor: '#0d0c0d' }}>
            <Box sx={{ width: '100%', backgroundImage: 'url(/home-bg4.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: ['13rem', '15rem', '20rem', '25rem', '25rem'], display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: "center", gap: ['1.2rem', '1.5rem', '1.5rem', '1.5rem', '3rem'], backgroundColor: 'blue' }}>
              <Typography sx={{ fontSize: ['1.3rem', '1.6rem', '1.8rem', '2.5rem'], fontWeight: '600', width: ['90%', '70%', '50%', '60%', '40%'], textAlign: 'center' }}>Speak to an Expert. Find out what Smartawe can do for you.</Typography>
              <Typography sx={{ fontSize: ['0.8rem', '1rem', '1rem'], color: 'white', textAlign: 'center', width: ['90%', '90%', '100%'] }}>Contact us now. We’ll answer your questions and provide a free consultation.</Typography>
              <Button sx={{ width: ['7rem', '6rem', '8rem'], border: '1px solid white', background: ' linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)', borderRadius: '24px', color: 'white', fontSize: '0.8rem', display: 'flex', gap: '0.5rem', textTransform: 'none' }}><ForumOutlinedIcon sx={{ color: 'white', width: ['0.8rem', '1rem'], height: ['0.8rem', '1rem'] }} />lets Talk</Button>
            </Box>
          </Box>


        </Box>

      </Box>
    </>
  )
}

export default About