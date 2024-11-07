import { useSpotifyPlaylist } from "../hooks/useSpotifyPlaylist";
import TrackCard from "./TrackCard";

const PlaylistView = () => {
  // ID de la playlist que queramos mostrar
  const playlistId = "37i9dQZF1DZ06evO1m0d2h?si=ef532f8137884e92";

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
        <>
          <div className="flex items-center gap-6 mb-8">
            {playlist.images[0] && (
              <img
                src={playlist.images[0].url}
                alt={playlist.name}
                className="w-48 h-48 shadow-lg rounded-lg"
              />
            )}
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {playlist.name}
              </h1>
              <p className="text-gray-400">{playlist.tracks.total} canciones</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {playlist.tracks.items.map(({ track }) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PlaylistView;
