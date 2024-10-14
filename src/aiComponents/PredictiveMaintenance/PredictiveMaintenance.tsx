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

export default function PredictiveMaintenance(props: AiComponentsProps) {
  const { schema, componentName, assetTypeName, setValues } = props;

  return (
    <Formik
      initialValues={{
        schema: schema.filter((attribute) => attribute.selected),
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
