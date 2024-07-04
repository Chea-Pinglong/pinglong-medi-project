import React, { FC } from 'react'
import { CommentCard } from './CommentCard'

interface Comment {
    name: string
    date: string
    image: string
    message: string
}

interface CommentSectionProps {
    comments: Comment[];
}
const CommentSection: FC<CommentSectionProps> = ({
    comments
}) => {
  return (
    <div className="w-full flex flex-col space-y-[20px] mt-10">
                <span className="text-[24px] font-medium">Comments</span>

                {comments.map((comment, index) => (
                  // <div key={index} className="w-full">
                  //   <div className="flex items-start space-x-2">
                  //     <img 
                  //       src={comment.image}
                  //       alt="profile"
                  //       className="w-10 h-10 object-cover rounded-full"
                  //     />
                  //     <div className="flex items-start flex-col space-y-1">
                  //       <span className="text-[14px]">
                  //         {comment.name} •{" "}
                  //         <span className="text-gray-400">{comment.date}</span>
                  //       </span>
                  //       <span className="text-[14px]">{comment.message}</span>
                  //     </div>
                  //   </div>

                  //   {index < commentData.length - 1 && (
                  //     <div className="bg-gray-100 w-full h-[0.8px] mt-[20px]" />
                  //   )}
                  // </div>
                  <CommentCard 
                  key={index}
                  name={comment.name} 
                  date={comment.date} 
                  image={comment.image} 
                  message={comment.message}/>
                ))}

                <button className="border-[#008001] border-2 font-semibold w-[162px] rounded-full text-[#008001] px-[40px] py-[13.5px] hover:bg-[#008001] hover:text-white">
                  Load More
                </button>
              </div> 
  )
}

export {CommentSection}
