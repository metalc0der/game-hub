import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
    
    const { games, error, loading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
        { error && <Text>{error}</Text> }
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap="10px" padding='10px'>
            {loading && skeletons.map((skeleton) => (
                <GameCardContainer>
                    <GameCardSkeleton key={skeleton}/>
                </GameCardContainer>
            ))}
            {games.map(game => (
                <GameCardContainer>
                    <GameCard game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid