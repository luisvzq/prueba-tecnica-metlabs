import { useQuery } from "@tanstack/react-query";
import { fetchPlaylist } from "../services/spotifyService";
import type { SpotifyPlaylist } from "../types/models";

interface SpotifyError extends Error {
  status: number;
  message: string;
}

export function useSpotifyPlaylist(playlistId: string) {
  return useQuery<SpotifyPlaylist, Error>({
    queryKey: ["playlist", playlistId],
    queryFn: () => fetchPlaylist(playlistId),
    retry: (failureCount, error) => {
      if (
        error instanceof Error &&
        "status" in error &&
        ([401, 404] as number[]).includes((error as SpotifyError).status)
      ) {
        return false;
      }
      return failureCount < 3;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
