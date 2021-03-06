import React from "react";
import PostList from "./postFunctions/PostList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;

  h1 {
    text-align: left;
    font-size: 36px;
    font-weight: bold;
    margin: 0 0 0 5px;
  }
`;

const AllPostList = props => {
  if (!props.auth.uid) return <Redirect to="/login" />;
  function compare(a, b) {
    if (a.upvotes - a.downvotes > b.upvotes - b.downvotes) return -1;
    if (a.upvotes - a.downvotes < b.upvotes - b.downvotes) return 1;
    return 0;
  }
  function myFunction2(posts) {
    let orderedPost = posts.sort(compare);
    console.log("working", orderedPost);
    return (
      orderedPost &&
      orderedPost.map(post => {
        return <PostList post={post} key={post.id} />;
      })
    );
  }
  if (props.posts) {
    return (
      <StyledContainer>
        <h1>All Posts</h1>
        {/* renders all posts ordered by most number of upvotes and changes occur instantaneously */}
        {myFunction2(props.posts)}
      </StyledContainer>
    );
  } else {
    return (
      <StyledContainer className="container center">
        <div className="progress">
          <div className="indeterminate" />
        </div>
      </StyledContainer>
    );
  }
};

function mapStateToProps(state) {
  return { post: state.post.posts, auth: state.firebase.auth };
}

export default connect(mapStateToProps)(AllPostList);
