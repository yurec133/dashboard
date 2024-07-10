import { Component } from "solid-js";

const TitleStatus: Component = () => {
  return (
    <div class="flex flex-row space-x-4 mb-5 items-center">
      <div
        class="statusIcon flex-none rounded-full"
        style={{ width: "26px", height: "26px", background: "#48BB78" }}
      ></div>
      <h1 class="text-5xl text-slateCustom500">Live Voyage Data</h1>
    </div>
  );
};

export default TitleStatus;
