export interface MockData {
  active_tugs: number;
  active_ships: number;
  active_barges: number;
  loaded_barges: number;
  tracked_ships: number;
  tracked_barges: number;
  tracked_tugs: number;
  empty_barges: number;
  active_voyages: number;
  scheduled_voyages: number;
  total_active_rate_per_day: number;
  total_active_day_rate: number;
  total_active_hourly_rate: null | number;
  barges_loading: number;
  barges_unloading: number;
  barges_fleeting: number;
}
