import React from "react";
import "./lesson.css";
import LessonCard from "../LessonCard/LessonCard";

export default function Lessons({ lessons }) {
  return (
    <main>
      <div className="lessons-wrapp">
        {lessons.map((item, index) => {
          return <LessonCard key={index} item={item} />;
        })}
      </div>
    </main>
  );
}
