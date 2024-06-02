import { getNote } from "@/services/note";
import { List } from "antd-mobile";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "umi";

const Note: FC = () => {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  const getNoteHandle = async () => {
    const res = await getNote();
    if (res.data.code === "10200") {
      setDataList(res.data.data);
    }
  };

  useEffect(() => {
    getNoteHandle();

    return () => {};
  }, []);

  const renderList = () => {
    return dataList.map((item: any) => {
      return (
        <List.Item key={item.id} onClick={() => {navigate(`/note/${item.id}`)}}>
          {item.title}
        </List.Item>
      );
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <List header="笔记列表">{renderList()}</List>
    </div>
  );
};

export default Note;
