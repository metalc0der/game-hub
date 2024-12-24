import useGenres from "@/hooks/usGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
    const { data, loading, error } = useGenres();
    if (error) return null;
    if (loading) return <Spinner />
  return (
    <List.Root variant='plain'>
        {data.map(genre => (
            <List.Item key={genre.id} paddingY='5px'>
              <HStack>
                <Image src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize="32px" borderRadius={8} />
                <Text fontSize='lg'>{genre.name}</Text>
              </HStack>
            </List.Item>
        ))}
    </List.Root>
  )
}

export default GenreList