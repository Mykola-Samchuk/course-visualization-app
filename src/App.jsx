import React from "react";
import "./App.css";
import Header from "./Header/Header";
import useGetFetch from "./hooks/useGetFetch.js";
import Lessons from "./Lessons/Lessons";

const url = `https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/course.json`;
function App() {
  
  // Custom hook for get data
  const { data, loading, error } = useGetFetch(url);


  
  if (error)
    return (
      <div className="App">
        <div className="load-wrapp">
          <div className="title">
            <h1>{error.message} </h1>
          </div>
        </div>
      </div>
    );
  else if (!loading) {
    return (
      <div className="App">
        <div className="load-wrapp">
          <div className="title">
            <h1>Loading. . . </h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header socialLinks={data.lessons[0].links} />
        <div className="title">
          <h1>{data.title}</h1>
        </div>
        <Lessons lessons={data.lessons} />
      </div>
    );
  }
}

export default App;
