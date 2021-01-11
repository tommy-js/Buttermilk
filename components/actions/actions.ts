export const mapStateToProps = (state: any) => {
  return {
    status: state.status,
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    onStatusSet: (status: boolean) =>
      dispatch({ type: "SET_STATUS", payload: status }),
  };
};
