// import { Box, Button,Typography } from '@mui/material'
// import React from 'react'
// import { card1 } from '../utils/data'

// function Blog() {
//   return (
//  <>
// <Box sx={{backgroundColor:'#0d0d0c'}}>
// {/* <Box sx={{width:'100%',height:['40vh','40vh','60vh','40vh'],display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
//    <Typography className='blog-title'  sx={{textAlign:'center',color:'white'}}>OUR  BLOG</Typography>
//    <Typography sx={{color:'white',fontSize:['2rem','3rem'],textAlign:'center',width:['100%',"35%"]}}>End-to-End Solutions for Complex Challenges</Typography>
// </Box> */}
// <Box sx={{ width: '100%', height: 'auto', backgroundColor: '#0d0d0c',px: '10rem' }}>

//                     <Box sx={{ }}>
//                         <Typography sx={{ color: 'white', py: '1rem' }}>Latest posts</Typography>
//                     </Box>
//                     <Box sx={{ width: '100%', display: 'flex',flexDirection:['column','row'], gap: '1rem' }}>
//                         <Box sx={{ width: ['100%','65%'], height: '70vh', border: '1px solid gray' }}>
//                             <Box sx={{ width: '100%', height: '30vh', backgroundImage: 'url(/home-bg3.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}>

//                             </Box>
//                             <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', py: '1rem', px: '1.5rem' }}>
//                                 <Typography className='home-card-title' sx={{ width: 'fit-content' }}>Design</Typography>
//                                 <Typography sx={{ color: 'white', fontSize: '1rem' }}> 2 Mar 2020</Typography>
//                             </Box>
//                             <Box sx={{ width: '100%', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
//                                 <Typography sx={{ fontSize: '2.5rem', color: 'white', width: '80%' }}>End-to-End Solutions for Complex Challenges</Typography>
//                                 <Typography sx={{ color: 'white' }}>At SmartAwe, we trust in digital technology as a platform for businesses to reach both the local and global markets. </Typography>
//                                 <Button sx={{ width: '10rem', background: ' linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)', color: 'white' }}>Learn More<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                          < path d="M5.84375 12.3281H19.8438" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                                          <path d="M12.8438 5.32812L19.8438 12.3281L12.8438 19.3281" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                                    </svg>
//                                 </Button>
//                             </Box>
//                         </Box>
//                         <Box sx={{ width: ['100%','35%'], height: '70vh', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
//                          {card1.map((item) => (
//                             <Box sx={{ width: ['100%','48%'], height: '34vh', border: '1px solid gray' }}>
//                                 <Box sx={{ width: '100%',height:'25vh' }}>
//                                     <img src={item.img} style={{ width: '100%', height: '100%' }} alt='img' />
//                                 </Box>
//                                 <Box>
//                                     <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', py: '0.3rem', px: '0.5rem' }}>
//                                         <Typography className='home-card-title' sx={{ width: 'fit-content', fontSize: '0.7rem' }}>{item.title1}</Typography>
//                                         <Typography sx={{ color: 'white', fontSize: '0.7rem' }}>{item.title2}</Typography>
//                                     </Box>
//                                     <Box sx={{ width: '100%', py: '0.5rem' }}>
//                                         <Typography sx={{ fontSize: '0.8rem', color: 'white', px: '0.5rem', fontWeight: 'bold' }}>{item.para}</Typography>
//                                     </Box>
//                                 </Box>
//                             </Box>
//                              ))}
//                         </Box>
//                     </Box>

//                 </Box>
// </Box>

//  </>
//   )
// }

// export default Blog
