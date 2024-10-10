import "./App.css";
import { useState, useEffect } from "react";
import { data, filterData } from "./data";

import Job from "./components/Job";
import Tags from "./components/Tags";

function App() {
  const [tagsSelected, setTags] = useState([]);
  const [jobsToDisplay, setJobsToDisplay] = useState(data);

  useEffect(() => {
    const getJobs = async () => {
      if (tagsSelected.length == 0) {
        setJobsToDisplay(data);
      }
      console.log(tagsSelected);
      const jobs = await filterData(tagsSelected);
      console.log(jobs);
      setJobsToDisplay(jobs);
    };
    getJobs();
  }, [tagsSelected]);

  console.log(jobsToDisplay);

  const addTag = (newTag) => {
    if (!tagsSelected.includes(newTag)) {
      setTags([...tagsSelected, newTag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tagsSelected.filter((tag) => tag !== tagToRemove));
  };

  const clearTags = () => {
    setTags([]);
  };

  return (
    <div className="app-container">
      <header className="header"></header>
      {tagsSelected.length > 0 && (
        <Tags
          tags={tagsSelected}
          removeTag={removeTag}
          clearTags={clearTags}
        ></Tags>
      )}
      {jobsToDisplay.map((job) => (
        <Job data={job} key={job.id} addTag={addTag}></Job>
      ))}
    </div>
  );
}

export default App;
