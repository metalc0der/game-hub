import useGenres from "@/hooks/usGenres";

const GenreList = () => {
    const { genres } = useGenres();
  return (
    <ul>
        {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
        ))}
    </ul>
  )
}

export default GenreList