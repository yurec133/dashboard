import { Component } from "solid-js";
import { MockData } from "~/types";

interface RatesProps {
  data: MockData | null;
}
const Rates: Component<RatesProps> = ({ data }) => {
  const {
    total_active_rate_per_day = 0,
    total_active_hourly_rate = 0,
    total_active_day_rate = 0,
  } = data ?? ({} as MockData);

  return (
    <div class="border border-blackCustom300 bg-grayCustom200 p-8 rounded-2xl text-6xl h-full">
      <h2 class="font-bold mb-12">Rates</h2>
      <ul class="list-none">
        <li class="mb-8">
          <div class="text-8xl text-slateCustom700">
            {total_active_rate_per_day !== 0 && `$${total_active_rate_per_day}`}
          </div>
          Total Per Day
        </li>
        <li class="mb-8">
          <div class="text-8xl text-slateCustom700">
            {total_active_day_rate !== 0 && `$${total_active_day_rate}`}
          </div>
          Daily
        </li>
        <li>
          <div class="text-8xl text-slateCustom700">
            {total_active_hourly_rate !== null &&
            total_active_hourly_rate !== undefined &&
            total_active_hourly_rate !== 0
              ? `$${total_active_hourly_rate}`
              : "N/A"}
          </div>
          Hourly
        </li>
      </ul>
    </div>
  );
};

export default Rates;
