import React, { useState } from 'react';
import {CgFacebook } from 'react-icons/cg';
import {FcGoogle } from 'react-icons/fc';
import {TbBrandTwitter } from 'react-icons/tb';
import { Link } from 'react-router-dom';
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

const LoginPage = () => {
    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''
  return (
    <div className="Login_main">
        <div>
           <div>
               <div className="Login_text">LOGIN</div> 
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
                        <FormLabel mt="0.5rem">Email</FormLabel>
                        <Input
                            type='email'
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            borderRadius="1rem"
                            
                        />
                        <FormLabel mt="0.4rem">Password</FormLabel>
                        <Input
                            type='email'
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Enter you password"
                            borderRadius="1rem"
                        />   
                    </FormControl>  
                    <Button mt="2rem" w="100%" mb="1rem" bg="blue.500" color="white"
                    borderRadius="1rem">
                        LOGIN
                    </Button>

               </Container>
           </div> 
                    <div className="custmore_div">New customer ? <Link to="/logout"> Create an account </Link></div>
        </div>
    </div>
  )
}

export default LoginPage