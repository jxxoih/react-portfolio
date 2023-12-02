import axios from 'axios';
import { API_POST_PATH, API_GET_PATH, P_IDX } from "config";

// node 서버 통신 API 모듈

export const reqPOST = async (action, arg) => {
    const data = {
        p_idx: P_IDX,
        action: action,
        arg: arg,
    }

    return await axios.post(API_POST_PATH, data)
        .then((res) => res.data.data)
        .catch((err) => console.log("err", err))
}

export const reqGET = async (action) => {
    const data = {
        params: {
            p_idx: P_IDX,
            action: action,
        }
    }

    return await axios.get(API_GET_PATH, data)
        .then((res) => res.data.data)
        .catch((err) => console.log("err", err))
}

export const resolvePostData = (action, arg) => {
    return new Promise((resolve, reject) => {
        const data = reqPOST(action, arg);
        resolve(data);
        reject([])
    })
}

export const resolveGetData = (action) => {
    return new Promise((resolve, reject) => {
        const data = reqGET(action);
        resolve(data);
        reject([])
    })
}