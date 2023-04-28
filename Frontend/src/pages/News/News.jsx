import React from "react";
import { useParams } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>News coming soon</h3>
    </div>
  );
};

export default News;
