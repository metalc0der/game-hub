import usePlatforms, { Platform } from "@/hooks/usePlatforms"
import { Button, Menu, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
    onSelectPlatform: (platform: Platform) => void,
    selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();

    if (error) return null;

  return (
    <div>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline">
            {selectedPlatform ? selectedPlatform.name : 'Platforms'} <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent width='25%'>
          {data?.results.map(platform => <MenuItem key={platform.id} value="platform.id" onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
        </MenuContent>
      </MenuRoot>
    </div>
  )
}

export default PlatformSelector