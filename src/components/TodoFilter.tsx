import React from 'react';
import { FilterType } from '../types/FilterType';

type Props = {
  currentFilter: FilterType;
  onChange: (status: FilterType) => void;
};

export const TodoFilter: React.FC<Props> = ({ currentFilter, onChange }) => {
  return (
    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={`filter__link ${currentFilter === FilterType.All ? 'selected' : ''}`}
        data-cy="FilterLinkAll"
        onClick={e => {
          e.preventDefault();
          onChange(FilterType.All);
        }}
      >
        All
      </a>

      <a
        href="#/active"
        className={`filter__link ${currentFilter === FilterType.Active ? 'selected' : ''}`}
        data-cy="FilterLinkActive"
        onClick={e => {
          e.preventDefault();
          onChange(FilterType.Active);
        }}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={`filter__link ${currentFilter === FilterType.Completed ? 'selected' : ''}`}
        data-cy="FilterLinkCompleted"
        onClick={e => {
          e.preventDefault();
          onChange(FilterType.Completed);
        }}
      >
        Completed
      </a>
    </nav>
  );
};
