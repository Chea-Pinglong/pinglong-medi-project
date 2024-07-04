import React, { FC } from "react";

interface CommentCardProps {
  name: string;
  date: string;
  image: string;
  message: string;
}

const CommentCard: FC<CommentCardProps> = ({ name, date, image, message }) => {
  return (
    <div className="w-full">
      <div className="flex items-start space-x-2">
        <img
          src={image}
          alt="profile"
          className="w-10 h-10 object-cover rounded-full"
        />
        <div className="flex items-start flex-col space-y-1">
          <span className="text-[14px]">
            {name} • <span className="text-gray-400">{date}</span>
          </span>
          <span className="text-[14px]">{message}</span>
        </div>
      </div>
    </div>
  );
};

export { CommentCard };
