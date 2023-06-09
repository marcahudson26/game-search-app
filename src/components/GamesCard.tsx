import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import { Games } from "../entities/Games";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image.url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Games;
}
const GamesCard = ({ game }: Props) => {
  return (
    <Link to={"/games/" + game.slug}>
      <Card>
        <Image
          src={getCroppedImageURL(game.background_image)}
          alt={game.name}
          objectFit="cover"
          minHeight="200px"
        />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            <Text>{game.name}</Text>
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GamesCard;
