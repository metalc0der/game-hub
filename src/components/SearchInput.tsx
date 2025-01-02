import { Input } from '@chakra-ui/react'
import { InputGroup } from './ui/input-group'
import { LuSearch } from 'react-icons/lu'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<BsSearch />}>
        <Input placeholder="Search games..." borderRadius={20} />
    </InputGroup>
  )
}

export default SearchInput