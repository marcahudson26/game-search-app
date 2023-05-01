import useTrailers from "../hooks/useTrailers";
import React from "react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results?.[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
