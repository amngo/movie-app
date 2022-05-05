import { MovieResult } from "models";
import React from "react";
import Thumbnail from "./Thumbnail";

interface Props {
  results: any;
  classes: string;
}

function Results({ results, classes }: Props) {
  const formattedResults: JSX.Element[] = results.map((movie: MovieResult) => (
    <Thumbnail key={movie.id} id={movie.id} />
  ));

  return <div className={classes}>{formattedResults}</div>;
}

export default Results;
