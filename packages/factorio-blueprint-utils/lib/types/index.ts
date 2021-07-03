import { ColorObject } from "./ColorObject";
import { Entities } from "./entities";
import { Icon } from "./Icon";
import { Schedule } from "./schedules";
import { Tile } from "./Tile";

// https://wiki.factorio.com/Blueprint_string_format#Blueprint_object
export interface RawBlueprint {
  item: "blueprint";
  label: string;
  label_color?: ColorObject;
  entities: Entities[];
  tiles: Tile[];
  icons: Icon;
  schedules: Schedule[];
  version: number;
}

interface BlueprintInBook {
  index: number;
  blueprint: RawBlueprint;
}

export interface RawBlueprintBook {
  item: "blueprint-book";
  label: string;
  label_color: ColorObject;
  blueprints: BlueprintInBook[];
  active_index: number;
  version: number;
}
