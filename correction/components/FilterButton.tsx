type FilterButtonProps = {
    isPressed: boolean,
    name: string,
    setFilter: (arg0: string) => void
}

const FilterButton = ({ isPressed, name, setFilter } : FilterButtonProps) => {
  return (
      <button
          type="button"
          className="btn toggle-btn"
          aria-pressed={isPressed}
          onClick={() => setFilter(name)}
      >
          <span className="visually-hidden">Show </span>
          <span>{name}</span>
          <span className="visually-hidden"> tasks</span>
      </button>
  );
};

export default FilterButton;
