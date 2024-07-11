import { Component, createMemo, createSignal, onMount } from "solid-js";
import TitleStatus from "~/components/TitleStatus";
import LiveVoyageData from "~/components/LiveVoyageData";
import VesselStats from "~/components/VesselStats";
import IconTugBoat from "~/icons/icon-tug-boat.svg";
import IconShip from "~/icons/icon-ship.svg";
import ActiveBarges from "~/components/ActiveBarges";
import IconBarge from "~/icons/icon-barge.svg";
import Rates from "~/components/Rates";
import AlertsNotifications from "~/components/AlertsNotifications";
import TrackedAssets from "~/components/TrackedAssets";
import ButtonLoad from "~/components/ButtonLoad";
import Loader from "~/components/Loader";
import { MockData } from "~/types";

const Dashboard: Component = () => {
  let blockRef: HTMLDivElement | undefined;
  const [height, setHeight] = createSignal<number>(0);
  const [data, setData] = createSignal<MockData | null>(null);
  const [loading, setLoading] = createSignal<boolean>(false);

  const calculateHeight = () => {
    if (blockRef) {
      const rect = blockRef.getBoundingClientRect();
      const computedStyle = getComputedStyle(blockRef);
      const marginTop = parseFloat(computedStyle.marginTop);
      const marginBottom = parseFloat(computedStyle.marginBottom);
      setHeight(rect.height + marginTop + marginBottom);
    }
  };

  const loadData = () => {
    setLoading(true);
    fetch("/api/voyage-data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        // Recalculate height after data is loaded
        requestAnimationFrame(calculateHeight);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  onMount(() => {
    requestAnimationFrame(calculateHeight);
  });

  return (
    <>
      <ButtonLoad name={"Load Dashboard"} onClick={loadData} />
      {loading() ? (
        <Loader />
      ) : (
        <div
          class="border border-grayCustom400 px-8 py-12"
          style={{ width: "2515px" }}
        >
          <TitleStatus />
          <div class="flex flex-row space-x-4 mb-4">
            <div class="basis-6/12 flex-1">
              <div ref={blockRef} class="mb-4">
                <LiveVoyageData
                  data={data()}
                  label={"Scheduled voyages"}
                  labelActive={"Active voyages"}
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
                    count={data()?.active_tugs ?? 0}
                    icon={IconTugBoat}
                  />
                  <VesselStats
                    className={"flex-1"}
                    label="Active ships"
                    count={data()?.active_ships ?? 0}
                    icon={IconShip}
                  />
                </div>
                <div class="basis-7/12">
                  <ActiveBarges
                    data={data()}
                    label={"Active barges"}
                    icon={IconBarge}
                  />
                </div>
              </div>
            </div>
            <div class="basis-3/12 flex-1">
              <Rates data={data()} />
            </div>
            <div class="basis-3/12 flex-1">
              <AlertsNotifications />
            </div>
          </div>
          <TrackedAssets data={data()} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
