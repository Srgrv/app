import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

//components
import FieldPostsPage from "../components/FieldPostsPage";

//extra-reducers
import { getPostsAsync } from "../store/slices/postsSlice";
import { NavLink } from "react-router-dom";

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const evenQuery = searchParams.has("even");
  const oddQuery = searchParams.has("odd");

  const even = evenQuery ? 2 : 1;
  const odd = oddQuery ? 2 : 1;

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  return (
    <div>
      <FieldPostsPage
        postQuery={postQuery}
        setSearchParams={setSearchParams}
        evenQuery={evenQuery}
        oddQuery={oddQuery}
      />
      {posts
        .filter((post) => {
          return post.title.includes(postQuery);
        })
        .filter((post) => {
          return evenQuery ? post.id % 2 === 0 : post;
        })
        .filter((post) => {
          return oddQuery ? post.id % 2 === 1 : post;
        })
        .map((post) => {
          return (
            <li key={post.id}>
              <NavLink to={`${post.id}`}>
                {post.id}. {post.title}
              </NavLink>
            </li>
          );
        })}
    </div>
  );
};

export default PostsPage;
