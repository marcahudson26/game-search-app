import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Games>("/games")

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number
}
const useGames = (gameQuery: GameQuery) =>

    useQuery<FetchResponse<Games>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: () =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                }

            }),

        staleTime: 24 * 60 * 60 * 1000,//24hours


    })

export default useGames