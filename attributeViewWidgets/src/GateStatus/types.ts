export enum GateStatusSettingKeys {
  gateUp = "gateUp",
  gateDown = "gateDown",
  gateControl = "gateControl",
  bellStatus = "bellStatus",
  flip = "flip",
}

export type GateStatusAttributeProp = {
  attribute: string;
  color: {
    on: string;
    off: string;
  };
};

export type GateStatusCustomViewSettings = {
  [GateStatusSettingKeys.gateUp]: GateStatusAttributeProp;
  [GateStatusSettingKeys.gateDown]: GateStatusAttributeProp;
  [GateStatusSettingKeys.gateControl]: GateStatusAttributeProp;
  [GateStatusSettingKeys.bellStatus]: GateStatusAttributeProp;
  [GateStatusSettingKeys.flip]: Boolean;
};
