import { Component } from "solid-js";
import { MockData } from "~/types";

interface LiveVoyageDataProps {
  labelActive: string;
  label: string;
  data: MockData | null;
}

const LiveVoyageData: Component<LiveVoyageDataProps> = ({
  labelActive,
  label,
  data,
}) => {
  const { active_voyages = 0, scheduled_voyages = 0 } =
    data ?? ({} as MockData);
  return (
    <div class="text-6xl">
      <div class="bg-skyCustom400 p-8 rounded-2xl text-white">
        <div class="flex flex-row space-x-4 justify-between">
          <div class="basis-1/2">
            <div class="flex flex-row space-x-4 items-center">
              <div class="text-7xl">{active_voyages}</div>
              <div class="text-6xl">{labelActive}</div>
            </div>
          </div>
          <div class="basis-1/2">
            <div class="flex flex-row space-x-4 items-center justify-end">
              <div class="text-7xl">{scheduled_voyages}</div>
              <div class="text-6xl">{label}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveVoyageData;
