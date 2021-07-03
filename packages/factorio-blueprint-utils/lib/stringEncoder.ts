import Pako from "pako";
import { RawBlueprint, RawBlueprintBook } from "./types";

export function decodeBlueprintString(
  encodedString: string
): RawBlueprint | RawBlueprintBook {
  const decodedString = Pako.inflate(atob(encodedString.substr(1)), {
    to: "string",
  });

  return JSON.parse(decodedString) as RawBlueprint | RawBlueprintBook;
}

export function encodeObject(obj: RawBlueprintBook | RawBlueprint): string {
  return "0" + btoa(Pako.deflate(JSON.stringify(obj), { to: "string" }));
}
