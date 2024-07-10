import { Component } from "solid-js";

const Rates: Component = () => {
  return (
    <div class="border border-blackCustom300 bg-grayCustom200 p-4 rounded-2xl text-6xl h-full">
      <div class="font-bold mb-12">Rates</div>
      <ul class="list-none">
        <li class="mb-8">
          <div class="text-8xl text-slateCustom700">$60000</div>
          Total Per Day
        </li>
        <li class="mb-8">
          <div class="text-8xl text-slateCustom700">$60000</div>
          Daily
        </li>
        <li>
          <div class="text-8xl text-slateCustom700">N/A</div>
          Hourly
        </li>
      </ul>
    </div>
  );
};

export default Rates;
