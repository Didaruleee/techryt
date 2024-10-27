import React from "react";
import ArticleCard from "./ArticleCard";

interface Article {
  imageSrc: string;
  title: string;
  author: string;
  content: string;
}

interface ArticleGridProps {
  articles: Article[];
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {
  return (
    <div className="mt-28 w-full max-w-full max-md:mt-10 max-md:max-w-full ">
      <div className="flex gap-5 max-md:flex-col md:px-10">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col w-full md:w-[33%] max-md:ml-0 max-md:w-full"
          >
            <ArticleCard {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
