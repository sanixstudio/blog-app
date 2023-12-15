import React from 'react';
import TimeAgo from 'react-timeago'

const CardComponent = ({post}) => {
  return (
    <div className="py-2 rounded-[32px] overflow-hidden shadow-lg bg-white mb-4">
      <div className="px-4 py-2">
        {/* <img src="https://picsum.photos/id/953/400/200" alt="" className='rounded-[16px]' /> */}
        <h2 className="text-2xl font-bold mb-3 mt-6">{post.title}</h2>
        <p className="text-gray-700 text-base line-clamp-4">
          {post.body}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex gap-8 justify-between">
        <div className="flex items-center">
          <img className="w-8 h-8 rounded-full mr-4" src="https://picsum.photos/id/737/200/300" alt="Avatar of Writer"/>
          <div className="text-sm">
            <span className="text-black leading-none font-bold">{post.author.username}</span>
            <p className="text-gray-600"><TimeAgo date={post.timestamp} /></p>
          </div>
        </div>
        <div><span className='border bg-gray-50 py-1 px-3 rounded-lg text-xs'>Education</span></div>
      </div>
    </div>
  );
};

export default CardComponent;
