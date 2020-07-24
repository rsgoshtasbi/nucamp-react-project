import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 50,
    marginLeft: "auto",
  },
}));

export default function CheckboxLabels({
  checkboxName,
  yearsName,
  label,
  checked,
  handleCheckboxChange,
  handleSkillChange,
}) {
  const classes = useStyles();

  return (
    <div>
      <FormGroup className="ml-2" row>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              name={checkboxName}
            ></Checkbox>
          }
          label={label}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">YOE</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name={yearsName}
            onChange={handleSkillChange}
            placeholder="1"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
    </div>
  );
}
