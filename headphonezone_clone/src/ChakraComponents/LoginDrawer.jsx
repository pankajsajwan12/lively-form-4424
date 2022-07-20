import { useDisclosure,
         Button,
         Drawer,
         DrawerOverlay,
         DrawerContent,
         DrawerCloseButton,
         DrawerBody,
         DrawerHeader,
         Input,
         DrawerFooter,

        }
from '@chakra-ui/react'
import React from 'react'
export function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} bg="none" _hover="none" onClick={onOpen}>
          Cart <div style={{borderRadius:'45%', backgroundColor:'black' ,width:'20px',color:'white',padding:'3px',marginLeft:'2px',fontSize:'12px'}}>10</div>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Cart Item</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>CHECKOUT</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }