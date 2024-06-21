import { AppProviders } from "@clearblade/ia-mfe-react";
import { getBasePath } from "@clearblade/ia-mfe-core";
import { Subscribe } from "@react-rxjs/core";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import GateStatus from "./GateStatus";
import { BrowserRouter } from "react-router-dom";

function GateStatusRoot(props) {
  return (
    <AppProviders>
      <BrowserRouter basename={getBasePath()}>
        <Subscribe>
          <GateStatus {...props} />
        </Subscribe>
      </BrowserRouter>
    </AppProviders>
  );
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: GateStatusRoot,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
