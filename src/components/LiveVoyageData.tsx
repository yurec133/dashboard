import { Component } from "solid-js";

interface LiveVoyageDataProps {
  labelActive: string;
  countActive: number;
  label: string;
  count: number;
}

const LiveVoyageData: Component<LiveVoyageDataProps> = ({
  labelActive,
  countActive,
  label,
  count,
}) => {
  return (
    <div class="text-6xl">
      <div class="bg-skyCustom400 p-4 rounded-2xl text-white">
        <div class="flex flex-row space-x-4 justify-between">
          <div class="basis-1/2">
            <div class="flex flex-row space-x-4 items-center">
              <div class="text-7xl">{countActive}</div>
              <div class="text-6xl">{labelActive}</div>
            </div>
          </div>
          <div class="basis-1/2">
            <div class="flex flex-row space-x-4 items-center">
              <div class="text-7xl">{count}</div>
              <div class="text-6xl">{label}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveVoyageData;
