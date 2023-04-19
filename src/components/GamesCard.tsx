import React from "react";
import { Card, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";

interface Props {
  game: Games;
}
const GamesCard = ({ game }: Props) => {
  return (
    <Card>
      <Image></Image>
    </Card>
  );
};

export default GamesCard;
