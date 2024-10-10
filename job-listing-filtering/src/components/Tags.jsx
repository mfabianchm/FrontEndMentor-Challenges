import styles from "./Tags.module.css";

function Tags({ tags, removeTag, clearTags }) {
  const removeTagHandler = (tagValue) => {
    removeTag(tagValue);
  };

  const clearTagsHandler = () => {
    clearTags();
  };

  return (
    <div className={styles.tags}>
      <div className={styles.tagButtonsContainer}>
        {tags.map((tag) => (
          <span className={styles.spanButton}>
            {tag}
            <button
              key={tag}
              className={styles.tagButton}
              onClick={() => removeTagHandler(tag)}
            ></button>
          </span>
        ))}
      </div>
      <button className={styles.clearButton} onClick={() => clearTagsHandler()}>
        Clear
      </button>
    </div>
  );
}

export default Tags;
