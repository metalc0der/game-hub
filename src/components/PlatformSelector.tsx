import usePlatforms from "@/hooks/usePlatforms"
import { Button, Menu, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const PlatformSelector = () => {
    const { data, error } = usePlatforms();

    if (error) return null;
    
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline">
          Platforms <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent width='25%'>
        {data.map(platform => <MenuItem key={platform.id} value="platform.id">{platform.name}</MenuItem>)}
      </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector