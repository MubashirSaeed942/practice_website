interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  



const PostCard = (props: {PostDataGet : Post }) => {
    const {PostDataGet} = props;
    return (
      <div className="bg-white shadow-md rounded-lg p-6 w-[30rem] mx-auto my-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{PostDataGet.title}</h2>
        <p className="text-gray-700">{PostDataGet.body}</p>
      </div>
    );
  };
  
  export default PostCard;
  