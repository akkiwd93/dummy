import React from "react";
import { ChildNode } from "./ChildNode";

//Redux
import { useSelector } from "react-redux";

export function Tree(props) {
  // const { categoryList } = props;
  const categoryList = useSelector((state) => state.tree);
  let listVal = props.child ? props.categoryList : categoryList;
  console.log("list: ", listVal);
  return (
    <div>
      <ul className="tree">
        {listVal &&
          listVal.map((node) => (
            <>
              <ChildNode node={node} key={node.key} />
            </>
          ))}
      </ul>
    </div>
  );
}
