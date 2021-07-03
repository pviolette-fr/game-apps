interface ConnectionData {
  entity_id: number;
  circuit_id: number;
}
interface ConnectionPoint {
  red: ConnectionData[];
  green: ConnectionData[];
}
export interface Connection {
  1: ConnectionPoint;
  2: ConnectionPoint;
}
