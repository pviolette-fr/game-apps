export interface WaitCondition {
  type: string;
  compare_type: string;
  ticks?: number;
  condition: unknown;
}

export interface ScheduleRecord {
  station: string;
  wait_conditions: WaitCondition[];
}

export interface Schedule {
  schedule: ScheduleRecord[];
  locomotives: number[];
}
