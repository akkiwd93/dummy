import React from "react";
import { Child } from "./Child";

//Redux
import { useSelector } from "react-redux";

export function Parent(props) {
  // const { categoryList } = props;
  const categoryList = useSelector((state) => state.tree);
  //let listVal = props.child ? props.categoryList : categoryList;
  console.log("list: ", props);
  return (
    <div className="tree">
      {categoryList &&
        categoryList.map((child) => (
          <>
            {/* <Child node={child} key={child.keyVal} /> */}
            <Child
              node={child}
              onAddChild={(newChildLabel) => child.addChild(newChildLabel)}
              key={child.keyVal}
            />
          </>
        ))}
    </div>
  );
}
