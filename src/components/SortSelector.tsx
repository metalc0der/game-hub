import useGameQueryStore from "@/store";
import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const SortSelector = () => {
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameQueryStore(s => s.setSortOrder);
  const sortOrders = [
    {value: '', label: 'Relevance'},
    {value: '-added', label: 'Date added'},
    {value: 'name', label: 'Name'},
    {value: '-released', label: 'Release date'},
    {value: '-metacritic', label: 'Popularity'},
    {value: '-rating', label: 'Average rating'}
  ]

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
    <div>
        <MenuRoot>
        <MenuTrigger asChild>
            <Button variant="outline">
            Order by: { currentSortOrder?.label || 'Relevance'} <BsChevronDown />
            </Button>
        </MenuTrigger>
        <MenuContent>
            {sortOrders.map(order => <MenuItem onClick={() => setSelectedSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
        </MenuContent>
        </MenuRoot>
    </div>
  )
}

export default SortSelector