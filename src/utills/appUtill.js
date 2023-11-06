import axios from 'axios';
import * as config from "config";

// node 서버 통신 API 모듈
export const reqAPI = async (action, arg) => {
    const reqPath = config.API_PATH;

    const data = {
        params: {
            p_id: 1,
            action: action,
            arg: arg,
        }
    }

    return await axios.post(reqPath, null, data)
        .then((res) => res.data.data)
        .catch((err) => { console.log("err", err) })
}

export const resolveData = (action, arg) => {
    return new Promise((resolve, reject) => {
        const data = reqAPI(action, arg);
        resolve(data);
        reject([])
    })
}