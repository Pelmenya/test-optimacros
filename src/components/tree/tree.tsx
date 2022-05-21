import { treePagePadding } from "../../utils/constants";
import { Row } from "../row/row";

export const Tree = ({ treeData, parentId = -1, level = 0 }: any) => {
  const items = treeData
    .filter((item: any) => item.parentId === parentId)
    //console.log(items)
  if (!items.length) return null;
  return (
    <>
      {items.map((item:any) => (
        <Row key={item.id} item={item} level={level}>
          <Tree treeData={treeData} parentId={item.id} level={level + treePagePadding} />
        </Row>
      ))}
    </>
  );
}