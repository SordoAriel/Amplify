import React from "react";
import { GenresSectionProps } from "./GenresSection.types";
import Badge from "../Badge";

const GenresSection: React.FC<GenresSectionProps> = ({ title, genres }) => {
  return (
    <div className="p-3 w-full">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <Badge title={genre.title} href={genre.href} key={genre.id} />
        ))}
      </div>
    </div>
  );
};

export default GenresSection;
