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

export default function CheckboxLabels({ name, label, checked, handleChange }) {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

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
        {/* <span className="ml-auto mr-2 mt-1 d-block">
          <select className="form-control-sm" name="numCampers" id="numCampers">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </span> */}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">YOE</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange1}
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
