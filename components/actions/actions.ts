import {
  Story,
  Guide,
  Spot,
  Follower,
  Following,
  Starred,
} from "../types/types";

export const mapStateToProps = (state: any) => {
  return {
    status: state.status,
    username: state.username,
    stories: state.stories,
    guides: state.guides,
    spots: state.spots,
    following: state.following,
    followers: state.followers,
    starred: state.starred,
    timestamp: state.timestamp,
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    onStatusSet: (status: boolean) =>
      dispatch({ type: "SET_STATUS", payload: status }),
    onUsernameSet: (username: string) =>
      dispatch({ type: "SET_USERNAME", payload: username }),
    onStoriesSet: (stories: Story[]) =>
      dispatch({ type: "SET_STORIES", payload: stories }),
    onGuidesSet: (guides: Guide[]) =>
      dispatch({ type: "SET_GUIDES", payload: guides }),
    onSpotsSet: (spots: Spot[]) =>
      dispatch({ type: "SET_SPOTS", payload: spots }),
    onFollowerSet: (followers: Follower[]) =>
      dispatch({ type: "SET_FOLLOWERS", payload: followers }),
    onFollowingSet: (following: Following[]) =>
      dispatch({ type: "SET_FOLLOWING", payload: following }),
    onStarredSet: (starred: Starred[]) =>
      dispatch({ type: "SET_STARRED", payload: starred }),
    timestamp: (timestamp: number) =>
      dispatch({ type: "SET_TIMESTAMP", payload: timestamp }),
  };
};
