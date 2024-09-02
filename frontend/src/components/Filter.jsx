import React from 'react';

const Filter = ({ onSortChange, onCategoryChange, categories }) => (
  <div className={'filter'}>
    <select onChange={e => onSortChange(e.target.value)}>
      <option value="a-z">Сортировка A-Z</option>
      <option value="z-a">Сортировка Z-A</option>
    </select>
    <select onChange={e => onCategoryChange(e.target.value)}>
      <option value="">Все категории</option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  </div>
);

export default Filter;