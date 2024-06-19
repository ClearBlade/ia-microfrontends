import { Subscribe } from "@react-rxjs/core";
import { AppProviders } from "@clearblade/ia-mfe-react";
import TrackStatus from "./TrackStatus";
import GateStatus from "./GateStatus";

export default function Root(props) {
  return (
    <AppProviders>
      <Subscribe>
        <GateStatus {...props} />
        {/* <TrackStatus {...props} /> */}
      </Subscribe>
    </AppProviders>
  );
}
