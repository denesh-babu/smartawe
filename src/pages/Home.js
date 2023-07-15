import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { Card, card1 } from '../utils/data';


function Home() {
    return (
        <>
            <Box>
                <Box sx={{ width: '100%', backgroundImage: ['none','none','url(/hero-bg-line.png)'], height: ['45rem','55rem','35rem','55rem'], position: 'relative', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundColor: '#0d0c0d', display: 'flex',flexDirection:['column','column','row'], alignItems: 'center'}}>
                    <Box sx={{ width: '15%', backgroundImage: 'url(/hero-top-img.png)', display:['none','none','flex'],height: ['0','0','12rem','18rem','17rem'], backgroundPosition: 'left', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: 'absolute', top: '-8%', left: '0' }}>

                    </Box>
                    <Box sx={{ width: ['100%','100%','50%','50%','50%'], height: ['20rem','25rem','21rem','25rem','30rem'], display: 'flex', flexDirection: 'column', alignItems: 'center', gap:[ '1rem','1rem','2rem','2rem','3rem'], backgroundColor:'',position:['absolute','absolute','absolute','absolute','absolute'],top:['39%','63%','25%','25%','25%'],left:'0%'  }}>
                        <Typography className='hero-title' sx={{ fontSize: ['1.8rem','2rem','2rem','2.5rem','3rem'], textAlign: 'center', width: ['80%','55%','70%','70%','60%'], fontFamily: 'DM Sans', fontWeight: 700, fontStyle: 'normal' }}>We Develop, Research, Innovate and build cool stuffs on the Web</Typography>
                        <Typography sx={{ width: ['95%','75%','90%','90%','75%'], textAlign: 'center', fontSize: ['0.9rem','1rem','0.8rem','0.9rem','0.9rem'], color: '#fff', lineHeight: ['1.5rem','1.8rem','1.5rem','1.8rem','2rem'] }}>At SmartAwe, we trust in digital technology as a platform for businesses to reach both the local and global markets. We provide software development and automation solutions for small businesses,innovative startups and big brands. </Typography>
                        <Button sx={{ width: ['7rem','7rem','5rem','8rem','10rem'], background: ' linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)', borderRadius: '24px', color: 'white', fontSize: ['0.8rem','0.8rem','0.5rem','0.8rem','0.8rem'], display: 'flex', gap: '0.5rem', textTransform: 'none' }}><ForumOutlinedIcon sx={{ color: 'white', width: ['0.8rem','1rem'], height: ['0.8rem','1rem'] }} />lets Talk</Button>
                    </Box>
                    <Box sx={{ width: ['100%','90%','45%'], height: ['20rem','33rem','28rem','50rem'], display: 'flex', justifyContent: 'center',backgroundImage:'url(/hero-bg.png)', backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center', alignItems: 'center',backgroundColor:'',position:['absolute','absolute','absolute'],top:['-7%','-3','-3%'],right:['0','0','5%'] }}>
                        
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['43rem','60rem','38rem','45rem','55rem'], backgroundColor: '#0d0c0d', backgroundImage: ['none','none','url(/hero-bg-line.png)'],backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover', display: 'flex', flexDirection:['column','column','row'],alignItems: 'center',position:'relative' }}>
                    <Box sx={{ width: ['100%','70%','60%'], height: ['20rem','40rem','38rem','45rem','55rem'], display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundImage:'url(/home-2nd-img.png)',backgroundSize:'contain',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundColor:'',position:'absolute',top:['0','0','0'],left:['0%','15%','0']}}>
                     
                    </Box>
                    <Box sx={{ width: ['95%','90%','40%'], height: ['23rem','20rem','20rem','25rem'], display: 'flex', flexDirection: 'column', gap: ['1rem','1.5rem','0.9rem','1.5rem','2rem'],position:'absolute',top:['46%','55%','25%'],right:['0%','0%','10%']}}>

                        <Typography className='home-title' sx={{ fontSize: ['1rem','1.3rem','1rem','1.1rem','1.3rem'], width: '100%', fontWeight: '500' }}>CONNECTING THE DOTS</Typography>
                        <Typography sx={{ fontSize:[ '1.8rem','2.1rem','1.5rem','2.2rem','3rem'], width: ['90%','70%','70%','80%','70%'], fontWeight: 500, color: 'white' }}>End-to-End Solutions for Complex Challenges</Typography>
                        <Typography sx={{ width: ['90%','85%','85%','85%','70%'], fontSize: ['1.1rem','1.5rem','1rem','1rem','1rem'], fontWeight: 100, color: '#fff', lineHeight:[ '1.8rem','2.2rem','1.5rem','1.8rem','2rem'] }}>We combine strategy, migration, managed services,and modernization capabilities to deliver holistic solutions for complex challenges.</Typography>
                        <Button sx={{ width: ['7rem','7rem','7rem','8rem','10rem'], background: ' linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)', borderRadius: '24px', color: 'white', fontSize: ['0.8rem'], display: 'flex', gap: '0.5rem', textTransform: 'none' }}><ForumOutlinedIcon sx={{ color: 'white', width: ['0.8rem','1.1rem','1rem'], height: ['0.8rem','1.1rem','1rem'] }} />lets Talk</Button>
                    </Box>

                </Box>
                <Box sx={{ width: '100%', height: 'auto', backgroundColor: '#0d0c0d', padding: ['1rem','1rem','2rem','5rem','10rem']}}>
                    <Box sx={{ width: '100%', display: "flex", gap: ['0.7rem','0.8rem','1rem'] }}>
                        <Box sx={{ width:[ '8px','5px'], height:[ '5.5rem','4rem','4.5rem','6rem','6rem'], background: ' linear-gradient(180.06deg, #7100E2 10%, #B300BE 100%)', borderRadius: '8px' }}>

                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap:[ '0.5rem','0.3rem','0.1rem','1rem'] }}>
                            <Typography sx={{ fontSize: ['1.3rem','1.5rem','1.8rem','2rem'], color: "white" }}>Services We Provide</Typography>
                            <Typography sx={{ fontSize: ['1rem','1rem','0.9rem','1rem'], color: 'white' }}>Get the latest news, announcements, stories, and insights from our team</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", height: 'auto', border: ['none','none','1px solid'], borderColor: ['none','none','#ff99ff.100'], marginTop: ['1rem','1rem','3rem'], boxShadow: ['none','none','1px 1px 5px #b300b3'], display: 'flex', flexWrap: 'wrap', gap: ['2rem','2rem','2rem'], py: ['1rem','2rem','3rem','3rem','5rem'], px: '0rem', justifyContent: 'center', alignItems: 'center'}}>
                        {Card.map((item) => (
                            <Box className='card' sx={{ width: ['45ch','35ch','28ch','33ch','45ch'], height: ['20rem','18rem','18rem','21rem','24rem'], border: '1px dashed #3c3c3c', borderRadius: '2rem', padding: ['2rem','1rem','2rem'], gap: ['1rem','1rem','1rem','1rem','2rem'], display: 'flex', flexDirection: "column",position:'relative',overflow:'hidden'}}>
                                <Box sx={{ width: '100%', height: 'auto', display: 'flex', alignItems: 'center', gap: ['0.5rem','0.5rem','0.5rem','1rem']}}>
                                    <Box sx={{ width: ['4rem','4rem','3rem','4rem','5rem'], height: ['4rem','4rem','3rem','4rem','5rem'], borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center',    background: 'linear-gradient(130.3deg, #FC00FF 5.68%, #00DBDE 86.52%)' }}>
                                        {/* <img src='/responsive-icon.svg' alt='img'/> */}
                                        <Box sx={{width:['2.5rem','2.2rem','1.6rem','2rem','3rem'],height:['2.5rem','2.2rem','1.6rem','2rem','3rem'],display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        {item.icon}
                                        </Box>
                                       

                                    </Box>
                                    <Box sx={{width: ['50%','40%','60%','60%','45%'],}}>
                                        <Typography variant='h3' sx={{ fontSize: ['1.3rem','1.1rem','1rem','1.2rem','1.4rem'], fontWeight: '700',  color: 'white',  }}>{item.title}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{zIndex:'15'}}>
                                    <Typography sx={{ color: 'white', fontSize: ['1rem','1rem','0.8rem','1rem'] }}>{item.para}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap:[ '0.5rem','0.5rem','0.5rem','0.5rem','1rem'],zIndex:'10' }}>
                                    {
                                        item.points1 ?
                                            (
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                    </Box>
                                                    <Typography sx={{ color: 'white', fontSize: ['0.9rem','0.9rem','0.7rem','0.9rem','0.9rem'] }}>{item.points1}</Typography>
                                                </Box>) : null
                                    }
                                    {
                                        item.points2 ?
                                            (
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                    </Box>
                                                    <Typography sx={{ color: 'white', fontSize: ['0.9rem','0.9rem','0.7rem','0.9rem','0.9rem'] }}>{item.points2}</Typography>
                                                </Box>
                                            ) : null
                                    }
                                    {
                                        item.points3 ?
                                            (
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                    </Box>
                                                    <Typography sx={{ color: 'white', fontSize: ['0.9rem','0.9rem','0.7rem','0.9rem','0.9rem'] }}>{item.points3}</Typography>
                                                </Box>
                                            ) : null
                                    }
                                </Box>
                               <Box className='shadow' sx={{ visibility:'hidden', display:'flex',justifyContent:'flex-end',alignItems:'flex-end',position:'absolute',bottom:'-3%',right:'-3%',zIndex:'0'}}>
                                {item.icon1}
                                </Box>
                            </Box>
                        ))}
                    </Box>




                </Box>
                <Box sx={{ width: '100%', height: ['43rem','60rem','52rem'], backgroundColor: '#0d0c0d', backgroundImage: ['none','none','url(/hero-bg-line.png)'], display: 'flex', alignItems: 'center', backgroundSize:'cover',padding:[ '1rem','2rem','10rem'], flexDirection:['column','column-reverse','row'],backgroundPosition: "center",position:'relative'}}>

                    <Box sx={{ width: ['95%','90%','50%'], height: ['23rem','20rem','28rem'], display: 'flex', flexDirection: 'column',gap:[ '1rem','1rem','1.5rem','2rem','3rem'], position:"absolute",top:['46%','50%','23%','25%','30%'],left:['5%','8%','8%','8%','8%'] }}>

                        <Typography className='home-title' sx={{ fontSize: ['1rem','1.3rem','1rem','1.1rem','1.3rem'],  width: ['70%','100%'], fontWeight: 'bold' }}>Featured Case study</Typography>
                        <Typography sx={{ fontSize:[ '1.8rem','2.1rem','1.5rem','2.2rem','3rem'], width: ['90%','70%','70%','80%','70%'], fontWeight: 500, color: 'white' }}>IOT Solution for a famous company in Goa</Typography>
                        <Typography sx={{ width: ['90%','85%','85%','85%','70%'], fontSize: ['1.1rem','1.5rem','1rem','1rem','1rem'], fontWeight: 100, color: '#fff', lineHeight: ['1.8rem','2.2rem','1.5rem','1.8rem','2rem']  }}>We combine strategy, migration, managed services,and modernization capabilities to deliver holistic solutions for complex challenges.</Typography>
                        <Button sx={{ width: ['7rem','7rem','7rem','8rem','10rem'], background: ' linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)', borderRadius: '24px', color: 'white', fontSize: ['0.8rem'], display: 'flex', gap: '0.5rem', textTransform: 'none' }}><ForumOutlinedIcon sx={{ color: 'white', width: ['0.8rem','1.1rem','1rem'], height: ['0.8rem','1.1rem','1rem'] }} />lets Talk</Button>
                    </Box>
                  
                    <Box sx={{ width: ['100%','70%','60%'], height: ['20rem','40rem','52rem'], display: 'flex',backgroundImage:'url(/home-3rd-img.png)',backgroundPosition:'center',backgroundSize:'contain',backgroundRepeat:'no-repeat', justifyContent: 'center', marginTop: '0rem', alignItems: 'center',position:'absolute',top:['-0%','-7%','-5%'],right:['0%','15%','5%']}}>
                     
                    </Box>
                   

                </Box>
                <Box sx={{ width: '100%', height: ['auto','auto','auto','auto','auto'], backgroundColor: '#0d0c0d', padding: ['1rem','1rem','3rem','5rem','10rem'] }}>

                    <Box sx={{ width: '100%', display: "flex", gap: ['1rem'] }}>
                        <Box sx={{ width: ['8px','5px'], height: ['5.5rem','6rem','6rem','6rem','6rem'], background: 'linear-gradient(180.06deg, #7100E2 10%, #B300BE 100%)', borderRadius: '8px' }}>

                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['0.5rem','1rem'] }}>
                            <Typography sx={{ fontSize: ['1.3rem','2rem'], color: "white" }}>Insights from our Team</Typography>
                            <Typography sx={{ fontSize: ['1rem','1rem'], color: 'white' }}>Get the latest news, announcements, stories, and insights from our team</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: '3rem' }}>
                        <Typography sx={{ color: 'white', py: '1rem' }}>Latest posts</Typography>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', alignItems:['center','center','center'],flexDirection:['column','column','row'],gap: '1rem' }}>
                        <Box sx={{ width: ['100%','98%','60%','65%','65%'], height: ['29rem','43rem','37rem','37.2rem','40rem'], border: '1px solid gray'}}>
                            <Box sx={{ width: '100%', height:[ '10rem','19rem','16.5rem','17rem','17rem'], backgroundImage: 'url(/home-bg3.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}>

                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', py: ['0.5rem','1rem','1rem','1rem'], px: '1.5rem' }}>
                                <Typography className='home-card-title' sx={{ width: 'fit-content',fontSize:['0.8rem','1rem'] }}>Design</Typography>
                                <Typography sx={{ color: 'white', fontSize: ['0.8rem','1rem'] }}> 2 Mar 2020</Typography>
                            </Box>
                            <Box sx={{ width: '100%', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: ['1rem','2rem','1rem','1rem','2rem' ]}}>
                                <Typography sx={{ fontSize: ['1.3rem','2.5rem','1.8rem','2rem','2.5rem'], color: 'white', width: ['100%','85%','85%','85%','80%'] }}>End-to-End Solutions for Complex Challenges</Typography>
                                <Typography sx={{ color: 'white' }}>At SmartAwe, we trust in digital technology as a platform for businesses to reach both the local and global markets. </Typography>
                                <Button sx={{ width: ['9rem','10rem'], background: ' linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)', color: 'white',fontSize:['0.8rem','1rem'] }}>Learn More<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         < path d="M5.84375 12.3281H19.8438" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                         <path d="M12.8438 5.32812L19.8438 12.3281L12.8438 19.3281" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                   </svg>
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{ width: ['100%','100%','40%','35%'], height: ['auto','auto','auto','auto','auto'], display: 'flex', justifyContent:['center','center','flex-start','center'],flexWrap: 'wrap', gap: '1rem'}}>
                         {card1.map((item) => (
                            <Box sx={{ width: ['100%','48%','47%','47%','48%'], height: ['17.5rem','18rem','18rem','18rem','19.5rem'], border: '1px solid gray' }}>
                                <Box sx={{ width: '100%',height:'13rem' }}>
                                    <img src={item.img} style={{ width: '100%', height: '100%' }} alt='img' />
                                </Box>
                                <Box>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', py: '0.3rem', px: '0.5rem' }}>
                                        <Typography className='home-card-title' sx={{ width: 'fit-content', fontSize: '0.8rem' }}>{item.title1}</Typography>
                                        <Typography sx={{ color: 'white', fontSize: '0.8rem' }}>{item.title2}</Typography>
                                    </Box>
                                    <Box sx={{ width: '100%', py: '0.5rem'}}>
                                        <Typography sx={{ fontSize: ['0.9rem','0.8rem','0.8rem','0.8rem'], color: 'white', px: '0.5rem', fontWeight: 'bold' }}>{item.para}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                             ))}
                        </Box>
                    </Box>

                </Box>
                <Box sx={{width:'100%',height:['15rem','16rem','25rem','27rem','27rem'],backgroundColor: '#0d0c0d'}}>
                       <Box sx={{width:'100%',backgroundImage:'url(/home-bg4.png)',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:['13rem','15rem','23rem','25rem','25rem'],display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"center",gap:['1.2rem','1.5rem','1.5rem','1.5rem','3rem'],backgroundColor:'blue'}}>
                        <Typography sx={{fontSize:['1.3rem','1.6rem','1.8rem','2.5rem'],fontWeight:'600',width:['90%','70%','50%','60%','40%'],textAlign:'center'}}>Speak to an Expert. Find out what Smartawe can do for you.</Typography>
                        <Typography sx={{fontSize:['0.8rem','1rem','1rem'],color:'white',textAlign:'center',width:['90%','90%','100%']}}>Contact us now. We’ll answer your questions and provide a free consultation.</Typography>
                        <Button sx={{ width: ['7rem','6rem','8rem'],border:'1px solid white', background: ' linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)', borderRadius: '24px', color: 'white', fontSize: '0.8rem', display: 'flex', gap: '0.5rem', textTransform: 'none' }}><ForumOutlinedIcon sx={{ color: 'white', width: ['0.8rem','1rem'], height: ['0.8rem','1rem' ]}} />lets Talk</Button>
                       </Box>
                </Box>
            </Box>
               
        </>
    )
}

export default Home