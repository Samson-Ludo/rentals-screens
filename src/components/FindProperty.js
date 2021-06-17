import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import "./FindProperty.css";
import { Button } from "@material-ui/core";

const minBeds = [
  {
    value: 0,
    label: "No min",
  },
  {
    value: 1,
    label: "1 Bed",
  },
  {
    value: 2,
    label: "2 Beds",
  },
  {
    value: 3,
    label: "3 Beds",
  },
];

const maxBeds = [
  {
    value: 0,
    label: "No Max",
  },
  {
    value: 1,
    label: "1 Bed",
  },
  {
    value: 2,
    label: "2 Beds",
  },
  {
    value: 3,
    label: "3 Beds",
  },
];

const pricePerOptions = [
  {
    value: "Day",
    label: "Day",
  },
  {
    value: "Week",
    label: "Week",
  },
  {
    value: "Month",
    label: "Month",
  },
  {
    value: "Year",
    label: "Year",
  },
];

const minPrices = [
  {
    value: 0,
    label: "No min",
  },
  {
    value: 100,
    label: "$100",
  },
  {
    value: 500,
    label: "$500",
  },
  {
    value: 1000,
    label: "$1000",
  },
];

const maxPrices = [
  {
    value: 0,
    label: "No min",
  },
  {
    value: 100,
    label: "$100",
  },
  {
    value: 500,
    label: "$500",
  },
  {
    value: 1000,
    label: "$1000",
  },
];

const useStyles = makeStyles((theme) => ({
  multilineColor: {
    color: "white",
    marginLeft: "8px",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "290px",
      color: "#ffffff",
    },
    "& label": {
      color: "#93227f",
      marginLeft: "8px",
      marginTop: "4px",
    },
  },
  searchCity: {
    "& label": {
      color: "#93227f",
      marginLeft: "4px",
      marginTop: "2px",
    },
  },
}));

function FindProperty() {
  const classes = useStyles();
  const [value, setValue] = React.useState("e.g Oxford or NW3");
  const [minBed, setMinBed] = React.useState(0);
  const [maxBed, setMaxBed] = React.useState(0);
  const [pricePer, setPricePer] = React.useState("Month");
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleMin = (event) => {
    setMinBed(event.target.value);
  };

  const handleMax = (event) => {
    setMaxBed(event.target.value);
  };

  const handlePricePer = (event) => {
    setPricePer(event.target.value);
  };

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPrice = (event) => {
    setMaxPrice(event.target.value);
  };

  return (
    <>
      <form
        id="findProperty-form"
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <div className="title">
          <h2>Find a rental property</h2>
        </div>
        <div>
          <TextField
            className={`${classes.searchCity} bg-dark`}
            id="filled-multiline-flexible"
            label="Search area"
            placeholder="e.g Oxford or NW3"
            multiline
            rowsMax={4}
            value={value}
            onChange={handleChange}
            variant="filled"
            InputProps={{
              className: classes.multilineColor,
            }}
          />
        </div>
        <div className="findProperty-beds">
          <TextField
            className="findProperty-beds-textField bg-dark"
            id="minimum-beds"
            select
            label="Minimum Beds"
            value={minBed}
            onChange={handleMin}
            InputProps={{
              className: classes.multilineColor,
            }}
          >
            {minBeds.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className="findProperty-beds-textField bg-dark"
            id="maximum-beds"
            select
            label="Maximum Beds"
            value={maxBed}
            onChange={handleMax}
            InputProps={{
              className: classes.multilineColor,
            }}
          >
            {maxBeds.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            className="bg-dark"
            id="pricePer"
            select
            label="Price Per"
            value={pricePer}
            onChange={handlePricePer}
            InputProps={{
              className: classes.multilineColor,
            }}
          >
            {pricePerOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="findProperty-prices">
          <TextField
            className="findProperty-prices-textField bg-dark"
            id="minimum-price"
            select
            label="Minimum price"
            value={minPrice}
            onChange={handleMinPrice}
            InputProps={{
              className: classes.multilineColor,
            }}
          >
            {minPrices.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className="findProperty-prices-textField bg-dark"
            id="maximum-price"
            select
            label="Maximum price"
            value={maxPrice}
            onChange={handleMaxPrice}
            InputProps={{
              className: classes.multilineColor,
            }}
          >
            {maxPrices.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <Button variant="contained" id="findProperty-submitBtn">
            FIND PROPERTIES
          </Button>
        </div>
      </form>
    </>
  );
}

export default FindProperty;
