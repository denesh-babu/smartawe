import * as React from 'react';
import {Box ,Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {styled} from '@mui/material'


const CssTextField = styled(TextField)(
  {
    "& .MuiInput-border:after":{
      borderColor:'green'
    }
  }
)

export default function BasicTextFields() {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, mt: 3 },
          }}
          noValidate
          autoComplete="off"
        >
          <CssTextField sx={{ width: '40ch',backgroundColor:'#1a1a1a' }} id="outlined-basic" label="Name" variant="outlined" InputLabelProps={{ sx:{color:"white"},}}/>
          <TextField sx={{ width: '40ch',backgroundColor:'#1a1a1a' }} id="outlined-basic" label="Outlined" variant="outlined" InputLabelProps={{ sx:{color:"white"},}}/>
          <TextField sx={{ width: '40ch',backgroundColor:'#1a1a1a' }} id="outlined-basic" label="Outlined" variant="outlined" InputLabelProps={{ sx:{color:"white"},}} />


        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, mt: 3 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField sx={{ width: '40ch',backgroundColor:'#1a1a1a' }} id="outlined-basic" label="Name" variant="outlined" InputLabelProps={{ sx:{color:"white"},}}/>
          <TextField sx={{ width: '40ch',backgroundColor:'#1a1a1a' }} id="outlined-basic" label="Outlined" variant="outlined" InputLabelProps={{ sx:{color:"white"},}}/>


        </Box>

        <Box component="form"
          sx={{
            '& > :not(style)': { m: 1, mt: 3 },
          }}
          noValidate
          autoComplete="off">
          <TextField sx={{ width: '82ch',backgroundColor:'#1a1a1a' }} fullWidth label="fullWidth" id="fullWidth" InputLabelProps={{ sx:{color:"white"},}}/>
          <TextField sx={{ width: '52ch' ,backgroundColor:'#1a1a1a'}}
            name="upload-photo"
            type="file" InputLabelProps={{ sx:{color:"white"},}}/>
            <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>

           
               <Button sx={{ width: '8rem', background: ' linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)', borderRadius: '4px', color: 'white', fontSize: '0.8rem', display: 'flex', gap: '0.5rem', textTransform: 'none' }}>APPLY NOW</Button>
               </Box>
        </Box>
      </Box>

    </>
  );
}



