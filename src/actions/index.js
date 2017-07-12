export const naviGo = routeName => ({
  type: "WebRouter/push",
  payload: { routeName }
});
export const naviBack = routeName => ({ type: "WebRouter/back" });
