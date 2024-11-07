import { useSpotifyPlaylist } from "../hooks/useSpotifyPlaylist";
import TrackCard from "./TrackCard";

interface PlaylistViewProps {
  playlistId: string;
}

const PlaylistView = ({ playlistId }: PlaylistViewProps) => {
  const {
    data: playlist,
    isLoading,
    isError,
    error,
    isFetching,
  } = useSpotifyPlaylist(playlistId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-white">Cargando playlist...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-4 bg-red-500 text-white rounded-lg">
          {error instanceof Error && "status" in error ? (
            <>
              <h2 className="font-bold mb-2">Error {(error as any).status}</h2>
              <p>{error.message}</p>
            </>
          ) : (
            <p>{error?.message || "Error al cargar la playlist"}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 relative">
      {isFetching && (
        <div className="absolute top-4 right-4">
          <div className="text-green-500">Actualizando...</div>
        </div>
      )}

      {playlist && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {playlist.tracks.items.map(({ track }) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistView;
