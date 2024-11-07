import { SpotifyTrack } from "../types/models";

interface TrackCardProps {
  track: SpotifyTrack;
}

const TrackCard = ({ track }: TrackCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:bg-gray-700 transition-all">
      <div className="aspect-square relative">
        <img
          src={track.album.images[0]?.url}
          alt={`${track.name} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:scale-105 transition-transform">
            <svg
              className="w-6 h-6 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold truncate">{track.name}</h3>
        <p className="text-gray-400 text-sm mt-1 truncate">
          {track.artists.map((artist) => artist.name).join(", ")}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <button
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Add to favorites"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="More options"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
