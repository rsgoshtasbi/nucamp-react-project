import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxLabels({ name, label, checked, handleChange }) {
  return (
    <div>
      <FormGroup className="ml-2" row>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              name={name}
            ></Checkbox>
          }
          label={label}
        />
      </FormGroup>
    </div>
  );
}
