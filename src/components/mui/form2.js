// import * as React from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import { styled } from '@mui/material'
// import Checkbox from '../mui/checkbox'


// const CssTextField = styled(TextField)(
//     {
//         "& .MuiInput-border:after": {
//             borderColor: 'green'
//         }
//     }
// )




// export default function BasicTextFields() {



//     return (
//         <>
//             <Box sx={{ width: '100%',backgroundColor:''}}>
//                 <Box
//                     component="form"
//                     sx={{
//                         '& > :not(style)': { m: [2,1], mt: [1,3] },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <CssTextField  sx={{ width: ['40ch','40ch','35ch','35ch','40ch'], backgroundColor: '#1a1a1a' }} id="outlined-basic" label="Name" variant="outlined" InputLabelProps={{ sx: { color: "white" }, }} />
//                     <TextField sx={{ width: ['40ch','39ch','35ch','35ch','40ch'], backgroundColor: '#1a1a1a' }} id="outlined-basic" label="Company" variant="outlined" InputLabelProps={{ sx: { color: "white" }, }} />
//                     <TextField sx={{ width: ['40ch','40ch','35ch','35ch','40ch'], backgroundColor: '#1a1a1a' }} id="outlined-basic" label="Email Address" variant="outlined" InputLabelProps={{ sx: { color: "white" }, }} />
//                     <TextField sx={{ width: ['40ch','39ch','35ch','35ch','40ch'], backgroundColor: '#1a1a1a' }} id="outlined-basic" label="Phone Number" variant="outlined" InputLabelProps={{ sx: { color: "white" }, }} />

//                 </Box>

//                 <Box sx={{ padding: ['1rem','1rem'] }}>
//                     <Typography sx={{ color: 'white' }}>What type of Services do you need?</Typography>
//                     <Checkbox />
//                 </Box>


//                 <Box component="form"
//                     sx={{
//                         '& > :not(style)': { m: [2,1], mt: [1,3] },
//                     }}
//                     noValidate
//                     autoComplete="off">
//                     <TextField sx={{ width: ['40ch','81ch','71ch','71ch','82ch'], backgroundColor: '#1a1a1a' }} fullWidth label="Message" id="fullWidth" InputLabelProps={{ sx: { color: "white" }, }} />
//                     <Box sx={{ width: ['91%','100%','82%','80%','100%'], display: 'flex', justifyContent: 'center' }}>
//                         <Button sx={{ width: '8rem', background: ' linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)', borderRadius: '24px', color: 'white', fontSize: '0.8rem', display: 'flex', gap: '0.5rem', textTransform: 'none' }}>Send Enquiry</Button>
//                     </Box>
//                 </Box>
//             </Box>

//         </>
//     );
// }

















// import React, { useState } from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import { styled } from '@mui/material';
// import Checkbox from '../mui/checkbox';

// const CssTextField = styled(TextField)({
//   '& .MuiInput-border:after': {
//     borderColor: 'green',
//   },
// });

// export default function BasicTextFields() {
//   const [name, setName] = useState('');
//   const [company, setCompany] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState('');

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Perform form validation and submit logic here
//     if (validateForm()) {
//       // Submit the form data
//       const formData = {
//         name,
//         company,
//         email,
//         phone,
//         message,
//       };
//       console.log('Form Data:', formData);
//       // Reset form fields
//       setName('');
//       setCompany('');
//       setEmail('');
//       setPhone('');
//       setMessage('');
//     }
//   };

//   const validateForm = () => {
//     // Perform validation for each field
//     if (!name.trim()) {
//       alert('Name is required');
//       return false;
//     }
//     if (!company.trim()) {
//       alert('Company is required');
//       return false;
//     }
//     if (!email.trim()) {
//       alert('Email is required');
//       return false;
//     }
//     // Perform additional validation for email format
//     if (!isValidEmail(email)) {
//       alert('Please enter a valid email');
//       return false;
//     }
//     if (!phone.trim()) {
//       alert('Phone number is required');
//       return false;
//     }
//     // Perform additional validation for phone number format
//     if (!isValidPhoneNumber(phone)) {
//       alert('Please enter a valid phone number');
//       return false;
//     }
//     if (!message.trim()) {
//       alert('Message is required');
//       return false;
//     }
//     return true; // Form is valid
//   };

//   const isValidEmail = (email) => {
//     // Perform email validation logic (regex, etc.)
//     // Return true if valid, false otherwise
//     return true;
//   };

//   const isValidPhoneNumber = (phone) => {
//     // Perform phone number validation logic (regex, etc.)
//     // Return true if valid, false otherwise
//     return true;
//   };

//   return (
//     <>
//       <Box sx={{ width: '100%', backgroundColor: '' }}>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: [2, 1], mt: [1, 3] },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <CssTextField
//             sx={{ width: ['40ch', '40ch', '35ch', '35ch', '40ch'], backgroundColor: '#1a1a1a',color:"white" }}
//             id="outlined-basic"
//             label="Name"
//             variant="outlined"
//             InputLabelProps={{ sx: { color: 'white' } }}
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <TextField
//             sx={{ width: ['40ch', '39ch', '35ch', '35ch', '40ch'], backgroundColor: '#1a1a1a',color:"white" }}
//             id="outlined-basic"
//             label="Company"
//             variant="outlined"
//             InputLabelProps={{ sx: { color: 'white' } }}
//             value={company}
//             onChange={(e) => setCompany(e.target.value)}
//           />
//           <TextField
//             sx={{ width: ['40ch', '40ch', '35ch', '35ch', '40ch'], backgroundColor: '#1a1a1a',color:"white" }}
//             id="outlined-basic"
//             label="Email Address"
//             variant="outlined"
//             InputLabelProps={{ sx: { color: 'white' } }}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             sx={{ width: ['40ch', '39ch', '35ch', '35ch', '40ch'], backgroundColor: '#1a1a1a',color:"white" }}
//             id="outlined-basic"
//             label="Phone Number"
//             variant="outlined"
//             InputLabelProps={{ sx: { color: 'white' } }}
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </Box>

//         <Box sx={{ padding: ['1rem', '1rem'] }}>
//           <Typography sx={{ color: 'white' }}>What type of Services do you need?</Typography>
//           <Checkbox />
//         </Box>

//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: [2, 1], mt: [1, 3] },
//           }}
//           noValidate
//           autoComplete="off"
//           onSubmit={handleFormSubmit}
//         >
//           <TextField
//             sx={{ width: ['40ch', '81ch', '71ch', '71ch', '82ch'], backgroundColor: '#1a1a1a',color:"white" }}
//             fullWidth
//             label="Message"
//             id="fullWidth"
//             InputLabelProps={{ sx: { color: 'white' } }}
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <Box sx={{ width: ['91%', '100%', '82%', '80%', '100%'], display: 'flex', justifyContent: 'center' }}>
//             <Button
//               type="submit"
//               sx={{
//                 width: '8rem',
//                 background: ' linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)',
//                 borderRadius: '24px',
//                 color: 'white',
//                 fontSize: '0.8rem',
//                 display: 'flex',
//                 gap: '0.5rem',
//                 textTransform: 'none',
//               }}
//             >
//               Send Enquiry
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }









// import React, { useState } from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import { styled } from '@mui/material';
// import Checkbox from '../mui/checkbox';

// const CssTextField = styled(TextField)({
//   '& .MuiInput-border:after': {
//     borderColor: 'white',
//   },
// });

// export default function BasicTextFields() {
//   const [name, setName] = useState('');
//   const [company, setCompany] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [phoneError, setPhoneError] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleCompanyChange = (event) => {
//     setCompany(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePhoneChange = (event) => {
//     setPhone(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     let isValid = true;

//     // Validate name
//     if (name.trim() === '') {
//       setNameError('Please enter your name');
//       isValid = false;
//     } else {
//       setNameError('');
//     }

//     // Validate email
//     if (email.trim() === '') {
//       setEmailError('Please enter your email address');
//       isValid = false;
//     } else if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setEmailError('Please enter a valid email address');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     // Validate phone number
//     if (phone.trim() === '') {
//       setPhoneError('Please enter your phone number');
//       isValid = false;
//     } else if (!/^\d{10}$/.test(phone)) {
//       setPhoneError('Please enter a valid 10-digit phone number');
//       isValid = false;
//     } else {
//       setPhoneError('');
//     }

//     if (isValid) {
//       // Perform form submission logic here
//       console.log('Form submitted');
//     }
//   };

// //   '& .MuiOutlinedInput-root': {
// //     '& fieldset': {
// //       borderColor: 'white',
// //     },



//   return (
//     <>
//       <Box sx={{ width: '100%', backgroundColor: '' }}>
//         <Box
//           component="form"
//           sx={{
//             // '& > :not(style)': { m: [2, 1], mt: [1, 3] ,color:"white"},
//             '& .MuiOutlinedInput-root ': {
//                 m: [2, 0], mt: [1, 0] ,color:"white"
//             },
//             display:'flex',gap:"1rem",flexWrap:'wrap'
//           }}
//           noValidate
//           autoComplete="off"
//           onSubmit={handleSubmit}
//         >
//           <CssTextField
//             sx={{ width: ['40ch', '40ch', '35ch', '35ch', '40ch'], backgroundColor: '#1a1a1a' ,  color: 'red' }}

//             id="outlined-basic"
//             label="Name"
//             variant="outlined"
//             InputLabelProps={{ sx: { color: 'white' } }}
//             value={name}
//             onChange={handleNameChange}
//             error={nameError !== ''}
//             helperText={nameError}
//             required
//           />
//           <TextField
//             sx={{ width: ['40ch', '39ch', '35ch', '35ch', '40ch'], backgroundColor: '#1a1a1a',  color: 'red' }}
//             id="outlined-basic"
//             label="Company"
//             variant="outlined"
//             InputLabelProps={{ sx: { color: 'white' } }}
//             value={company}
//             onChange={handleCompanyChange}
//           />
//           <TextField
//             sx={{ width: ['40ch', '40ch', '35ch', '35ch', '40ch'], backgroundColor: '#1a1a1a',  color: 'red' }}
//             id="outlined-basic"
//             label="Email Address"
//             variant="outlined"
//             InputLabelProps={{ sx: { color: 'white' } }}
//             value={email}
//             onChange={handleEmailChange}
//             error={emailError !== ''}
//             helperText={emailError}
//             required
//           />
//           <TextField
//             sx={{ width: ['40ch', '39ch', '35ch', '35ch', '40ch'], backgroundColor: '#1a1a1a',  color: 'red' }}
//             id="outlined-basic"
//             label="Phone Number"
//             variant="outlined"
//             InputLabelProps={{ sx: { color: 'white' } }}
//             value={phone}
//             onChange={handlePhoneChange}
//             error={phoneError !== ''}
//             helperText={phoneError}
//             required
//           />
//         </Box>

//         <Box sx={{ padding: ['1rem', '1rem'] }}>
//           <Typography sx={{ color: 'white' }}>What type of Services do you need?</Typography>
//           <Checkbox />
//         </Box>

//         <Box
//           component="form"
//           sx={{
//             // '& > :not(style)': { m: [2, 1], mt: [1, 3] },
//             '& .MuiOutlinedInput-root': {
//                 m: [2, 0], mt: [1, 0] ,color:"white"
//             },
//           }}
//           noValidate
//           autoComplete="off"
//           onSubmit={handleSubmit}
//         >
//           <TextField
//             sx={{ width: ['40ch', '81ch', '71ch', '71ch', '82ch'], backgroundColor: '#1a1a1a' ,  color: 'red'}}
//             fullWidth
//             label="Message"
//             id="fullWidth"
//             InputLabelProps={{ sx: { color: 'white' } }}
//           />
//           <Box sx={{ width: ['91%', '100%', '82%', '80%', '100%'], display: 'flex', justifyContent: 'center' }}>
//             <Button
//               type="submit"
//               sx={{
//                 width: '8rem',
//                 background: 'linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)',
//                 borderRadius: '24px',
//                 color: 'white',
//                 fontSize: '0.8rem',
//                 display: 'flex',
//                 gap: '0.5rem',
//                 textTransform: 'none',
//               }}
//             >
//               Send Enquiry
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }
















// import React, { useState } from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import { styled } from '@mui/material';
// import Checkbox from '../mui/checkbox';

// const CssTextField = styled(TextField)({
//   '& .MuiInput-root': {
//     color: 'white',
//   },
//   '& .MuiInputLabel-root': {
//     color: 'white',
//   },
//   '& .MuiOutlinedInput-notchedOutline': {
//     borderColor: 'white',
//   },
// });

// export default function BasicTextFields() {
//   const [name, setName] = useState('');
//   const [company, setCompany] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [phoneError, setPhoneError] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleCompanyChange = (event) => {
//     setCompany(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePhoneChange = (event) => {
//     setPhone(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     let isValid = true;

//     // Validate name
//     if (name.trim() === '') {
//       setNameError('Please enter your name');
//       isValid = false;
//     } else {
//       setNameError('');
//     }

//     // Validate email
//     if (email.trim() === '') {
//       setEmailError('Please enter your email address');
//       isValid = false;
//     } else if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setEmailError('Please enter a valid email address');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     // Validate phone number
//     if (phone.trim() === '') {
//       setPhoneError('Please enter your phone number');
//       isValid = false;
//     } else if (!/^\d{10}$/.test(phone)) {
//       setPhoneError('Please enter a valid 10-digit phone number');
//       isValid = false;
//     } else {
//       setPhoneError('');
//     }

//     if (isValid) {
//       // Perform form submission logic here
//       console.log('Form submitted');
//     }
//   };

//   return (
//     <>
//       <Box sx={{ width: '100%', backgroundColor: '' }}>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: [2, 1], mt: [1, 3], color: 'white' },
//           }}
//           noValidate
//           autoComplete="off"
//           onSubmit={handleSubmit}
//         >
//           <CssTextField
//             sx={{ width: ['40ch', '40ch', '35ch', '35ch', '40ch'], backgroundColor: '#1a1a1a' }}
//             id="outlined-basic"
//             label="Name"
//             variant="outlined"
//             value={name}
//             onChange={handleNameChange}
//             error={nameError !== ''}
//             helperText={nameError}
//             required
//           />
//           <CssTextField
//             sx={{ width: ['40ch', '39ch', '35ch', '35ch', '40ch'], backgroundColor: '#1a1a1a' }}
//             id="outlined-basic"
//             label="Company"
//             variant="outlined"
//             value={company}
//             onChange={handleCompanyChange}
//           />
//           <CssTextField
//             sx={{ width: ['40ch', '40ch', '35ch', '35ch', '40ch'], backgroundColor: '#1a1a1a' }}
//             id="outlined-basic"
//             label="Email Address"
//             variant="outlined"
//             value={email}
//             onChange={handleEmailChange}
//             error={emailError !== ''}
//             helperText={emailError}
//             required
//           />
//           <CssTextField
//             sx={{ width: ['40ch', '39ch', '35ch', '35ch', '40ch'], backgroundColor: '#1a1a1a' }}
//             id="outlined-basic"
//             label="Phone Number"
//             variant="outlined"
//             value={phone}
//             onChange={handlePhoneChange}
//             error={phoneError !== ''}
//             helperText={phoneError}
//             required
//           />
//         </Box>

//         <Box sx={{ padding: ['1rem', '1rem'] }}>
//           <Typography sx={{ color: 'white' }}>What type of Services do you need?</Typography>
//           <Checkbox />
//         </Box>

//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: [2, 1], mt: [1, 3] },
//           }}
//           noValidate
//           autoComplete="off"
//           onSubmit={handleSubmit}
//         >
//           <CssTextField
//             sx={{ width: ['40ch', '81ch', '71ch', '71ch', '82ch'], backgroundColor: '#1a1a1a' }}
//             fullWidth
//             label="Message"
//             id="fullWidth"
//             InputLabelProps={{ sx: { color: 'white' } }}
//           />
//           <Box sx={{ width: ['91%', '100%', '82%', '80%', '100%'], display: 'flex', justifyContent: 'center' }}>
//             <Button
//               type="submit"
//               sx={{
//                 width: '8rem',
//                 background: 'linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)',
//                 borderRadius: '24px',
//                 color: 'white',
//                 fontSize: '0.8rem',
//                 display: 'flex',
//                 gap: '0.5rem',
//                 textTransform: 'none',
//               }}
//             >
//               Send Enquiry
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }



import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material';
import Checkbox from '../mui/checkbox';

const CssTextField = styled(TextField)({
  '& .MuiInput-root': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: 'white'
    },
    "&.Mui-focused fieldset": {
      borderColor: 'white'
    }
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
});

export default function BasicTextFields() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [companyError, setCompanyError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    // Validate name
    if (name.trim() === '') {
      setNameError('Please enter your name');
      isValid = false;
    } else {
      setNameError('');
    }

    // Company name
    if (company.trim() === '') {
      setCompanyError('Please enter your company name');
      isValid = false;
    } else {
      setNameError('');
    }


    //  message
    if (company.trim() === '') {
      setMessageError('Please enter your message');
      isValid = false;
    } else {
      setMessageError('');
    }

    // Validate email
    if (email.trim() === '') {
      setEmailError('Please enter your email address');
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate phone number
    if (phone.trim() === '') {
      setPhoneError('Please enter your phone number');
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Please enter a valid 10-digit phone number');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (isValid) {
      // Perform form submission logic here
      console.log('Form submitted');
    }
  };

  return (
    <>
      <Box sx={{ width: ['100%'],padding:['1.1rem','0' ]}}>
        <Box
          component="form"
          sx={{
            '& .MuiOutlinedInput-root ': { color: 'white' },
            display: "flex", flexWrap: ['nowrap','wrap'], gap: "2rem",flexDirection:['column','row']
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <CssTextField
            sx={{ width: ['100%', '22rem', '20rem', '19rem', '22rem'], }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            error={nameError !== ''}
            helperText={nameError}
            required
          />
          <CssTextField
            sx={{ width: ['100%', '22rem', '20rem', '19rem', '22rem'], }}
            id="outlined-basic"
            label="Company"
            variant="outlined"
            value={company}
            onChange={handleCompanyChange}
            error={companyError !== ''}
            helperText={companyError}
            required
          />
          <CssTextField
            sx={{ width: ['100%', '22rem', '20rem', '19rem', '22rem'], }}
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            error={emailError !== ''}
            helperText={emailError}
            required
          />
          <CssTextField
            sx={{ width: ['100%', '22rem', '20rem', '19rem', '22rem'], }}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={phone}
            onChange={handlePhoneChange}
            error={phoneError !== ''}
            helperText={phoneError}
            required
          />
        </Box>

        <Box sx={{ padding: ['1rem', '1rem'] }}>
          <Typography sx={{ color: 'white' }}>What type of Services do you need?</Typography>
          <Checkbox />
        </Box>

        <Box
          component="form"
          sx={{
            '& .MuiOutlinedInput-root ': { color: "white" },
            display: 'flex', flexDirection: 'column', gap: ['2rem','2rem']
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <CssTextField
            sx={{ width: ['100%', '46rem', '42rem', '40rem', '46rem'], }}
            fullWidth
            label="Message"
            id="fullWidth"
            InputLabelProps={{ sx: { color: 'white' } }}
            variant="outlined"

            error={messageError !== ''}
            helperText={messageError}
            required
          />
          
          <Box sx={{ width: ['99%', '100%', '88%', '96%', '95%'], display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              sx={{
                width: '8rem',
                background: 'linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)',
                borderRadius: '24px',
                color: 'white',
                fontSize: '0.8rem',
                display: 'flex',
                gap: '0.5rem',
                textTransform: 'none',
              }}
            >
              Send Enquiry
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
