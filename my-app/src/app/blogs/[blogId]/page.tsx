"use client";
import Comments from '@/app/compo/Comments/Comments';
import React, { useCallback, useEffect, useState } from 'react'

interface DynamicBlog {
  blogId: number;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CommentInterface {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}


export default function BlogId({ params }: { params: DynamicBlog }) {
  const [PostData, setPostData] = useState<Post | null>(null)
  const [CommentsData, setCommentsData] = useState<CommentInterface[]>([])


  const getData = useCallback(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
    if (response.ok) {
      const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments`)
      const commentData = await commentsRes.json();
      const PostData = await response.json();
      setPostData(PostData);
      setCommentsData(commentData);
    }

  }, [params.blogId])

  useEffect(() => {

    getData();

  }, [getData])

  return (
    <div className="max-w-[50rem] p-4 bg-white rounded-md shadow mt-24 ">
      <h2 className="text-xl font-bold mb-2">{(PostData || {}).title}</h2>
      <p className="text-gray-700 mb-4">
        {(PostData || {}).body}
      </p>

      <div>
        <h3 className="text-lg font-semibold mb-2 ">{CommentsData.map((eachComment: CommentInterface) => {
          return (
          <div key={eachComment.id}>
            <Comments PostComments={eachComment} /> </div>

            )
        })}</h3>

      </div>
    </div>
  )
}
