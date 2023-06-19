import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//extra-reducers
import { getPostAsync } from "../store/slices/postSlice";

const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);

  useEffect(() => {
    dispatch(getPostAsync(id));
  }, [dispatch, id]);

  return <div>{post ? <h1>{post.title}</h1> : "Hello"}</div>;
};

export default PostPage;
