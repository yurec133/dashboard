import { Component } from "solid-js";
import { MockData } from "~/types";

interface ActiveBargesProps {
  label: string;
  icon: string;
  data: MockData | null;
}

const DataItem: Component<{ value: number; label: string }> = ({
  value,
  label,
}) => (
  <li class="mb-8">
    <span class="font-bold mr-4">{value}</span>
    {label}
  </li>
);

const ActiveBarges: Component<ActiveBargesProps> = ({ data, label, icon }) => {
  const {
    barges_fleeting = 0,
    barges_loading = 0,
    barges_unloading = 0,
    empty_barges = 0,
    loaded_barges = 0,
    active_barges = 0,
  } = data ?? ({} as MockData);

  return (
    <div class="border border-grayCustom500 bg-grayCustom200 p-8 rounded-2xl text-6xl h-full">
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
            <DataItem value={loaded_barges} label="Loaded" />
            <DataItem value={barges_loading} label="Loading" />
            <DataItem value={barges_unloading} label="Unloading" />
          </ul>
        </div>
        <div class="basis-6/12">
          <ul class="list-none">
            <DataItem value={barges_fleeting} label="Fleeting" />
            <DataItem value={empty_barges} label="Empty" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActiveBarges;
