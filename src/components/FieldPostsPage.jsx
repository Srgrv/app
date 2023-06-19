import React from "react";
import { useState } from "react";

const FieldPostsPage = (props) => {
  const [value, setValue] = useState(props.postQuery);
  const [even, setEven] = useState(props.evenQuery);
  const [odd, setOdd] = useState(props.oddQuery);

  const setSearchParams = (obj) => {
    props.setSearchParams(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    const isEven = e.target.even.checked;
    const isOdd = e.target.odd.checked;

    const params = {};

    if (query.length) params.post = query;
    if (isEven) params.even = true;
    if (isOdd) params.odd = true;

    setSearchParams(params);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={even}
          name="even"
          onChange={(e) => setEven(e.target.checked)}
        />{" "}
        Even
      </label>
      <label>
        <input
          type="checkbox"
          checked={odd}
          name="odd"
          onChange={(e) => setOdd(e.target.checked)}
        />{" "}
        Odd
      </label>

      <input type="submit" value="search" />
    </form>
  );
};

export default FieldPostsPage;
