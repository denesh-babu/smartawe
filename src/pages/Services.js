import { Box, Typography } from '@mui/material'
import React from 'react'
import { service } from '../utils/data'

function Service() {
    return (
        <>
            <Box sx={{ backgroundColor: '#0d0c0d' }}>
                <Box sx={{ width: '100%', height: ['40rem','55rem','52rem','52rem','52rem'], display: 'flex',flexDirection:['column','column','row'], backgroundColor: '#0d0c0d', position: 'relative',marginBottom:['1rem','1rem','5rem','15rem' ]}}>
                    <Box sx={{ width: ['100%','100%','50%','50%'], height: ['20rem','29rem','34rem','45rem','51rem'],backgroundImage:'url(/service-img1.png)',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
                        
                    </Box>
                    <Box sx={{ width: "15%", height: '15rem',backgroundImage:'url(/service-img2.png)',backgroundPosition:'center',backgroundSize:'contain',backgroundRepeat:'no-repeat' , position: 'absolute', top: ['-8%','-5%','10%','15%','23%'], left: ['75%','80%','72%','70%','63%']}}>
                        
                    </Box>
                    <Box sx={{ width: ['100%','100%','50%','50%','50%'], height: ['23rem','28rem','34rem','45rem','51rem'], display: 'flex', flexDirection: 'column', alignItems:['center','center','flex-start'],justifyContent: 'center', gap: ['0.5rem','1.5rem'], position: 'absolute', top: ['45%','53%','20%','10%','20%'], left: ['0%','0%','50%','50%','50%']}}>
                        <Typography sx={{ color: '#D800E5', fontSize: ['1.5rem','2rem','2.2rem',"2.5rem"], fontWeight: 'bold' }}>Our Service</Typography>
                        <Typography sx={{ color: '#C2C2C2', fontSize:['0.9rem','1.2rem','0.8rem','1rem'],width: ['85%','85%','90%','90%','60%'], lineHeight: ['1.3rem','2rem','1.5rem','2rem'], letterSpacing: '0.1rem',textAlign:['left','left'] }}>At SmartAwe, we trust in digital technology as a platform for businesses to reach both the local and global markets. We provide software development and automation solutions for small businesses, innovative startups and big brands. With a smart strategy, design, development and beyond, we love to work together with our clients as a long-term digital partner.We love the growth of our clients as we love the web.</Typography>
                    </Box>

                </Box>
                <Box sx={{ width: '100%' }}>
                    {
                        service.map((item, index) => (
                            <>
                                {
                                    index % 2 === 0 ?
                                        (
                                            <Box sx={{ width: '100%', backgroundColor: '#0d0c0d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:['column-reverse','row','row'],gap: ['0rem','1rem','1rem','5rem','5rem'], height: ['auto','auto','24rem','33rem','46rem'], backgroundImage: ['none','none',item.bgimg1], backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',py:['3rem','0']}}>
                                                <Box className='servicecard' sx={{  display: 'flex', flexDirection: 'column', gap: ['1rem','1rem','0.5rem','0.8rem','1rem'],width: ['80%','40%','40%','30%','30%']}}>
                                                    <Box sx={{ width: ['100%'], height: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                        <Box sx={{ width: '4rem', height: '4rem', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(130.3deg, #FC00FF 5.68%, #00DBDE 86.52%)' }}>
                                                        <Box sx={{width:['2.5rem','2.2rem','2rem','2rem','3rem'],height:['2.5rem','2.2rem','2rem','2rem','3rem'],display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                             {item.icon}
                                                           </Box>
                                                        </Box>
                                                        <Box sx={{width:'60%'}} >
                                                            <Typography className='service-title' sx={{ fontSize: ['1.4rem','1.5rem','1.6rem','1.8rem','2rem'], fontWeight: '700', color: 'white', }}>{item.title}</Typography>
                                                        </Box>
                                                    </Box>

                                                    <Typography sx={{ color: 'white', fontSize: ['1rem','1rem','1rem','1.1rem','1.3rem'], width: '90%' }}>{item.para}</Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['0.5rem','0.5rem','0','0.2rem','0.5rem'] }}>



                                                        {item.points1 ?
                                                            
                                                            (<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#04cacd', borderRadius: '50%' }}>

                                                                    </Box>
                                                                    <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points1}</Typography>
                                                             </Box>) : null
                                                        }
                                                         {item.points2 ?
                                                            
                                                            (<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#04cacd', borderRadius: '50%' }}>

                                                                    </Box>
                                                                    <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points2}</Typography>
                                                             </Box>) : null
                                                        }
                                                         {item.points3 ?
                                                            
                                                            (<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#04cacd', borderRadius: '50%' }}>

                                                                    </Box>
                                                                    <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points3}</Typography>
                                                             </Box>) : null
                                                        }
                                                         {item.points4 ?
                                                            
                                                            (<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#04cacd', borderRadius: '50%' }}>

                                                                    </Box>
                                                                    <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points4}</Typography>
                                                             </Box>) : null
                                                        }
                                                         {item.points5 ?
                                                            
                                                            (<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#04cacd', borderRadius: '50%' }}>

                                                                    </Box>
                                                                    <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points5}</Typography>
                                                             </Box>) : null
                                                        }
                                                         {item.points6 ?
                                                            
                                                            (<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#04cacd', borderRadius: '50%' }}>

                                                                    </Box>
                                                                    <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points6}</Typography>
                                                             </Box>) : null
                                                        }
                                                         {item.points7 ?
                                                            
                                                            (<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#04cacd', borderRadius: '50%' }}>

                                                                    </Box>
                                                                    <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points7}</Typography>
                                                             </Box>) : null
                                                        }
                                                         {item.points8 ?
                                                            
                                                            (<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#04cacd', borderRadius: '50%' }}>

                                                                    </Box>
                                                                    <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points8}</Typography>
                                                             </Box>) : null
                                                        }
                                                         {item.points9 ?
                                                            
                                                            (<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#04cacd', borderRadius: '50%' }}>

                                                                    </Box>
                                                                    <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points9}</Typography>
                                                             </Box>) : null
                                                        }
                                                         {item.points10 ?
                                                            
                                                            (<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                                    <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#04cacd', borderRadius: '50%' }}>

                                                                    </Box>
                                                                    <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points10}</Typography>
                                                             </Box>) : null
                                                        }
                                                    </Box>

                                                </Box>
                                                <Box sx={{ width: ['80%','30%','35%','35%','35%'], height: ['21rem','28rem','15rem','28rem','34rem'], backgroundImage: item.bgimg2, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                                                </Box>
                                            </Box>) : (
                                            <Box sx={{ width: '100%', backgroundColor: '#0d0c0d', marginY: ['0rem','0rem','5rem','8rem','15rem'], display: 'flex', flexDirection:['column','row'],alignItems: 'center', justifyContent: 'center', gap: ['0rem','1rem','5rem'], height: ['auto','auto','24rem','33rem','46rem'], backgroundImage: ['none','none',item.bgimg1], backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',py:['3rem','0']}}>
                                                <Box sx={{ width: ['80%','30%','35%','35%'], height: ['21rem','28rem','15rem','28rem','34rem'],  backgroundImage: item.bgimg2, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                                                </Box>
                                                <Box className='servicecard' sx={{ backgroundColor: '', display: 'flex', flexDirection: 'column', gap: ['1rem','0.8rem','0.8rem','0.8rem','1rem'], width: ['80%','40%','30%'], alignItems: ['flex-start','flex-end'] }}>
                                                    <Box sx={{ width: '100%', height: 'auto', display: 'flex',flexDirection:['row-reverse','row'] ,alignItems: 'center', gap: ['1rem','0.8rem','0.8rem','1rem'], justifyContent: 'flex-end' }}>
                                                        <Box sx={{width:'60%'}}>
                                                            <Typography  className='service-title' sx={{ fontSize: ['1.4rem','1.5rem','1.6rem','1.8rem','2rem'], fontWeight: '700', color: 'white', }}> {item.title}</Typography>
                                                        </Box>
                                                        <Box sx={{ width: '4rem', height: '4rem', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(130.3deg, #FC00FF 5.68%, #00DBDE 86.52%)' }}>
                                                        <Box sx={{width:['2.5rem','2.2rem','2rem','2rem','3rem'],height:['2.5rem','2.2rem','2rem','2rem','3rem'],display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                          {item.icon}
                                                           </Box>
                                                        </Box>

                                                    </Box>

                                                    <Typography sx={{ color: 'white', fontSize: ['1rem','1rem','1rem','1.1rem','1.3rem'], width: '90%',textAlign:['left','right'] }}>{item.para}</Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['0.5rem','0.5rem','0','0.2rem','0.5rem'], alignItems: ['flex-start','flex-end'] }}>
                                                       
                                                       {
                                                        item.points1 ?
                                                        (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                            <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                            </Box>
                                                            <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points1}</Typography>
                                                           </Box>
                                                        ) : null
                                                       }
                                                       {
                                                        item.points2 ?
                                                        (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                            <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                            </Box>
                                                            <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points2}</Typography>
                                                           </Box>
                                                        ) : null
                                                       }
                                                       {
                                                        item.points3 ?
                                                        (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                            <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                            </Box>
                                                            <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points3}</Typography>
                                                           </Box>
                                                        ) : null
                                                       }
                                                       {
                                                        item.points4 ?
                                                        (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                            <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                            </Box>
                                                            <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points4}</Typography>
                                                           </Box>
                                                        ) : null
                                                       }
                                                       {
                                                        item.points5 ?
                                                        (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                            <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                            </Box>
                                                            <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points5}</Typography>
                                                           </Box>
                                                        ) : null
                                                       }
                                                       {
                                                        item.points6 ?
                                                        (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                            <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                            </Box>
                                                            <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points6}</Typography>
                                                           </Box>
                                                        ) : null
                                                       }
                                                       {
                                                        item.points7 ?
                                                        (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                            <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                            </Box>
                                                            <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points7}</Typography>
                                                           </Box>
                                                        ) : null
                                                       }
                                                       {
                                                        item.points8 ?
                                                        (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                            <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                            </Box>
                                                            <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points8}</Typography>
                                                           </Box>
                                                        ) : null
                                                       }
                                                       {
                                                        item.points9 ?
                                                        (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                            <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                            </Box>
                                                            <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points9}</Typography>
                                                           </Box>
                                                        ) : null
                                                       }
                                                       {
                                                        item.points10 ?
                                                        (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                            <Box sx={{ width: '0.3rem', height: '0.3rem', backgroundColor: '#b201be', borderRadius: '50%' }}>

                                                            </Box>
                                                            <Typography sx={{ color: 'white', fontSize: ['1rem','0.8rem','0.8rem','0.9rem','1rem'] }}>{item.points10}</Typography>
                                                           </Box>
                                                        ) : null
                                                       }
                                                    </Box>

                                                </Box>

                                            </Box>)
                                }
                            </>
                        ))
                    }
                    <Box sx={{width:"100%",height:['4rem','8rem'],backgroundColor:'#0d0c0d'}}>

                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Service