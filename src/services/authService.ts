interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

class AuthError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
    this.name = "AuthError";
  }
}

const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/api/token";

export const getSpotifyToken = async (): Promise<string> => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Client ID y Client Secret son requeridos");
  }

  try {
    const authHeader = btoa(`${clientId}:${clientSecret}`);

    const response = await fetch(SPOTIFY_AUTH_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${authHeader}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    });

    if (!response.ok) {
      throw new AuthError(
        response.status,
        `Error de autenticación: ${response.statusText}`
      );
    }

    const data: TokenResponse = await response.json();

    localStorage.setItem("spotify_token", data.access_token);
    localStorage.setItem(
      "spotify_token_expiration",
      (Date.now() + data.expires_in * 1000).toString()
    );

    return data.access_token;
  } catch (error) {
    console.error("Error obteniendo token:", error);
    throw error;
  }
};

export const getValidToken = async (): Promise<string> => {
  const token = localStorage.getItem("spotify_token");
  const expiration = localStorage.getItem("spotify_token_expiration");

  if (!token || !expiration || Date.now() > Number(expiration)) {
    return getSpotifyToken();
  }

  return token;
};
