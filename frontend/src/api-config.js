let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
    backendHost = "http://3.34.181.27";
}

export const API_BASE_URL = `${backendHost}`;
