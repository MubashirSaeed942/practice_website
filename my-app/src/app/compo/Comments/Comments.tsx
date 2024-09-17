import React from 'react'
interface CommentInterface {
    postId: number;  
    id: number;       
    name: string;     
    email: string;    
    body: string;     
  }
  
export default function Comments(props:{PostComments: CommentInterface}) {
    const {PostComments} = props; 
  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md mb-4">
    <h3 className="text-lg font-semibold">{PostComments.name}</h3>
    <p className="text-sm text-gray-600 mb-2">{PostComments.email}</p>
    <p className="text-gray-700">{PostComments.body}</p>
  </div>
  )
}

