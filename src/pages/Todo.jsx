import React from "react";
import { withAuth } from "../hocs/withAuth";

export const Todo = withAuth(() => {
  return <div>투두</div>;
});
