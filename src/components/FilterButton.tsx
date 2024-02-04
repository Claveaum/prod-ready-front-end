type FilterButtonProps = {
    isPressed: boolean,
    name: string,
    setFilter: (arg0: string) => void
}

const FilterButton = ({ isPressed, name, setFilter } : FilterButtonProps) => {
  return (
    <button
      type="button"
      className={`btn toggle-btn ${isPressed ? "pressed" : ""}`}
      onClick={() => setFilter(name)}
    >
      <span>{name}</span>
    </button>
  );
};

export default FilterButton;
