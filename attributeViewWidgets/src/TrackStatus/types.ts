export enum TrackStatusSettingKeys {
  approach = "approach",
  island = "island",
}

export type AttributeProp = {
  attribute: string;
  color: {
    on: string;
    off: string;
  };
};

export type TrackStatusCustomViewSettings = {
  [TrackStatusSettingKeys.approach]: AttributeProp;
  [TrackStatusSettingKeys.island]: AttributeProp;
};
