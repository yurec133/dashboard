import { Title } from "@solidjs/meta";
import LiveVoyageData from "~/components/LiveVoyageData";
import VesselStats from "~/components/VesselStats";
import TrackedAssets from "~/components/TrackedAssets";
import AlertsNotifications from "~/components/AlertsNotifications";
import IconTugBoat from "../icons/icon-tug-boat.svg";
import IconShip from "../icons/icon-ship.svg";
import IconBarge from "../icons/icon-barge.svg";
import ActiveBarges from "~/components/ActiveBarges";
import Rates from "~/components/Rates";
import TitleStatus from "~/components/TitleStatus";
import { createSignal, onMount } from "solid-js";

export default function Home() {
  let blockRef: HTMLDivElement | undefined;
  const [height, setHeight] = createSignal<number>(0);

  onMount(() => {
    requestAnimationFrame(() => {
      if (blockRef) {
        const rect = blockRef.getBoundingClientRect();
        const computedStyle = getComputedStyle(blockRef);
        const marginTop = parseFloat(computedStyle.marginTop);
        const marginBottom = parseFloat(computedStyle.marginBottom);
        setHeight(rect.height + marginTop + marginBottom);
      }
    });
  });
  return (
    <main class={"min-w-min mx-auto px-4 mb-20 mt-10"}>
      <Title>Dashboard</Title>
      <button class="bg-blueCustom200 border-blueCustom400 text-white px-7 py-4 rounded-custom mb-4 text-3xl">
        Load Dashboard
      </button>
      <div class="border border-grayCustom400 px-8 py-12">
        <TitleStatus />
        <div class="flex flex-row space-x-4 mb-4">
          <div class="basis-6/12 flex-1">
            <div ref={blockRef} class="mb-4">
              <LiveVoyageData
                count={15}
                label={"Scheduled voyages"}
                labelActive={"Active voyages"}
                countActive={30}
              />
            </div>
            <div
              class="flex flex-row space-x-4 flex-1"
              style={{ "min-height": `calc(100% - ${height()}px)` }}
            >
              <div class="basis-5/12 items-stretch flex flex-col">
                <VesselStats
                  className={"mb-4 flex-1"}
                  label="Active tugs"
                  count={30}
                  icon={IconTugBoat}
                />
                <VesselStats
                  className={"flex-1"}
                  label="Active ships"
                  count={2}
                  icon={IconShip}
                />
              </div>
              <div class="basis-7/12">
                <ActiveBarges
                  label={"Active barges"}
                  count={30}
                  icon={IconBarge}
                />
              </div>
            </div>
          </div>
          <div class="basis-3/12 flex-1">
            <Rates />
          </div>
          <div class="basis-3/12 flex-1">
            <AlertsNotifications />
          </div>
        </div>
        <TrackedAssets />
      </div>
    </main>
  );
}
