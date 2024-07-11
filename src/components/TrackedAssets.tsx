import { Component } from "solid-js";
import { MockData } from "~/types";

interface TrackedAssetsProps {
  data: MockData | null;
}

const TrackedAssets: Component<TrackedAssetsProps> = ({ data }) => {
  if (!data) {
    return null;
  }
  const { tracked_ships, tracked_barges, tracked_tugs }: MockData = data;
  return (
    <div class="border border-grayCustom500 bg-grayCustom300 p-8 rounded-2xl text-6xl">
      <div class="flex flex-row space-x-5 items-center">
        <div class="font-bold flex-none">Tracked Assets:</div>
        <div>
          <div class="flex flex-wrap space-x-5">
            <div>
              <span class="font-bold mr-2">{tracked_tugs}</span>Tugs
            </div>
            <div>
              <span class="font-bold mr-2">{tracked_ships}</span>Ships
            </div>
            <div>
              <span class="font-bold mr-2">{tracked_barges}</span>Barges
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackedAssets;
