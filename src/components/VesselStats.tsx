import { Component } from "solid-js";

interface VesselStatsProps {
  label: string;
  count: number;
  icon: string;
  className?: string;
}

const VesselStats: Component<VesselStatsProps> = ({
  className,
  label,
  count,
  icon,
}) => {
  return (
    <div
      class={`border border-blueCustom300 bg-skyCustom200 p-4 rounded-2xl ${className}`}
    >
      <div class="flex flex-row space-x-4 mb-2 items-center">
        <div class="basis-5/12">
          <div class="text-9xl">{count}</div>
        </div>
        <div class="basis-7/12 text-right">
          <img class="inline-block" src={icon} alt="Ship Icon" />
        </div>
      </div>
      <div class="text-6xl mb-4">{label}</div>
    </div>
  );
};

export default VesselStats;
