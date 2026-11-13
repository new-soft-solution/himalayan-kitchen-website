"use client";

interface CategoryNavigationProps {
  id: string;
  label: string;
  allLabel: string;
  total: number;
  selected: string;
  categories: { id: string; label: string }[];
  onSelect: (id: string) => void;
}

export default function CategoryNavigation({ id, label, allLabel, total, selected, categories, onSelect }: CategoryNavigationProps) {
  return <div className="category-navigation">
    <h3 id={`${id}-category-label`} className="eyebrow">{label}</h3>
    <div className="category-buttons" role="group" aria-labelledby={`${id}-category-label`}>
      <button type="button" aria-pressed={selected === "all"} aria-controls={`${id}-results`} onClick={() => onSelect("all")}>{allLabel} <span>{total}</span></button>
      {categories.map((category) => <button type="button" key={category.id} aria-pressed={selected === category.id} aria-controls={`${id}-results`} onClick={() => onSelect(category.id)}>{category.label}</button>)}
    </div>
  </div>;
}
