import genre from "../data/genre";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
    id: number,
    name: string
    image_background: string
}

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () =>
        apiClient
            .get<FetchResponse<Genre>>("/genres")
            .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,//24hours
    initialData: { count: genre.length, results: genre }

})


export default useGenres