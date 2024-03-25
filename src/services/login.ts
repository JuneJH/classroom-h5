import request from './index';


export async function getCaptcha(params?:any) {
    return await request.get("/api/v1/captcha");
}