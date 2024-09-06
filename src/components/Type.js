import React from "react";
import Typed from "typed.js";

function Type() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["React Js", "React Native", "Node Js", "Express"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App ">
      <span ref={el} />
    </div>
  );
}

export default Type;
