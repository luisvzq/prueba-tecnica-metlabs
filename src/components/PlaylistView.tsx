import { useSpotifyPlaylist } from "../hooks/useSpotifyPlaylist";
import type { PlaylistViewProps, SpotifyError } from "../types/models";
import TrackCard from "./TrackCard";

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
      <div className="flex justify-center my-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5em"
          height="5em"
          viewBox="0 0 24 24"
        >
          <rect width="2.8" height="12" x="1" y="6" fill="#FFFFFF">
            <animate
              attributeName="y"
              begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              values="12;22;12"
            />
          </rect>
          <rect width="2.8" height="12" x="5.8" y="6" fill="#FFFFFF">
            <animate
              attributeName="y"
              begin="svgSpinnersBarsScaleMiddle0.begin+0.2s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="svgSpinnersBarsScaleMiddle0.begin+0.2s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              values="12;22;12"
            />
          </rect>
          <rect width="2.8" height="12" x="10.6" y="6" fill="#FFFFFF">
            <animate
              id="svgSpinnersBarsScaleMiddle0"
              attributeName="y"
              begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              values="12;22;12"
            />
          </rect>
          <rect width="2.8" height="12" x="15.4" y="6" fill="#FFFFFF">
            <animate
              attributeName="y"
              begin="svgSpinnersBarsScaleMiddle0.begin+0.2s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="svgSpinnersBarsScaleMiddle0.begin+0.2s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              values="12;22;12"
            />
          </rect>
          <rect width="2.8" height="12" x="20.2" y="6" fill="#FFFFFF">
            <animate
              id="svgSpinnersBarsScaleMiddle1"
              attributeName="y"
              begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".14,.73,.34,1;.65,.26,.82,.45"
              values="12;22;12"
            />
          </rect>
        </svg>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-4 bg-red-500 text-white rounded-lg">
          {error instanceof Error && "status" in error ? (
            <>
              <h2 className="font-bold mb-2">
                Error {(error as SpotifyError).status}
              </h2>
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
    <div className="relative">
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
