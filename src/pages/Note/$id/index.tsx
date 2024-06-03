import { getNoteById } from "@/services/note";
import { Space, Image } from "antd-mobile";
import { useEffect, useState } from "react";
import { useParams } from "umi";
import style from "./index.less";
enum Type {
  Video = "video",
  Text = "text",
  Audio = "audio",
  Image = "image",
}
const NoteItem = () => {
  const { id } = useParams();
  const [dataList, setDataList] = useState([]);
  const getNoteByIdHandel = async () => {
    const res = await getNoteById(id as string);
    if (res.data.code === "10200") {
      setDataList(res.data.data);
    }
  };

  useEffect(() => {
    getNoteByIdHandel();

    return () => {};
  }, []);

  const renderSwitch = (type: Type, item: any) => {
    switch (type) {
      case Type.Audio:
        return (
          <audio className={style.itemAudio} controls src={item.url}></audio>
        );
      case Type.Video:
        return (
          <video className={style.itemVideo} controls src={item.url}></video>
        );
      case Type.Text:
        return <p className={style.itemText}>{item.desc}</p>;
      case Type.Image:
        return <Image className={style.itemText} src={item.url}></Image>;
      default:
        break;
    }
  };

  const render = () => {
    return dataList
      .sort((a: any, b: any) => a.order - b.order)
      .map((item: any, index) => {
        return (
          <div key={item.id} className={style.itemContainer}>
            <h3 className={style.itemTitle}>
              <span style={{ marginRight: 5 }}>{index + 1}.</span>
              {item.title}
            </h3>
            <div>{renderSwitch(item.type, item)}</div>
          </div>
        );
      });
  };

  return (
    <div className={style.container}>
      <Space direction="vertical">{render()}</Space>
    </div>
  );
};

export default NoteItem;
