import request from './index';


export async function getCaptcha(params?:any) {
    return await request.get("/api/v1/captcha");
}

export async function login(data?:any) {
    return await request.post("/api/v1/login",data);
}