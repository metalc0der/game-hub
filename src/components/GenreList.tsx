import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
import { Button, Heading, HStack, Image, List, Spinner } from "@chakra-ui/react";

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

    if (error) return null;
    if (isLoading) return <Spinner />
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List.Root variant='plain'>
          {data?.results.map(genre => (
              <List.Item key={genre.id} paddingY='5px'>
                <HStack>
                  <Image objectFit='cover' src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize="32px" borderRadius={8} />
                  <Button whiteSpace='normal' textAlign='left' fontSize='lg' variant='plain' onClick={() => setSelectedGenreId(genre.id)}>{genre.name}</Button>
                </HStack>
              </List.Item>
          ))}
      </List.Root>
    </>
  )
}

export default GenreList