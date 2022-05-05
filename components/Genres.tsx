import { GENRES } from "data";
import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const formattedGenres = Object.fromEntries(
  GENRES.map((genre) => [genre.id, false]),
);

interface Props {
  selected: string[];
}

function Genres({ selected }: Props) {
  const [checked, setChecked] = useState(formattedGenres);
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (selected) {
      const selectedGenres = { ...checked };
      selected.forEach((id) => {
        selectedGenres[id] = true;
      });
      setChecked(selectedGenres);
    }
  }, []);

  const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
    const id = (e.target as HTMLInputElement).name;
    const select = [];
    Object.keys(checked).forEach((key) => {
      if (checked[key] && key.localeCompare(id) !== 0) select.push(key);
    });
    router.push(`/?genres=${selected.join(",")}`);
  };

  const genres = GENRES.map((genre) => (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label key={genre.id}>
      <input
        type="checkbox"
        checked={checked[genre.id]}
        name={genre.id.toString()}
        className="focus:border-transparent focus:ring-0"
        onChange={handleChange}
      />
      <span className="ml-1">{genre.name}</span>
    </label>
  ));

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-2">Genres</h2>
      <form className="grid grid-cols-2 text-sm gap-x-6 gap-y-2">{genres}</form>
    </div>
  );
}

export default Genres;
