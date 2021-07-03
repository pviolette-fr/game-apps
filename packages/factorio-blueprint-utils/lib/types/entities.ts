import { ColorObject } from "./ColorObject";
import { Connection } from "./ConnectionData";
import { Position } from "./Position";
import { SpeakerParameter, SpeakerAlert } from "./SpeakerParameter";

interface ItemFilter {
  name: string;
  index: number;
}

interface LogisticFilter {
  name: string;
  index: number;
  count: number;
}

type ItemRequest = Record<string, number>;

interface Inventory {
  filters: ItemFilter[];
  bar?: number;
}

interface InfinityFilter {
  name: string;
  count: number;
  mode: "at-lease" | "at-most" | "exactly";
  index: number;
}

interface InfinitySettings {
  remove_unfiltered_items: boolean;
  filters: InfinityFilter[];
}

// https://wiki.factorio.com/Blueprint_string_format#Entity_object
export interface Entities {
  entity_number: number;
  name: string;
  position: Position;
  direction: number;
  orientation?: number;
  connections?: Connection;
  // TODO find out what this is
  control_behaviour?: unknown;
  items?: ItemRequest;
  recipe?: string;
  bar?: number;
  inventory?: Inventory;
  infinity_settings?: InfinitySettings;
  type?: "input" | "output";
  input_priority?: "right" | "left";
  output_priority?: "right" | "left";
  filter?: string;
  filters?: ItemFilter[];
  filter_mode?: "whitelist" | "blacklist";
  override_stack_size?: number;
  drop_position?: Position;
  pickup_position?: Position;
  request_filters?: LogisticFilter[];
  request_from_buffers?: boolean;
  parameters?: SpeakerParameter;
  alert_parameters?: SpeakerAlert;
  auto_launch?: true;
  // TODO figure out what this is
  variation?: unknown;
  color?: ColorObject;
  station?: string;
}
