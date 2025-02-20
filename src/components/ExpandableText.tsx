import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    children: string;
}

const ExpandableText = ({ children }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if (!children) return null;

    const summary = expanded ? children : children.substring(0, limit) + '... ';

  return (
    <Text>{summary} <Button marginLeft={1} size='xs' fontWeight='bold' colorScheme='yellow' onClick={() => setExpanded(!expanded)}>{expanded ? 'Show Less' : 'Show More'}</Button></Text>
  )
}

export default ExpandableText