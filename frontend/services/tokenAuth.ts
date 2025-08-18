const ACCESS_TOKEN_KEY = "accessToken"
const REFRESH_TOKEN_KEY = "refreshToken"

const storeAccessToken = (token: string): void => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

const storeRefreshToken = (token: string): void => {
    localStorage.setItem(REFRESH_TOKEN_KEY, token)
}

const getAccessToken = (): string => {
    return localStorage.getItem(ACCESS_TOKEN_KEY) ?? "";
}

const getRefreshToken = (): string => {
    return localStorage.getItem(REFRESH_TOKEN_KEY) ?? "";
}

const clearAcessRefreshTokens = (): void => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
};

export {
    storeAccessToken,
    storeRefreshToken,
    getAccessToken,
    getRefreshToken,
    clearAcessRefreshTokens
};