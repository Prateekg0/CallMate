let IS_PROD = true;
const server = IS_PROD ?
    "url" :

    "http://localhost:3000"


export default server;