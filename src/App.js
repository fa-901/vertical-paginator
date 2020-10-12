import React, { useState } from "react";
import "./styles.css";
import FloorPagination from "./FloorPagination";

export default function App() {
  const propt = {
    floors: [
      // {
      //   Did: "d615481d778145dbaf6e98c182cdd19dsdfsdfsdfsdfsdxc",
      //   CSize: 0,
      //   LSize: 0,
      //   Size: 0,
      //   VSize: 0,
      //   area: 0,
      //   floor: "7",
      //   suits: "[{…}]",
      //   pinchinLayerInfo: null,
      //   suiteLayerInfo: "[]"
      // },
      // {
      //   Did: "d615481d778145dbaf6e98c182cdd19zxczxcd",
      //   CSize: 0,
      //   LSize: 0,
      //   Size: 0,
      //   VSize: 0,
      //   area: 0,
      //   floor: "6",
      //   suits: "[{…}]",
      //   pinchinLayerInfo: null,
      //   suiteLayerInfo: "[]"
      // },
      {
        Did: "d6zxczxc5481d778145dbaf6e98c182cdd19d",
        CSize: 0,
        LSize: 0,
        Size: 0,
        VSize: 0,
        area: 0,
        floor: "5",
        suits: "[{…}]",
        pinchinLayerInfo: null,
        suiteLayerInfo: "[]"
      },
      {
        Did: "d615481d778145dbaf6e9fsd8c182cdd19d",
        CSize: 0,
        LSize: 0,
        Size: 0,
        VSize: 0,
        area: 0,
        floor: "4",
        suits: "[{…}]",
        pinchinLayerInfo: null,
        suiteLayerInfo: "[]"
      },
      {
        Did: "d615481d778145dbaf6e98c182cdd19d",
        CSize: 0,
        LSize: 0,
        Size: 0,
        VSize: 0,
        area: 0,
        floor: "3",
        suits: "[{…}]",
        pinchinLayerInfo: null,
        suiteLayerInfo: "[]"
      },
      {
        Did: "4970cb6c8a19413dbf578f4ce900abe1",
        CSize: 0,
        LSize: 0,
        Size: 0,
        VSize: 0,
        area: 0,
        floor: "2",
        suits: "[{…}]",
        pinchinLayerInfo: null,
        suiteLayerInfo: "[]"
      },
      {
        Did: "dd50bcb9dc0c4b32888db566111cfb17",
        CSize: 0,
        LSize: 0,
        Size: 0,
        VSize: 0,
        area: 0,
        floor: "1",
        suits: "[{…}]",
        pinchinLayerInfo: null,
        suiteLayerInfo: "[]"
      }
    ]
  };

  const [id, updateID] = useState(`d615481d778145dbaf6e9fsd8c182cdd19d`);

  return (
    <div className="App d-flex justify-content-center">
      <FloorPagination
        floorID={id}
        buildingInfo={propt}
        updateFloor={(e) => {
          updateID(e);
        }}
      />
    </div>
  );
}
