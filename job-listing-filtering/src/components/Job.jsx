import styles from "./Job.module.css";

function Job({ data, addTag }) {
  const tags = [data.role, data.level, ...data.languages, ...data.tools];

  const addTagHandler = (tagValue) => {
    addTag(tagValue);
  };

  return (
    <div className={styles.job}>
      <div className={styles.jobInfoContainer}>
        <img src={data.logo} alt="logo" className={styles.logo}></img>
        <div className={styles.jobInfo}>
          <span className={styles.company}>{data.company}</span>
          {data.new && <span className={styles.new}>NEW!</span>}
          {data.featured && <span className={styles.featured}>FEATURED</span>}
          <p className={styles.position}>{data.position}</p>
          <ul>
            <li>{data.postedAt}</li>
            <li>{data.contract}</li>
            <li>{data.location}</li>
          </ul>
        </div>
      </div>
      <div className={styles.tags}>
        {tags.map((language) => (
          <button
            key={language}
            onClick={() => addTagHandler(language)}
            className={styles.addTagButton}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Job;
