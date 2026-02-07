import React from "react";
import SideBar from "../components/SideBar";
import FeedBackList from "../components/FeedBackList";

const homepage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <SideBar />
        <div className="lg:col-span-3 space-y-6">
          <div
            className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-start
 sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 flex-wrap">
                <span className="text-white font-bold">Suggestion Length</span>
                <div className="flex items-center gap-2">
                    <span className="text-gray-300 text-sm">Sort by:</span>
                    <select name="" id="" className="bg-transprent text-gray-400 text-sm rounded-lg p-2">
                        <option value="most-upvotes">Most Upvotes</option>
                        <option value="least-upvotes">Least Upvotes</option>
                        <option value="most-comments">Most Comments</option>
                        <option value="least-comments">Least Comments</option>
                    </select>
                </div>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors whitespace-norma">
                + Add Feedback
            </button>
          </div>
          <FeedBackList/>
        </div>
        
      </div>
    </div>
  );
};

export default homepage;
