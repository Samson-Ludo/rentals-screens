import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./SearchResultCard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    padding: "10px",
    background: "#1C191D",
    color: "#ffff",
    marginBottom: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    color: "#ffff",
  },
  content: {
    flex: "1 0 auto",
    color: "#ffff",
  },
  cover: {
    width: 230,
    borderRadius: "15px",
  },
}));

const SearchResultCard = () => {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} resultCard`}>
      <CardMedia
        className={`${classes.cover} cardMedia`}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qOJTLnKt3u9U3bcgRJlWj9x3i-2EoFtj7Q&usqp=CAU"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className="content-item" component="h5" variant="h5">
            3 Bedroom Flat in Hackney Bridge
          </Typography>
          <Typography className="content-item" component="h5" variant="h5">
            £1,240 pcm
          </Typography>
          <Typography
            className="content-item"
            variant="subtitle1"
            color="textSecondary"
          >
            icons
          </Typography>
          <Typography
            className="content-item"
            variant="subtitle1"
            color="textSecondary"
          >
            whatever those are
          </Typography>
          <Typography
            className="content-item"
            variant="subtitle1"
            color="textSecondary"
          >
            whatever those are number 2
          </Typography>
        </CardContent>
      </div>
      <div
        className="content-item-msgIcon"
        variant="subtitle1"
        color="textSecondary"
      >
        msgIcon
      </div>
    </Card>
  );
};

export default SearchResultCard;
