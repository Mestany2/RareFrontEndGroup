import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import PostCard from '../components/Post';
import { getAllPost, checkUser } from '../ApiCalls/PostCalls';

export default function FeedPage() {
  const { user } = useAuth();
  const [userId, setUserId] = useState(0);
  const [posts, setPosts] = useState([]);
  const getAllThePost = () => {
    getAllPost().then(setPosts);
  };

  const checkCurrentUser = () => {
    checkUser(user.uid)?.then(setUserId);
  };

  useEffect(() => {
    getAllThePost()?.then((data) => {
      setPosts(data);
    });
  }, []);

  useEffect(() => {
    checkCurrentUser()?.then((data) => {
      setUserId(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <div className="feed-page-cont d-flex flex-column justify-content-center align-content-center text-center">
        {posts.map((obj) => <PostCard postObj={obj} onUpdate={getAllThePost} userIdCheck={userId[0]?.id} />)}
      </div>
    </>
  );
}
