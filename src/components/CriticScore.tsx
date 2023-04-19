import { Badge, HStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  if (!score) {
    return null;
  }
  return (
    <>
      <HStack>
        <Text>Rating</Text>
        <Badge
          colorScheme={color}
          fontSize="15px"
          paddingX="5px"
          borderRadius="5px"
        >
          {score}
        </Badge>
      </HStack>
    </>
  );
};

export default CriticScore;
