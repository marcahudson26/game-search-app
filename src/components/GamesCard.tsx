import React from "react";
import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";

interface Props {
  game: Games;
}
const GamesCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GamesCard;
