import { Component } from "solid-js";

interface ActiveBargesProps {
  label: string;
  count: number;
  icon: string;
}

const ActiveBarges: Component<ActiveBargesProps> = ({ label, count, icon }) => {
  return (
    <div class="border border-grayCustom500 bg-grayCustom200 p-4 rounded-2xl text-6xl h-full">
      <div class="flex flex-row space-x-4 mb-2 items-center">
        <div class="basis-5/12">
          <div class="text-9xl">{count}</div>
        </div>
        <div class="basis-7/12 text-right">
          <img class="inline-block" src={icon} alt="Ship Icon" />
        </div>
      </div>
      <div class="mb-10">{label}</div>
      <div class="flex flex-row space-x-4">
        <div class="basis-6/12">
          <ul class="list-none">
            <li class="mb-3">
              <span class="font-bold mr-4">2</span>Loaded
            </li>
            <li class="mb-3">
              <span class="font-bold mr-4">2</span>Loading
            </li>
            <li>
              <span class="font-bold mr-4">2</span>Unloading
            </li>
          </ul>
        </div>
        <div class="basis-6/12">
          <ul class="list-none">
            <li class="mb-3">
              <span class="font-bold mr-4">0</span>Fleeting
            </li>
            <li>
              <span class="font-bold mr-4">2</span>Empty
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActiveBarges;
