const config = {
    development: {
        API_URL: `${window.location.origin}/fmsApiTest`,
        LOCAL_URL: '/',
        STATICIMG_URL: `${window.location.origin}/fmsApiMaster/tv/images/`
    },

    production: {
        API_URL: window.location.origin,
        LOCAL_URL: '/tv/',
        STATICIMG_URL: window.location.origin + '/tv/images/'
    }
}

export default config.env.NODE_ENV