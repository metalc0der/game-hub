import usePlatforms, { Platform } from "@/hooks/usePlatforms"
import { Button, Menu, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
    onSelectPlatform: (platform: Platform) => void,
    selectedPlatformId?: number
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data, error } = usePlatforms();
    const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId);

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