import { Row } from "../row/row";

export const Tree = ({ treeData, parent = -1, level = 0 }: any) => {
  const items = treeData
    .filter((item: any) => item.parent === parent)
    //console.log(items)
  if (!items.length) return null;
  return (
    <>
      {items.map((item:any) => (
        <Row key={item.id} item={item} level={level}>
          <Tree treeData={treeData} parent={item.id} level={level + 5} />
        </Row>
      ))}
    </>
  );
}