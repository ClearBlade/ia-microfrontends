import { StateObservable, useStateObservable } from "@react-rxjs/core";
import { TrackStatusCustomViewSettings } from "./types";
// ADDRSS THIS LATER BY UPDATING UTILS PACKAGE
// @ts-ignore
import { Asset, Area } from "@clearblade/ia-mfe-core";
import { getColorForTrackStatusAttributeValue } from "./utils/getColorForTrackStatusAttributeValue";
import { trackStatusDefaultAttributeColor } from "./constants";

export default function TrackStatus(props: {
  settings: TrackStatusCustomViewSettings;
  attribute: StateObservable<string | number | boolean | null | undefined>;
  entity: StateObservable<Asset["frontend"] | Area["frontend"]>;
}) {
  const entity = useStateObservable(props.entity);

  const { approach, island } = props.settings;
  const approachVal = approach ? entity.customData?.[approach.attribute] : "";
  const islandVal = island ? entity.customData?.[island.attribute] : "";
  const approachColor = getColorForTrackStatusAttributeValue(
    approach,
    approachVal,
    trackStatusDefaultAttributeColor
  );
  const islandColor = getColorForTrackStatusAttributeValue(
    island,
    islandVal,
    trackStatusDefaultAttributeColor
  );

  return (
    <div>
      <svg
        width="100%"
        height="22"
        viewBox="0 0 489 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {typeof approach !== "undefined" && (
          <line
            x1="19"
            y1="11"
            x2="470"
            y2="11"
            stroke={approachColor}
            strokeWidth="8"
          />
        )}
        {typeof approach !== "undefined" && (
          <path d="M0 11L19 0V22L0 11Z" fill={approachColor} />
        )}
        {typeof island !== "undefined" && (
          <line
            x1="165"
            y1="4.5"
            x2="324"
            y2="4.5"
            stroke={islandColor}
            strokeWidth="5"
          />
        )}
        $
        {typeof approach !== "undefined" && (
          <path d="M488.756 11L470 22V0L488.756 11Z" fill={approachColor} />
        )}
      </svg>
    </div>
  );
}
