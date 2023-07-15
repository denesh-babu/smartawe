import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { study } from '../utils/data'

function Study() {
    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <Box sx={{ width: '100%', height: ['45rem', '25rem','36rem','40rem','55rem'], backgroundImage: ['url(/study.bg2c1.png)', 'url(/study.bg1c.png)'], backgroundPosition: 'center', backgroundSize: ['cover','cover','contain','cover'], backgroundRepeat: 'no-repeat', backgroundColor: '#0d0c0d', position: 'relative'}}>
                    <Box sx={{ position: "absolute", top: ['35%','35%','36%','35%','35%'], left: ['0%', '5%','12%','12%','15%'], backgroundColor: '', display: 'flex', flexDirection: "column", alignItems: 'center', gap: ['0.5rem', '0.7rem','0.5rem','0.5rem','2rem'] }}>
                        <Typography className='study-title' sx={{ fontSize: ['3rem', '2.5rem','3.2rem','4rem','6rem'], color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Our Projects</Typography>
                        <Typography sx={{ fontSize: ['1.1rem', '0.7rem','0.8rem','1rem','1.5rem'], color: 'white', textAlign: 'center', width: ['90%','75%'] }}>Digital Transformation is inspiring new standards of business and growth. It is not just about incorporating new technology into a business</Typography>
                    </Box>
                </Box>


                {
                    study.map((item, index) => (
                        <>
                            {
                                index % 2 === 0 ?
                                    (
                                        <Box sx={{ width: '100%', height: ['40rem','55rem', '40rem','40rem','55rem'], backgroundImage: ['none', 'none','url(/study-sec1-rect.png)','url(/study-sec1-rect.png)'], backgroundColor: '#0d0c0d', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: ['column-reverse','column-reverse', 'row','row'], alignItems: 'center', gap: ['0.5rem','1rem', '3rem','3rem'], position: 'relative', padding: ['1rem','1.5rem', '0','0'] }}>
                                            <Box sx={{ width: ['100%','100%', '50%','50%','43%'], height: ['25rem','25rem', '35rem','30rem','35rem'], display: 'flex', flexDirection: 'column', gap: ['0.5rem','0.5rem', '0.8rem','0.8rem','1.5rem'], paddingLeft: ['0','0rem', '2rem','2rem'], position: ['static','static', 'absolute','absolute'], top: ['20%','20%','24%','18%',"20%"], left: '5%' }}>
                                                <Typography className='study-title' sx={{ fontSize: ['0.7rem','1rem', '1rem','1.1rem','1.2rem'] }}>{item.title1}</Typography>
                                                <Box sx={{ width: ['30%','20%', '20%','20%','20%'], height: ['1.5rem','2.5rem', '2rem','2.5rem','3rem'] }}>
                                                    <img src={item.img} style={{ width: '100%', height: '100%' }} alt='img' />
                                                </Box>
                                                <Typography sx={{ color: 'white', fontSize: ['1.3rem','1.8rem', '1.3rem','1.9rem','2.5rem'], width: ['100%','100%', '80%','90%'], fontWeight: '600' }}>{item.title2}</Typography>
                                                <Typography sx={{ color: '#c1c0c1', fontSize: ['0.9rem','1.1rem', '0.8rem','1rem','1.2rem'], width: ['95%','95%', '80%','80%'] }}>{item.title3}</Typography>
                                                <Box sx={{ py: ['0.5rem','0.5rem', '0.5rem','1rem'], display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                    <Typography sx={{ color: '#6c6d6c', fontSize: ['0.8rem','1rem', '0.9rem','1rem','1rem'] }}>{item.title4}</Typography>
                                                    <Typography sx={{ color: 'white', fontSize: ['0.9rem','1.1rem', '1.1rem','1.2rem','1.2rem'] }}>{item.title5}</Typography>
                                                </Box>
                                                <Box>
                                                    <Button sx={{ color: '#f001f2' }}>EXPLORE<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.27734 10.3145H15.944" stroke="#FC00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.1094 4.48047L15.9427 10.3138L10.1094 16.1471" stroke="#FC00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    </Button>
                                                </Box>

                                            </Box>
                                            <Box sx={{ width: ['100%','100%', '50%','50%','43%'], height: ['15rem','26rem', '32rem','32rem','35rem'], backgroundImage: [item.imgbg2,item.imgbg2,item.imgbg,item.imgbg], backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: ['none','none','absolute','absolute'], top: ['5%','5%', '10%','10%',"20%"], right: '0', padding: ['1rem','1rem','0','0'] }}>

                                            </Box>
                                        </Box>) : (<Box sx={{ width: '100%', height: ['45rem','58rem','40rem','40rem','60rem'], backgroundImage:[ 'none','none','url(/study-sec2-rect.png)','url(/study-sec2-rect.png)'], backgroundColor: '#0d0c0d', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', display: 'flex',flexDirection: ['column','column', 'row','row'], alignItems: 'center',gap: ['0.5rem','1rem', '3rem','3rem'], position: 'relative',padding:['1rem','1.5rem','0','0']}}>
                                            <Box sx={{ width: ['100%','100%','45%','50%','47%'], height: ['15rem','26rem','35rem','35rem','40rem'], backgroundImage: [item.imgbg2,item.imgbg2,item.imgbg,item.imgbg], backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: ['none','none','absolute','absolute'], top: ['0%','0%','6%','6%',"17%"], left: '0' }}>

                                            </Box>
                                            <Box sx={{  width: ['100%','100%', '50%','43%'], height: ['27rem','28rem', '35rem','30rem','35rem'], display: 'flex', flexDirection: 'column', gap: ['0.5rem','0.5rem','0.5rem','0.8rem','1.5rem'], paddingLeft:[ '0rem','0rem','0rem','0rem'], position: ['static','static','absolute','absolute'], top: ['16%','16%','22%','13%',"16%"], right: ['5%','5%','0','5%']}}>
                                                <Typography className='study-title' sx={{ fontSize: ['0.7rem','1rem', '1rem','1rem','1.2rem'] }}>{item.title1}</Typography>
                                                <Box sx={{ width: ['30%','30%', '20%','20%','20%'], height: ['1.5rem','2.5rem', '2rem','2.5rem','3rem']  }}>
                                                    <img src={item.img} style={{ width: '100%', height: '100%' }} alt='img' />
                                                </Box>
                                                <Typography sx={{ color: 'white', fontSize: ['1.3rem','1.8rem','1.3rem','1.9rem','2.5rem'], width:[ '100%','100%','80%','100%','80%'], fontWeight: '600' }}>{item.title2}</Typography>
                                                <Typography sx={{ color: '#c1c0c1', fontSize: ['0.9rem','1.1rem','0.8rem','1rem','1.2rem'], width: ['95%','95%','80%','80%'] }}>{item.title3}

                                                </Typography>
                                                <Box sx={{ py: ['0.5rem','0.5rem','0.5rem','1rem'], display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                    <Typography sx={{ color: '#6c6d6c', fontSize: ['0.8rem','1rem', '0.9rem','1rem','1rem']  }}>{item.title4}</Typography>
                                                    <Typography sx={{ color: 'white', fontSize: ['0.9rem','1.1rem', '1.1rem','1.2rem','1.2rem'] }}>{item.title5}</Typography>
                                                </Box>
                                                <Box>
                                                    <Button sx={{ color: '#f001f2' }}>EXPLORE<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.27734 10.3145H15.944" stroke="#FC00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.1094 4.48047L15.9427 10.3138L10.1094 16.1471" stroke="#FC00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    </Button>
                                                </Box>

                                            </Box>

                                        </Box>)
                            }
                        </>
                    ))
                }
                <Box sx={{ width: '100%', height: '20vh', backgroundColor: '#0d0c0d' }}>

                </Box>


                <Box sx={{ width: ['12%','8%','10%'], height:[ '5rem','5rem','16rem'],backgroundImage:'url(/study-box1.png)',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover', position: 'absolute', top: ['19%','29%','35%','34%','34%'], left: '0' }}>
                   
                </Box>
                <Box sx={{ width: ['12%','8%','10%'], height:[ '5rem','5rem','16rem'],backgroundImage:'url(/study-box2.png)',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover', position: 'absolute', top: ['34%','49%','50%','50%','51%'], right: '0' }}>
                    
                </Box>
                <Box sx={{ width: ['12%','8%','10%'], height:[ '5rem','5rem','16rem'],backgroundImage:'url(/study-box3.png)',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover', position: 'absolute', top: ['56%','52%','56%','55%','57%'], left: '0' }}>
                  
                </Box>
                <Box sx={{ width: ['12%','8%','10%'], height:[ '5rem','5rem','16rem'],backgroundImage:'url(/study-box4.png)',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover', position: 'absolute', top: ['72%','70%','76%','75%','76%'], right: '0' }}>
                  
                </Box>
                <Box sx={{ width: ['12%','8%','10%'], height:[ '5rem','5rem','16rem'],backgroundImage:'url(/study-box5.png)',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover', position: 'absolute', top:[ '94%','94%','92%','92%','93%'], left: '0' }}>
                
                </Box>





            </Box>



        </>
    )
}

export default Study