import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';

export default function RadioButtonsGroup() {
    return (
        <FormControl >

            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Cloud Services"
                name="radio-buttons-group"

            >
                <Box sx={{ display:'flex', width: ['80%','100%','90%','100%','90%'],flexDirection:['column','row'] ,flexWrap:['nowrap','nowrap','nowrap','nowrap']}}>
                    <Box sx={{width:'100%',display:['block','block','block','block'],justifyContent:'center',gap:"2rem"}}>
                        <FormControlLabel value="Web Development" control={<Radio sx={{color:"white",'&.Mui-checked':{ color:'white'}}} />} label="Web Development"  sx={{ fontSize: ['2rem'], color: 'white' }} />
                        <FormControlLabel value="Responsive Web Design" control={<Radio sx={{color:"white",'&.Mui-checked':{ color:'white'}}}/>} label="Responsive Web Design" sx={{fontSize: '5.3rem', color: 'white' }} />
                    </Box>
                    <Box sx={{width:'100%',display:['block','block','block','block'],justifyContent:'center',gap:"2rem"}}>
                        <FormControlLabel value="E-Commerce Services" control={<Radio sx={{color:"white",'&.Mui-checked':{ color:'white'}}}/>} label="E-Commerce Services" sx={{ fontSize: '2rem', color: 'white' }} />
                        <FormControlLabel value="Mobile App Development" control={<Radio sx={{color:"white",'&.Mui-checked':{ color:'white'}}}/>} label="Mobile App Development" sx={{ fontSize: '2rem', color: 'white' }} />
                    </Box>
                    <Box sx={{width:'100%',display:['block','block','block','block'],justifyContent:'center',gap:"2rem"}}>
                        <FormControlLabel value="UX/UI Design" control={<Radio sx={{color:"white",'&.Mui-checked':{ color:'white'}}}/>} label="UX/UI Design"  sx={{ fontSize: '2rem', color: 'white' }}/>
                        <FormControlLabel value="Cloud Services"  control={<Radio sx={{color:"white",'&.Mui-checked':{ color:'white'}}}/>} label="Cloud Services" sx={{ fontSize: '2rem', color: 'white' }}/>
                    </Box>
                </Box>
            </RadioGroup>
        </FormControl>
    );
}



