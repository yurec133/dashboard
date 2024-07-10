import { Component } from "solid-js";
import { MockData } from "~/types";

interface ActiveBargesProps {
  label: string;
  icon: string;
  data: MockData | null;
}

const ActiveBarges: Component<ActiveBargesProps> = ({ data, label, icon }) => {
  if (!data) {
    return null;
  }
  const {
    barges_fleeting,
    barges_loading,
    barges_unloading,
    empty_barges,
    loaded_barges,
    active_barges,
  }: MockData = data;

  return (
    <div class="border border-grayCustom500 bg-grayCustom200 p-4 rounded-2xl text-6xl h-full">
      <div class="flex flex-row space-x-4 mb-2 items-center">
        <div class="basis-5/12">
          <div class="text-9xl">{active_barges}</div>
        </div>
        <div class="basis-7/12 text-right">
          <img class="inline-block" src={icon} alt="Ship Icon" />
        </div>
      </div>
      <div class="mb-20">{label}</div>
      <div class="flex flex-row space-x-4">
        <div class="basis-6/12">
          <ul class="list-none">
            <li class="mb-3">
              <span class="font-bold mr-4">{loaded_barges}</span>Loaded
            </li>
            <li class="mb-3">
              <span class="font-bold mr-4">{barges_loading}</span>Loading
            </li>
            <li>
              <span class="font-bold mr-4">{barges_unloading}</span>Unloading
            </li>
          </ul>
        </div>
        <div class="basis-6/12">
          <ul class="list-none">
            <li class="mb-3">
              <span class="font-bold mr-4">{barges_fleeting}</span>Fleeting
            </li>
            <li>
              <span class="font-bold mr-4">{empty_barges}</span>Empty
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActiveBarges;
