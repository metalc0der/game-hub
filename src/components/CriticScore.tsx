import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 50 ? 'yellow' : 'red';
  return (
    <Badge fontSize='16px' paddingX={3} borderRadius='4px' colorPalette={color}>{score}</Badge>
  )
}

export default CriticScore