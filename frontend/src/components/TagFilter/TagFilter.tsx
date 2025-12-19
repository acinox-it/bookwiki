import './TagFilter.css';

interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  onTagSelect: (tag: string) => void;
}

export const TagFilter = ({ tags, selectedTag, onTagSelect }: TagFilterProps) => {
  return (
    <div className="tag-filter">
      <button
        className={`tag-button ${selectedTag === '' ? 'active' : ''}`}
        onClick={() => onTagSelect('')}
      >
        All
      </button>
      {tags.map(tag => (
        <button
          key={tag}
          className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
