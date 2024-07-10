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
  if (!data) {
    return null;
  }
  const { active_voyages, scheduled_voyages }: MockData = data;
  return (
    <div class="text-6xl">
      <div class="bg-skyCustom400 p-4 rounded-2xl text-white">
        <div class="flex flex-row space-x-4 justify-between">
          <div class="basis-1/2">
            <div class="flex flex-row space-x-4 items-center">
              <div class="text-7xl">{active_voyages}</div>
              <div class="text-6xl">{labelActive}</div>
            </div>
          </div>
          <div class="basis-1/2">
            <div class="flex flex-row space-x-4 items-center">
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
