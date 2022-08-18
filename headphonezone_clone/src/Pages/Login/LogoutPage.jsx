import React, { useState } from 'react';
import {CgFacebook } from 'react-icons/cg';
import {FcGoogle } from 'react-icons/fc';
import {TbBrandTwitter } from 'react-icons/tb';
import { Link ,useNavigate} from 'react-router-dom';
import './Login.css'
import {
    FormControl,
    FormLabel,
    Input,
    Container,
    Button,
    Box
  } 
from '@chakra-ui/react';

const LogoutPage = () => {
  const navigate = useNavigate();
    const [input, setInput] = useState('')
    const handleInputChange = (e) =>{
      const {name, value} = e.target
      setInput({
        ...input,
        [name]:value,
      })
    } 

    const handleSubmit = () => {
     fetch("http://localhost:1212/posts", {
       method:"POST",
       headers: {
         "content-type":"application/json"
       },
       body:JSON.stringify(input),
     })
     .then((res) => res.json())
     .then((d) => {
       console.log(d);
       alert("Succsess Login")
       navigate("/")
     })
    }
    const isError = input === ''
  return (
    <div className="Login_main">
        <div>
           <div>
               <div className="Login_text">REGISTER</div> 
               <div className="social_media_icons_button">
                   
                    <Link to="www.facebook.com">
                  <div className="icons">
                        <div className="facebook_icons"><CgFacebook /></div>
                        <div>Facebook</div>
                  </div>
                    </Link>
                  <div>
                  <div className="icons">
                        <div className="facebook_icons"><FcGoogle /></div>
                        <div>Facebook</div>
                  </div> 
                </div>
                  
                  <div>
                  <div className="icons">
                        <div className="facebook_icons"><TbBrandTwitter /></div>
                        <div>Facebook</div>
                  </div>
                  </div>
                  
               </div>
               <div className="sliding_name_login">
                   <p>---------------</p>
                   <p style={{marginLeft:"8px"}}>LOGIN WITH SOCIAL OR</p>
                   <p style={{marginLeft:"8px"}}>---------------</p>
               </div>
               <Container>
                <FormControl mt="4rem">
                        <Input
                            type='text'
                            mt="1rem"
                            name="f_name"
                            onChange={handleInputChange}
                            placeholder="First name"
                            borderRadius="1rem"
                            
                        />
                        <Input
                            type='text'
                            mt="1rem"
                            name="l_name"
                            onChange={handleInputChange}
                            placeholder="Last name"
                            borderRadius="1rem"
                        />
                        <Input
                            type='email'
                            mt="1rem"
                            name="email"
                            onChange={handleInputChange}
                            placeholder="E-mail"
                            borderRadius="1rem"
                        />
                        <Input
                            type='paassowrd'
                            mt="1rem"
                            name="password"
                            onChange={handleInputChange}
                            placeholder="Password"
                            borderRadius="1rem"
                        /> 
                    </FormControl>  
                    <Button mt="2rem" w="100%" mb="1rem" bg="blue.500" color="white"
                    borderRadius="1rem" onClick={handleSubmit}>
                        CREATE ACCOUNT
                    </Button>

               </Container>
           </div> 
                    <div className="custmore_div">Already have an account ? <Link to="/login">Login</Link></div>
        </div>
    </div>
  )
}

export default LogoutPage