import React from "react";

function Wrapper({children}) {
  return (
    <section className="section">
      <div className="container">{children}</div>
    </section>
  );
}

export default Wrapper;
