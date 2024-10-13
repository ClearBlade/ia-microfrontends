import {
    StateObservable,
    Subscribe,
    useStateObservable,
  } from "@react-rxjs/core";
import { AppProviders } from "@clearblade/ia-mfe-react";

export default function VideoWidget(props: {
    attribute: StateObservable<string>;
}) {
    const attribute = useStateObservable(props.attribute);

    return (
        <AppProviders>
            <Subscribe>
                <iframe src={attribute}>
                </iframe>
            </Subscribe>
        </AppProviders>
    )
}