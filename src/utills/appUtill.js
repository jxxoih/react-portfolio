import axios from 'axios';
import * as config from "config";

// node 서버 통신 API 모듈
export const reqAPI = async (action) => {
    const reqPath = config.API_PATH;

    const data = {
        params: {
            p_id: 1,
            action: action
        }
    }

    return await axios.post(reqPath, null, data)
        .then((res) => res.data.data)
        .catch((err) => { console.log("err", err) })
}

export const resolveData = (action) => {
    return new Promise((resolve, reject) => {
        const data = reqAPI(action);
        resolve(data);
        reject([])
    })
}