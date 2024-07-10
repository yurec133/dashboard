import { Component } from "solid-js";

const TrackedAssets: Component = () => {
  return (
    <div class="border border-grayCustom500 bg-grayCustom300 p-4 rounded-2xl text-6xl">
      <div class="flex flex-row space-x-5 items-center">
        <div class="font-bold flex-none">Tracked Assets:</div>
        <div>
          <div class="flex flex-wrap space-x-5">
            <div>
              <span class="font-bold mr-2">2</span>Tugs
            </div>
            <div>
              <span class="font-bold mr-2">2</span>Ships
            </div>
            <div>
              <span class="font-bold mr-2">2</span>Barges
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackedAssets;
