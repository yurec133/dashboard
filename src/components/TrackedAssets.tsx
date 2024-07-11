import { Component } from "solid-js";
import { MockData } from "~/types";

interface TrackedAssetsProps {
  data: MockData | null;
}

interface AssetProps {
  count: number;
  label: string;
}

const AssetItem: Component<AssetProps> = ({ count, label }) => (
  <div>
    <span class="font-bold mr-2">{count}</span>
    {label}
  </div>
);

const TrackedAssets: Component<TrackedAssetsProps> = ({ data }) => {
  const {
    tracked_ships = 0,
    tracked_barges = 0,
    tracked_tugs = 0,
  } = data ?? ({} as MockData);

  return (
    <div class="border border-grayCustom500 bg-grayCustom300 p-8 rounded-2xl text-6xl">
      <div class="flex flex-row space-x-5 items-center">
        <h2 class="font-bold flex-none">Tracked Assets:</h2>
        <div>
          <div class="flex flex-wrap space-x-5">
            <AssetItem count={tracked_tugs} label="Tugs" />
            <AssetItem count={tracked_ships} label="Ships" />
            <AssetItem count={tracked_barges} label="Barges" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackedAssets;
