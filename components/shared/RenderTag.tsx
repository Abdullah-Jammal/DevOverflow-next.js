import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface TagsProps {
  name: string;
  totalQuestions: number;
  _id: number;
  showCount: boolean;
}

const RenderTag = ({ name, totalQuestions, _id, showCount }: TagsProps) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge
        className="subtle-medium background-light800_dark300 text-dark400_light500
      rounded-md border-none px-4 py-2 uppercase"
      >
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default RenderTag;
