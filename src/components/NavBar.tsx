import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'

const NavBar = () => {
  return (
    <HStack>
        <Image src={ logo } alt="logo" boxSize="60px"/>
        <Text>Navegation Bar</Text>
    </HStack>
  )
}

export default NavBar