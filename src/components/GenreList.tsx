import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Heading, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
    const { data, loading, error } = useGenres();
    if (error) return null;
    if (loading) return <Spinner />
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List.Root variant='plain'>
          {data.map(genre => (
              <List.Item key={genre.id} paddingY='5px'>
                <HStack>
                  <Image objectFit='cover' src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize="32px" borderRadius={8} />
                  <Button whiteSpace='normal' textAlign='left' fontSize='lg' variant='plain' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                </HStack>
              </List.Item>
          ))}
      </List.Root>
    </>
  )
}

export default GenreList