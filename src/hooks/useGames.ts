import APIClient, { FetchResponse } from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms"
import useGameQueryStore from "../store";
import { Games } from "../entities/Games";

const apiClient = new APIClient<Games>("/games")

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)

    return useInfiniteQuery<FetchResponse<Games>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                }

            }),
        getNextPageParam: (lastpage, allpages) => {
            return lastpage.next ? allpages.length + 1 : undefined;
        },

        staleTime: ms("24h")


    })
}


export default useGames