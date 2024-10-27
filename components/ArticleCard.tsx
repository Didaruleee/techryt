import React from "react";

interface ArticleCardProps {
  imageSrc: string;
  title: string;
  author: string;
  content: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageSrc,
  title,
  author,
  content,
}) => {
  return (
    <article className="flex flex-col grow pb-10 w-full text-xl bg-zinc-300 bg-opacity-20 rounded-[69px] text-zinc-800 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full aspect-[2.72] rounded-[36px_36px_0px_3px] max-md:max-w-full"
      />
      <div className="flex flex-col items-start px-11 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h3 className="text-3xl font-black tracking-tight text-slate-900">
          {title}
        </h3>
        <div className="flex gap-1.5 mt-4 font-semibold leading-relaxed">
          <div
            className="flex shrink-0 rounded-full bg-zinc-300 h-[38px] w-[38px]"
            aria-hidden="true"
          />
          <span className="basis-auto">{author}</span>
        </div>
        <p className="self-stretch mt-5 font-medium leading-7">{content}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
