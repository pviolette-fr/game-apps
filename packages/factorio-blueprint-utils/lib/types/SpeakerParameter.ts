import { SignalID } from "./SignalID";

export interface SpeakerParameter {
  playback_volume: number;
  playback_globally: boolean;
  allow_polyphony: boolean;
}
export interface SpeakerAlert {
  show_alert: boolean;
  show_on_map: boolean;
  icon_signal_id: SignalID;
  alert_message: string;
}
