import usePlatform from "@/hooks/usePlatform"
import usePlatforms from "@/hooks/usePlatforms"
import useGameQueryStore from "@/store"
import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const setSelectedPlatform = useGameQueryStore(s => s.setPlatformId)
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

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
          {data?.results.map(platform => <MenuItem key={platform.id} value="platform.id" onClick={() => setSelectedPlatform(platform.id)}>{platform.name}</MenuItem>)}
        </MenuContent>
      </MenuRoot>
    </div>
  )
}

export default PlatformSelector