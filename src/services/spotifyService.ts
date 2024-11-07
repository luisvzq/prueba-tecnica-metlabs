import type { SpotifyPlaylist } from "../types/models";
import { getValidToken } from "./authService";

const SPOTIFY_BASE_URL = "https://api.spotify.com/v1";

class SpotifyError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
    this.name = "SpotifyError";
  }
}

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new SpotifyError(
      response.status,
      error.error?.message || "Error en la llamada a Spotify API"
    );
  }
  return response.json();
};

export const fetchPlaylist = async (
  playlistId: string
): Promise<SpotifyPlaylist> => {
  try {
    const token = await getValidToken();

    const response = await fetch(
      `${SPOTIFY_BASE_URL}/playlists/${playlistId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return handleResponse(response);
  } catch (error) {
    if (error instanceof SpotifyError) {
      throw error;
    }
    throw new Error(
      "Error al obtener la playlist: " + (error as Error).message
    );
  }
};
