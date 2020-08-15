// import React, { Component } from "react";
// import { DemoContext } from "../../common/contexts/DemoContext";

// class LearnContext extends Component {
//   render() {
//     return (
//       <DemoContext.Consumer>
//         {(context) => (
//           <>
//             <h2 className="text-center">{context.count}</h2>
//             <button onClick={() => context.setCount(context.count + 1)}>
//               +
//             </button>
//           </>
//         )}
//       </DemoContext.Consumer>
//     );
//   }
// }

// export default LearnContext;

import React, { Component } from "react";
import { DemoContext } from "../../common/contexts/DemoContext";

class LearnContext extends Component {
  renderLayout = (context) => {
    const { count, tangSo } = context;
    return (
      <>
        <h1 className="text-center">{count}</h1>
        <button className="btn btn-success" onClick={() => tangSo()}>
          +
        </button>
      </>
    );
  };
  render() {
    return (
      <DemoContext.Consumer>
        {(context) => {
          return <>{this.renderLayout(context)}</>;
        }}
      </DemoContext.Consumer>
    );
  }
}

export default LearnContext;
