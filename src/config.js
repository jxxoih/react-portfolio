export const IMG_PATH = process.env.PUBLIC_URL + "/img/";

const USE_LOCATION = window.location.href;

export const API_PATH = USE_LOCATION.indexOf("localhost") < 0 ? "https://port-0-node-learning-12fhqa2llo7zh36o.sel5.cloudtype.app" : "http://localhost:3333";

export const MOBILE_PX = 768;