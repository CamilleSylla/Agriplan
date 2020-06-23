import React from 'react';
import Calendrier from './calendrier/Schedule';
import Plan from './gantsch/plan';

class App extends React.Component {
  render (){
    return (
      <div> 
        
        <Calendrier/> 
        <Plan/> 
        
        </div>
    );
  }
}

export default App;
