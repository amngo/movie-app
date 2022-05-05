import { GENRES } from "data";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface Props {
  genres?: string;
}

const defaultProps: Props = {
  genres: "",
};

const initialState = {};

GENRES.forEach((genre) => {
  initialState[genre.id] = false;
});

function Filter({ genres }: Props) {
  const router = useRouter();
  const selectedState = { ...initialState };

  if (genres !== "")
    genres.split(",").forEach((id) => {
      selectedState[id] = true;
    });

  const [selected, setSelected] = useState(selectedState);

  const handleSubmit = () => {
    const genreString = Object.keys(selected)
      .filter((id) => selected[id])
      .join();
    if (genreString !== "") router.push(`/?genres=${genreString}`);
  };

  return (
    <div className="flex flex-col w-full p-4 space-y-4 bg-neutral">
      <div className="grid grid-cols-2 form-control gap-y-2">
        {GENRES.map((genre) => (
          <div className="flex space-x-2" key={genre.id}>
            <input
              id={genre.name}
              type="checkbox"
              checked={selected[genre.id]}
              className="checkbox checkbox-sm checkbox-primary"
              onChange={() =>
                setSelected({ ...selected, [genre.id]: !selected[genre.id] })
              }
            />
            <span className="label-text">{genre.name}</span>
          </div>
        ))}
      </div>
      <button type="button" onClick={handleSubmit} className="btn btn-primary">
        Filter
      </button>
      <button
        type="button"
        onClick={() => setSelected(initialState)}
        className="btn btn-ghost"
      >
        Reset
      </button>
    </div>
  );
}

Filter.defaultProps = defaultProps;

export default Filter;
