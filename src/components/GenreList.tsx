import useGenres, { Genre } from "@/hooks/usGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
    const { data, loading, error } = useGenres();
    if (error) return null;
    if (loading) return <Spinner />
  return (
    <List.Root variant='plain'>
        {data.map(genre => (
            <List.Item key={genre.id} paddingY='5px'>
              <HStack>
                <Image src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize="32px" borderRadius={8} />
                <Button fontSize='lg' variant='plain' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
              </HStack>
            </List.Item>
        ))}
    </List.Root>
  )
}

export default GenreList