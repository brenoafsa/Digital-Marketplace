const ACCESS_TOKEN_KEY = "accessToken"
const REFRESH_TOKEN_KEY = "refreshToken"

const setCookie = (name: string, value: string) => {
    const expires = new Date(Date.now() + 15 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

const getCookie = (name: string): string => {
    return document.cookie.split('; ').reduce((each, index) => {
        const parts = index.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : each
    }, "");
};

const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

const storeAccessToken = (token: string): void => {
    setCookie(ACCESS_TOKEN_KEY, token);
};

const storeRefreshToken = (token: string): void => {
    setCookie(REFRESH_TOKEN_KEY, token);
};

const getAccessToken = (): string => {
    return getCookie(ACCESS_TOKEN_KEY);
};

const getRefreshToken = (): string => {
    return getCookie(REFRESH_TOKEN_KEY);
};

const clearAcessRefreshTokens = (): void => {
    deleteCookie(ACCESS_TOKEN_KEY);
    deleteCookie(REFRESH_TOKEN_KEY);
};

export {
    storeAccessToken,
    storeRefreshToken,
    getAccessToken,
    getRefreshToken,
    clearAcessRefreshTokens
};