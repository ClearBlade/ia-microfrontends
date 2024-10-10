import { StateObservable, useStateObservable } from "@react-rxjs/core";
import { Grid, Typography } from "@material-ui/core";
import { PieChart } from "react-minimal-pie-chart";
import { convertDataToWidgetData } from "./utils/convertDataToWidgetData";

export default function PieChartWidget(props: {
  attribute: StateObservable<string>;
}) {
  const attribute = useStateObservable(props.attribute);

  if (!attribute) {
    return <Typography variant="body2">{"No data"}</Typography>;
  }

  const data = convertDataToWidgetData(JSON.parse(attribute));

  if (data.length === 0) {
    return <Typography variant="body2">{"Invalid data"}</Typography>;
  }

  return (
    <Grid container item xs={12} justify-content>
      <Grid item xs={6}>
        <PieChart
          data={data}
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
          labelStyle={{
            fontSize: "10px",
            fontFamily: "sans-serif",
            fill: "white",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        {data.map((entry, index) => (
          <div
            key={index}
            style={{
              marginBottom: "5px",
              marginLeft: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: entry.color,
                marginRight: "10px",
              }}
            ></div>
            <span>{entry.title}</span>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}
