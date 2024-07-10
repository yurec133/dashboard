import type { APIEvent } from "@solidjs/start/server";
import { MockData } from "~/types";

const mockData: MockData = {
  active_tugs: 6,
  active_ships: 0,
  active_barges: 6,
  loaded_barges: 1,
  tracked_ships: 0,
  tracked_barges: 0.0,
  tracked_tugs: 8.0,
  empty_barges: 6.0,
  active_voyages: 6.0,
  scheduled_voyages: 16.0,
  total_active_rate_per_day: 63600.0,
  total_active_day_rate: 63600.0,
  total_active_hourly_rate: null,
  barges_loading: 0,
  barges_unloading: 0,
  barges_fleeting: 0,
};
export function GET({ params }: APIEvent) {
  try {
    console.log("GET request received on /api/voyage-data");
    return mockData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}
