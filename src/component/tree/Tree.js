import React, { useState } from "react";
import { ChildNode } from "./ChildNode";

//Redux
import { useSelector } from "react-redux";

export function Tree() {
  const categoryList = useSelector((state) => state.tree);
  return (
    <div>
      <ul className="tree">
        {categoryList &&
          categoryList.map((node) => (
            <>
              {/* {console.log("Tree Node: ", node)} */}
              <ChildNode node={node} key={node.key} />
            </>
          ))}
      </ul>
    </div>
  );
}
