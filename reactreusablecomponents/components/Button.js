import React, { useState } from "react";
/*
This button receives three properties via props. The variant (used to determine the button color), the size (lg, xs, sm) to determine the size of the button. We display the button content dynamically using React’s built-in children property (props.children).

prop.children in the sense of DOM

https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891

*/

function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  return (
    <button className={`btn-${variant} btn-${size}`}>{props.children}</button>
  );
}
export default Button;