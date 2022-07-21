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

const LogoutPage = () => {
    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
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
                            value={input}
                            onChange={handleInputChange}
                            placeholder="First name"
                            borderRadius="1rem"
                            
                        />
                        <Input
                            type='text'
                            mt="1rem"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Last name"
                            borderRadius="1rem"
                        />
                        <Input
                            type='email'
                            mt="1rem"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="E-mail"
                            borderRadius="1rem"
                        />
                        <Input
                            type='paassowrd'
                            mt="1rem"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Password"
                            borderRadius="1rem"
                        /> 
                    </FormControl>  
                    <Button mt="2rem" w="100%" mb="1rem" bg="blue.500" color="white"
                    borderRadius="1rem">
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