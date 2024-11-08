// Services

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyArtist {
  id: string;
  name: string;
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  images: SpotifyImage[];
}

export interface SpotifyTrack {
  id: string;
  name: string;
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
}

export interface SpotifyPlaylistTrack {
  track: SpotifyTrack;
}

export interface SpotifyPlaylist {
  id: string;
  name: string;
  images: SpotifyImage[];
  tracks: {
    total: number;
    items: SpotifyPlaylistTrack[];
  };
}

// Components

// Navbar.tsx
export interface NavbarProps {
  currentUser?: {
    name: string;
    avatar: string;
  };
}

// PlaylistView.tsx
export interface PlaylistViewProps {
  playlistId: string;
}

export interface SpotifyError extends Error {
  status: number;
  message: string;
}

// TabNavigation.tsx
export interface TabNavigationProps {
  onTabChange?: (tab: string) => void;
}

// TrackCard.tsx
export interface TrackCardProps {
  track: SpotifyTrack;
}
