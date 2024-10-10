import { StateObservable, useStateObservable } from "@react-rxjs/core";
import { Grid } from "@material-ui/core";
import { PieChartData, Contrasts, PieChartPallette } from "./types";

export default function PieChartWidget(props: {
  attribute: StateObservable<string>;
}) {
  const PieChartValues: PieChartData = JSON.parse(
    useStateObservable(props.attribute)
  );
  const pieChartScores = [];
  const sum = Object.values(PieChartValues).reduce((a, b) => a + b, 0);
  let i = 0;
  let startAngle = 0;
  for (const [key, value] of Object.entries(PieChartValues)) {
    const color = //after all the predefined colors are used, colors will be generated randomly
      i <= 10
        ? PieChartPallette[i].color
        : `#${Array.from({ length: 6 }, () =>
            Math.floor(Math.random() * 16).toString(16)
          )
            .join("")
            .toUpperCase()}`;
    const percentage = parseFloat(((value * 100) / sum).toFixed(2));
    const endAngle = startAngle + percentage * 3.6;
    pieChartScores.push({
      name: key,
      percentage,
      color,    //color of slice
      contrast: i <= 10 ? PieChartPallette[i].contrast : getContrast(color), //text color over the slice
      startAngle,   //start of slice
      endAngle,    //end of slice
    });
    startAngle = endAngle;
    i++;
  }

  return (
    <Grid container item xs={12} justify-content>
      <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
        <svg viewBox="0 0 100 100">
          {pieChartScores.map(
            ({ percentage, color, contrast, startAngle, endAngle }, index) => {
              const largeArcFlag = percentage > 50 ? 1 : 0;
              const path = `M 50 50 L ${
                Math.cos((startAngle * Math.PI) / 180) * 50 + 50
              } ${
                -Math.sin((startAngle * Math.PI) / 180) * 50 + 50
              } A 50 50 0 ${largeArcFlag} 1 ${
                Math.cos((endAngle * Math.PI) / 180) * 50 + 50
              } ${-Math.sin((endAngle * Math.PI) / 180) * 50 + 50} Z`;
              return (
                <g key={index}>
                  <path d={path} fill={color} />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={contrast}
                    fontSize="8"
                    transform={`translate(${
                      Math.cos(
                        ((startAngle + (endAngle - startAngle) / 2) * Math.PI) /
                          180
                      ) * 30
                    }, ${
                      -Math.sin(
                        ((startAngle + (endAngle - startAngle) / 2) * Math.PI) /
                          180
                      ) * 30
                    })`}
                  >
                    {percentage}%
                  </text>
                </g>
              );
            }
          )}
        </svg>
      </Grid>
      <Grid item xs={6} sm={9} md={9} lg={9} xl={9}>
        <ul>
          {pieChartScores.map(({ name, color }, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: color,
                  marginRight: "5px",
                }}
              ></div>
              <span
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {name}
              </span>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

const getContrast = (hex: string): Contrasts => {
  hex = hex.replace(/^#/, "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 2), 16);
  const b = parseInt(hex.slice(4, 2), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 >= 128
    ? Contrasts.black
    : Contrasts.white;
};
