// import React, { createContext, useState } from "react";

// const DemoContext = createContext();

// const DemoProvider = ({ ...props }) => {
//   const [count, setCount] = useState(0);

//   return (
//     <DemoContext.Provider value={{ count, setCount }}>
//       {props.children}
//     </DemoContext.Provider>
//   );
// };

// export { DemoProvider, DemoContext };

import React, { Component } from "react";
const DemoContext = React.createContext();
class DemoProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      tangSo: this.tangSoCount,
    };
  }

  tangSoCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <DemoContext.Provider value={this.state}>
        {this.props.children}
      </DemoContext.Provider>
    );
  }
}

export { DemoProvider, DemoContext };
