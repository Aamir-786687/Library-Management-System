import React from 'react';
import { Book, Users, Archive } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center bg-[rgb(247,235,215)] p-5 flex-wrap">
      <div className="h-[170px] w-[150px] rounded-lg shadow-lg m-6 flex flex-col items-center justify-center bg-white">
        <Archive className="text-[80px] text-gray-700" />
        <p className="text-xl font-semibold mt-2">Total Books</p>
        <p className="text-3xl font-bold">3254</p>
      </div>
      <div className="h-[170px] w-[150px] rounded-lg shadow-lg m-6 flex flex-col items-center justify-center bg-white">
        <Users className="text-[80px] text-gray-700" />
        <p className="text-xl font-semibold mt-2">Total Members</p>
        <p className="text-3xl font-bold">254</p>
      </div>
      <div className="h-[170px] w-[150px] rounded-lg shadow-lg m-6 flex flex-col items-center justify-center bg-white">
        <Book className="text-[80px] text-gray-700" />
        <p className="text-xl font-semibold mt-2">Reservations</p>
        <p className="text-3xl font-bold">54</p>
      </div>
    </div>
  );
};

export default Stats; 