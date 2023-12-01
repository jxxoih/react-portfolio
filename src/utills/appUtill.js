import axios from 'axios';
import { API_PATH, P_IDX } from "config";

// node 서버 통신 API 모듈
export const reqAPI = async (action, arg) => {
    const reqPath = API_PATH;

    const data = {
        p_idx: P_IDX,
        action: action,
        arg: arg,
    }

    return await axios.post(reqPath, data)
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