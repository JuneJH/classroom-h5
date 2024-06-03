import { getSwiper } from "@/services/swiper";
import { FC, useEffect, useState } from "react";
import { Button, Space, Swiper, Image } from "antd-mobile";
import style from "./index.less";
import { history } from "umi";
const Index: FC = () => {
  history.replace("/note");
  const [urls, seturls] = useState([]);
  useEffect(() => {
    getSwiper().then((res) => {
      if (res.data.code == "10200") {
        seturls(res.data.data);
      }
    });

    return () => {};
  }, []);

  return (
    <div>
      <div className={style.swiperContainer}>
        <Swiper>
          {urls.map((item: any, index) => {
            return (
              <Swiper.Item key={index} className={style.img}>
                <Image className={style.img} src={`/api/v1/${item.url}`} />
              </Swiper.Item>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Index;
