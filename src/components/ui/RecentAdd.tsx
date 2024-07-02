import React from "react";
// import CalendarIcon from "./icons/CalendarIcon"; // Adjust the import path as necessary
import { FaCalendar } from "react-icons/fa";
import Image from "next/image";
const recentlyAddedItems = [
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "June 25, 2023",
    image:
      "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Donec mattis arcu faucibus suscipit viverra.",
    date: "June 25, 2023",
    image:
      "https://images.unsplash.com/photo-1553395572-0ef353a212bf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Quisque posuere tempus rutrum. Integer velit ex.",
    date: "June 25, 2023",
    image:
      "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const RecentAdd: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Recently Added</h2>
      <div className="flex flex-col space-y-4">
        {recentlyAddedItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 w-full">
            <div className="w-[100px] h-[70px] rounded-lg overflow-hidden flex-shrink-0">
            <img
                src={item.image}
                alt={`Recently Added Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <p className="text-lg font-medium">{item.title}</p>
              <div className="flex items-center text-gray-500">
                {/* <CalendarIcon className="w-5 h-5 mr-2  text-[#008001]" /> */}
                    <FaCalendar className="w-5 h-5 mr-2 text-[#008001]"/>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {RecentAdd};