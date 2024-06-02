import { getNoteById } from "@/services/note";
import { Space } from "antd-mobile";
import { useEffect, useState } from "react";
import { useParams } from "umi";
import style from './index.less';

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

  const render = () => {
    return dataList.map((item: any, index) => {
    
      return (
        <div key={item.id} className={style.itemContainer}>
          <h3 className={style.itemTitle}>{index + 1}.{item.title}</h3>
          <div className={style.itemVideo}>
            <video controls  src={item.url}></video>
          </div>
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
