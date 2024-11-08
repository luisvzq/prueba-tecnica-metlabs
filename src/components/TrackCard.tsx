import { useEffect, useState } from "react";
import { SpotifyTrack } from "../types/models";

interface TrackCardProps {
  track: SpotifyTrack;
}

const TrackCard = ({ track }: TrackCardProps) => {
  const [artistAvatar, setArtistAvatar] = useState("/avatar.png");

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        if (track.artists[0]?.id) {
          const response = await fetch(
            `https://api.spotify.com/v1/artists/${track.artists[0].id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem(
                  "spotify_token"
                )}`,
              },
            }
          );

          if (!response.ok) throw new Error("Failed to fetch artist details");

          const data = await response.json();
          if (data.images?.[0]?.url) {
            setArtistAvatar(data.images[0].url);
          }
        }
      } catch (error) {
        console.error("Error fetching artist avatar:", error);
        setArtistAvatar("/avatar.png");
      }
    };

    fetchArtistDetails();
  }, [track.artists[0]?.id]);

  return (
    <div className="bg-[#0A0D14] rounded-[20px] overflow-visible shadow-lg transition-all mb-8 relative group cursor-pointer">
      <div className="relative">
        <img
          src={track.album.images[0]?.url}
          alt={`${track.name} cover`}
          className="w-full aspect-square object-cover rounded-t-[20px]"
        />
      </div>
      <div className="p-4 h-[110px] bg-[#211626] rounded-b-[20px]">
        <h3 className="text-white font-semibold text-base font-raleway">
          {track.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <img
            src={artistAvatar}
            alt={`${track.artists[0]?.name} avatar`}
            className="w-6 h-6 rounded-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/avatar.png";
            }}
          />
          <p className="text-gray-400 text-sm font-raleway">
            @{track.artists[0]?.name.toLowerCase().replace(/\s/g, "")}
          </p>
        </div>
        <div
          className="w-[206px] h-[41px] flex justify-between items-center px-8 py-2 bg-[#322638] absolute left-1/2 -translate-x-1/2 -bottom-5 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ borderRadius: "14px" }}
        >
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-200"
            >
              <path
                d="M1.67993 5.04004V11.13C2.03882 11.2497 2.39666 11.4379 2.71691 11.655C3.48005 10.7472 4.48196 10.29 5.45993 10.29C5.6312 10.2907 5.79823 10.3434 5.93894 10.441L10.1389 13.381C10.4262 13.5801 10.5648 13.9707 10.4672 14.3063C10.3143 14.8229 10.0409 15.3311 9.65993 15.737C9.94889 15.8605 10.2507 15.96 10.4999 15.96C10.9829 15.96 11.5961 15.7841 11.9699 15.54L15.4744 13.0856L12.3437 9.60754C11.6432 10.2367 10.6679 10.92 9.44993 10.92C8.88608 10.92 8.38103 10.6517 8.03243 10.3228C7.68383 9.99415 7.44695 9.61048 7.23842 9.21379C7.06895 8.89879 7.13048 8.47627 7.38269 8.2228C7.38269 8.2228 9.93587 5.6839 9.94868 5.67004C9.56228 5.39578 9.06941 5.25004 8.60993 5.25004C7.03073 5.25004 5.92823 5.74984 3.98993 6.30004L1.67993 5.04004ZM19.3199 5.04004L17.0099 6.30004C15.5305 5.86702 13.9805 5.25235 12.5999 5.25004C11.8307 5.25004 11.1709 5.54467 10.4999 6.30004L7.97993 8.82004C8.35037 9.52438 8.8046 10.08 9.44993 10.08C10.573 10.08 11.7599 9.03004 12.3899 8.40004L16.1699 12.6C17.1078 11.9314 18.275 11.5967 19.3199 11.13V5.04004ZM5.45993 11.13C4.53215 11.13 3.61235 11.6078 2.93993 12.81L6.50993 15.33C6.94064 15.6341 7.22288 15.75 7.76993 15.75C8.65739 15.75 9.40058 14.9457 9.65993 14.07L5.45993 11.13Z"
                className="fill-white hover:fill-[#211626] transition-colors duration-200"
              />
            </svg>
          </button>
          <button className="text-gray-400 transition-colors group/cart">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-200"
            >
              <path
                d="M16.945 4.12502C16.7938 3.86307 16.5773 3.64477 16.3166 3.49141C16.0559 3.33806 15.7599 3.25489 15.4575 3.25002H4.2575L3.75 1.27252C3.69872 1.08163 3.58433 0.913726 3.42544 0.79615C3.26656 0.678575 3.07254 0.618258 2.875 0.625025H1.125C0.892936 0.625025 0.670376 0.717212 0.506281 0.881306C0.342187 1.0454 0.25 1.26796 0.25 1.50002C0.25 1.73209 0.342187 1.95465 0.506281 2.11874C0.670376 2.28284 0.892936 2.37502 1.125 2.37502H2.21L4.625 11.3525C4.67627 11.5434 4.79067 11.7113 4.94956 11.8289C5.10844 11.9465 5.30246 12.0068 5.5 12H13.375C13.5366 11.9995 13.6949 11.9543 13.8323 11.8694C13.9698 11.7844 14.081 11.6631 14.1537 11.5188L17.0237 5.77878C17.1481 5.51804 17.2061 5.23056 17.1923 4.942C17.1786 4.65343 17.0936 4.37276 16.945 4.12502Z"
                className="fill-white group-hover/cart:fill-[#211626] transition-colors duration-200"
              />
              <path
                d="M5.0625 16.375C5.78737 16.375 6.375 15.7874 6.375 15.0625C6.375 14.3376 5.78737 13.75 5.0625 13.75C4.33763 13.75 3.75 14.3376 3.75 15.0625C3.75 15.7874 4.33763 16.375 5.0625 16.375Z"
                className="fill-white group-hover/cart:fill-[#211626] transition-colors duration-200"
              />
              <path
                d="M13.8125 16.375C14.5374 16.375 15.125 15.7874 15.125 15.0625C15.125 14.3376 14.5374 13.75 13.8125 13.75C13.0876 13.75 12.5 14.3376 12.5 15.0625C12.5 15.7874 13.0876 16.375 13.8125 16.375Z"
                className="fill-white group-hover/cart:fill-[#211626] transition-colors duration-200"
              />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-200"
            >
              <path
                d="M10.4999 18.3751C10.3848 18.3757 10.2706 18.3537 10.164 18.3101C10.0574 18.2666 9.96046 18.2024 9.8787 18.1213L3.07995 11.3138C2.22714 10.4521 1.74878 9.2887 1.74878 8.07633C1.74878 6.86395 2.22714 5.70055 3.07995 4.83883C3.93943 3.98177 5.10368 3.50049 6.31745 3.50049C7.53122 3.50049 8.69547 3.98177 9.55495 4.83883L10.4999 5.78383L11.4449 4.83883C12.3044 3.98177 13.4687 3.50049 14.6824 3.50049C15.8962 3.50049 17.0605 3.98177 17.9199 4.83883C18.7728 5.70055 19.2511 6.86395 19.2511 8.07633C19.2511 9.2887 18.7728 10.4521 17.9199 11.3138L11.1212 18.1213C11.0394 18.2024 10.9425 18.2666 10.8359 18.3101C10.7293 18.3537 10.6151 18.3757 10.4999 18.3751Z"
                className="fill-white hover:fill-[#211626] transition-colors duration-200"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
