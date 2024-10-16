import { AiComponentsProps } from "../types";
import InternalComponents from "../helpers/InternalComponents";

export default function AnomalyDetection(props: AiComponentsProps) {
  return <InternalComponents {...props} />;
}

// You can add your own custom field and set the component meta value in the setValues function.
// {
/* <Grid item xs={6}>
        <FormControl fullWidth margin="normal">
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormLabel>
              <Typography variant="body2">
                <span style={{ fontWeight: "bold" }}>
                  Anomaly Score Threshold
                </span>
              </Typography>
            </FormLabel>
            <Tooltip title="This is an optional field.">
              <IconButton
                size="small"
                aria-label="help"
                style={{ marginLeft: "4px" }}
              >
                <HelpOutlineIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
          <Field
            size="small"
            value={component.meta.confidence}
            component={TextField}
            variant="outlined"
            onChange={(e) => {
              setValues((c) => ({
                ...c,
                componentsMeta: {
                  ...c.componentsMeta,
                  confidence: e.target.value,
                },
              }));
            }}
            fullWidth
          />
        </FormControl>
      </Grid> */
// }
