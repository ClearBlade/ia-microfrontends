import { AppProviders } from "@clearblade/ia-mfe-react";
import { getBasePath } from "@clearblade/ia-mfe-core";
import { Subscribe } from "@react-rxjs/core";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import TrackStatus from "./TrackStatus";
import { BrowserRouter } from "react-router-dom";

function TrackStatusRoot(props) {
  return (
    <AppProviders>
      <BrowserRouter basename={getBasePath()}>
        <Subscribe>
          <TrackStatus {...props} />
        </Subscribe>
      </BrowserRouter>
    </AppProviders>
  );
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: TrackStatusRoot,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
