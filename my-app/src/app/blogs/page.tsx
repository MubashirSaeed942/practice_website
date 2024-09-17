"use client";
import React, { useEffect, useState } from 'react'
import PostCard from '../compo/PostCard/PostCard'
import Link from 'next/link';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  

export default function Blogs() {
    const [PostData, setPostData] = useState<Post[]>([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const Data = await response.json();
        setPostData(Data);
    }
    return (
        <div className='bg-gray-100 h-auto  flex  flex-wrap justify-evenly my-14'>
            
            {PostData.map((eachPost :Post) => {
                return <div key={eachPost.id}>
                <Link href={`/blogs/${eachPost.id}`}>    <PostCard  PostDataGet = {eachPost}/> </Link>
                     </div> 
            })}
            
        </div>
    )
}
