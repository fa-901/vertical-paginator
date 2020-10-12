import React, { useState, useContext, useEffect } from "react";

export default function FloorPagination(props) {
  const floorList = props.buildingInfo.floors;
  var currentFloor = props.floorID;

  const max_page = 5; /** max no. of floors visible at a time */
  const page_length =
    floorList.length < max_page
      ? floorList.length
      : max_page; /** show how many floors will be visible at a time */

  const [centralPage, updatePage] = useState(currentFloor);

  useEffect(() => {
    document
      .getElementById("floor-paginate")
      .addEventListener("wheel", (event) => {
        /** prevent default action of mouse scroll when on pagination component */
        event.preventDefault();
      });
  }, []);

  function getPages(array, page_no, page_size) {
    let currentIndex = array.findIndex((x) => x.Did === page_no);
    let start =
      currentIndex === array.length - 1
        ? currentIndex - (page_size - 1)
        : currentIndex - Math.floor(page_size / 2) < 0
        ? currentIndex
        : currentIndex - Math.floor(page_size / 2);
    return array.slice(start, start + page_size);
  }

  var pageList = getPages(floorList, centralPage, page_length).map((v, i) => {
    let floor = isNaN(v.floor)
      ? v.floor
      : ("0" + v.floor).slice(
          -2
        ); /** Concat a '0' to single digit floor numbers */
    floor =
      floor.length > 2
        ? floor.slice(0, 2)
        : floor; /** max 2 characters in Floor name */
    return (
      <button
        key={i}
        className="btn btn-primary vertical-btn-border"
        onClick={() => {
          updateFloor(v.Did);
        }}
      >
        <span
          style={
            v.Did === currentFloor ? { fontWeight: "bold" } : { opacity: "0.7" }
          }
        >
          {floor}
        </span>
      </button>
    );
  });

  function updateFloor(id) {
    props.updateFloor(id);
  }

  function scrollDown() {
    let nextIndex = floorList.findIndex((x) => x.Did === centralPage) + 1;
    if (nextIndex < floorList.length - 1) {
      updatePage(floorList[nextIndex].Did);
    }
  }

  function scrollUp() {
    let nextIndex = floorList.findIndex((x) => x.Did === centralPage) - 1;
    if (nextIndex >= 0) {
      updatePage(floorList[nextIndex].Did);
    }
  }

  function scrollEvt(e) {
    if (e.deltaY > 0) {
      scrollDown();
    }
    if (e.deltaY < 0) {
      scrollUp();
    }
  }

  let btnDisabled = floorList.length > page_length ? false : true;

  let upBtn = (
    <button
      className="btn btn-primary vertical-btn-border"
      disabled={btnDisabled}
      onClick={() => {
        scrollUp();
      }}
    >
      <i className="fas fa-caret-up"></i>
    </button>
  );

  let downBtn = (
    <button
      className="btn btn-primary"
      disabled={btnDisabled}
      onClick={() => {
        scrollDown();
      }}
    >
      <i className="fas fa-caret-down"></i>
    </button>
  );

  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <div
        className="btn-group-vertical vertical-btn-width vertical-btn-border"
        role="group"
        aria-label="Vertical button group"
        id="floor-paginate"
        onWheel={scrollEvt}
      >
        {upBtn}
        {pageList}
        {downBtn}
      </div>
    </div>
  );
}
