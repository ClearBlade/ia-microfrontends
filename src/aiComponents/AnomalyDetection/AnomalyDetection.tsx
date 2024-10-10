import {
  Divider,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { AiComponentsProps } from "../types";
import { Alert, Autocomplete } from "@material-ui/lab";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import settings from "./settings.json";
import GenerateEntityInformation from "../helpers/GenerateEntityInformation";

export default function AnomalyDetection(props: AiComponentsProps) {
  const { schema, componentMeta, componentName, assetTypeName, setValues } =
    props;
  const frequencyOptions = [
    "Weekly",
    "Twice a Month",
    "Monthly",
    "Every Other Month",
  ];

  return (
    <Formik
      initialValues={{
        schema: schema.filter((attribute) => attribute.selected),
        componentsMeta: {
          data_threshold: componentMeta["data_threshold"] ?? 100000,
          run_frequency_unix_cron:
            componentMeta["run_frequency_unix_cron"] ?? "Weekly",
        },
      }}
      onSubmit={() => {}}
    >
      {({ values, setFieldValue, handleChange }) => {
        useEffect(() => {
          setValues(values);
        }, [values]);

        return (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth margin="normal">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormLabel>
                      <Typography variant="body2">
                        <span style={{ fontWeight: "bold" }}>Attributes*</span>
                      </Typography>
                    </FormLabel>
                    <Tooltip title="This is required field. The Anomaly detection component will track anomalies for the selected attributes from this list.">
                      <IconButton
                        size="small"
                        aria-label="help"
                        style={{ marginLeft: "4px" }}
                      >
                        <HelpOutlineIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </div>
                  <Autocomplete
                    multiple
                    size="small"
                    limitTags={6}
                    id="multiple-limit-tags"
                    value={values.schema}
                    options={schema}
                    onChange={(event, newValue) =>
                      setFieldValue("schema", newValue)
                    }
                    getOptionSelected={(option, value) =>
                      option.uuid === value.uuid
                    }
                    getOptionLabel={(option: { attribute_label: string }) =>
                      option.attribute_label
                    }
                    renderInput={(params) => (
                      <TextField {...params} variant="outlined" />
                    )}
                    disableCloseOnSelect
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormLabel>
                      <Typography variant="body2">
                        <span style={{ fontWeight: "bold" }}>
                          Data Points Threshold
                        </span>
                      </Typography>
                    </FormLabel>
                    <Tooltip title="This is an optional field. It specifies the number of points after which the model training process should begin.">
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
                    value={values.componentsMeta.data_threshold}
                    name="componentsMeta.data_threshold"
                    id="componentsMeta.data_threshold"
                    component={TextField}
                    variant="outlined"
                    onChange={handleChange}
                    fullWidth
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormLabel>
                      <Typography variant="body2">
                        <span style={{ fontWeight: "bold" }}>
                          Retraining Frequency
                        </span>
                      </Typography>
                    </FormLabel>
                    <Tooltip title="This is an optional field. Choose an interval after which you want to retrain the model.">
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
                    select
                    fullWidth
                    size="small"
                    value={values.componentsMeta.run_frequency_unix_cron}
                    name="componentsMeta.run_frequency_unix_cron"
                    id="componentsMeta.run_frequency_unix_cron"
                    component={TextField}
                    onChange={(e) => {
                      e.target.name = "componentsMeta.run_frequency_unix_cron";
                      handleChange(e);
                    }}
                    variant="outlined"
                  >
                    {frequencyOptions.map((option) => (
                      <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                {values.schema.length > 0 && (
                  <GenerateEntityInformation
                    settings={settings}
                    componentLabel={componentName}
                    assetTypeLabel={assetTypeName}
                  />
                )}
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}
