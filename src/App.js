import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

export default () => (
    <div className="App">
      <Counter />
    </div>
);

// export default = (WrappedComponent) => {
//   return class extends Component {
//     render() {
//       return (
//         <WrappedComponent {...props} />
//       );
//     }
//   }
// }