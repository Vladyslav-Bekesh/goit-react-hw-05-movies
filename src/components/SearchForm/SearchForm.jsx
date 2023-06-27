import React, { useState } from 'react';

function SearchForm({ searchParams, setSearchParams }) {
  const [value, setValue] = useState(searchParams.get('query') || '');

  function handleChange({ target }) {
    setValue(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (value === '') {
      alert('Enter correct query');
      searchParams.delete('query');
      setSearchParams(searchParams);
      return;
    }

    setSearchParams({ query: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
