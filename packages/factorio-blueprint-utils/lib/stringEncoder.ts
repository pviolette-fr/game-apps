import Pako from "pako";

export function decodeBlueprintString(
  encodedString: string
): Record<string, unknown> {
  const decodedString = Pako.inflate(atob(encodedString.substr(1)), {
    to: "string",
  });

  return JSON.parse(decodedString);
}

export function encodeObject(obj: Record<string, unknown>): string {
  return "0" + btoa(Pako.deflate(JSON.stringify(obj), { to: "string" }));
}
