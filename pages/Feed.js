import { useEffect, useState } from 'react';
import { getAllPost } from '../ApiCalls/PostCalls';
import PostCard from '../components/Post';

export default function FeedPage() {
  const [posts, setPosts] = useState([]);
  const getAllThePost = () => {
    getAllPost().then(setPosts);
  };

  useEffect(() => {
    getAllThePost();
  }, []);

  return (
    <>
      <div className="feed-page-cont d-flex flex-column justify-content-center align-content-center text-center">
        {posts.map((obj) => <PostCard postObj={obj} />)}
      </div>
    </>
  );
}
