import { Subscribe } from "@react-rxjs/core";
import { AppProviders } from "@clearblade/ia-mfe-react";
import TrackStatus from "./TrackStatus";

export default function Root(props) {
  return (
    <AppProviders>
      <Subscribe>
        <TrackStatus {...props} />
      </Subscribe>
    </AppProviders>
  );
}
