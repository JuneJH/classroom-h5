import request from './index';


export async function getSwiper() {
    return await request.get("/api/v1/swiper/current")
}