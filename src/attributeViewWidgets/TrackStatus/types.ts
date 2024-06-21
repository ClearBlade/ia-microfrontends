export enum TrackStatusSettingKeys {
  approach = "approach",
  island = "island",
}

export type TrackStatusAttributeProp = {
  attribute: string;
  color: {
    on: string;
    off: string;
  };
};

export type TrackStatusCustomViewSettings = {
  [TrackStatusSettingKeys.approach]: TrackStatusAttributeProp;
  [TrackStatusSettingKeys.island]: TrackStatusAttributeProp;
};
