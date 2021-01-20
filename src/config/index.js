// const config:any = JSON.parse((process as any).env.npm_config_argv).original.slice(1);
// http://59.110.68.181:8086/
// http://192.168.199.100:7099/
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