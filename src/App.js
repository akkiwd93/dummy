import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { Tree } from "./component/tree/Tree";
import { AddFolder } from "./component/AddFolder";

function App() {
  const [categoryList, setCategoryList] = useState([
    {
      keyVal: "0",
      label: "cat1",
      children: [],
      root: true,
    },
  ]);

  // const categoryList = [
  //   {
  //     keyVal: "0",
  //     label: "cat1",
  //     children: [],
  //   },
  //   {
  //     keyVal: "1",
  //     label: "cat-2",
  //     children: [
  //       {
  //         keyVal: "1-1",
  //         label: "cat-1-1",
  //         children: [
  //           {
  //             keyVal: "1-1-1",
  //             label: "cat-1-1-1",
  //           },
  //         ],
  //       },
  //     ],
  //   },

  //   {
  //     keyVal: "2",
  //     label: "cat3",
  //     children: [
  //       {
  //         keyVal: "3-1",
  //         label: "cat-3-1",
  //       },
  //       {
  //         keyVal: "3-2",
  //         label: "cat-3-2",
  //       },
  //       {
  //         keyVal: "3-3",
  //         label: "cat-3-3",
  //       },
  //       {
  //         keyVal: "3-4",
  //         label: "cat-3-4",
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="App">
      <Provider store={store}>
        <h1>Category List</h1>
        <div className="treeContainer">
          <AddFolder />
          <Tree />
        </div>
      </Provider>
    </div>
  );
}

export default App;
