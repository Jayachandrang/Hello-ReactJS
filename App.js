import React from 'react';

class App extends React.Component {
   render() {
     var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
      return (
         <div>             
            <h1>Hello !!!</h1>
            <p style={myStyle}>React JS</p>
         </div>
      );
   }
}

export default App;

