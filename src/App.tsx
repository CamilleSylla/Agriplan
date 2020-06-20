import React from 'react';
import './App.css';
import { Inject, ScheduleComponent, Day, Week, Month, Agenda,  } from '@syncfusion/ej2-react-schedule';


class App extends React.Component {
  public render () {
    return <ScheduleComponent currentView="Month" selectedDate={new Date(2020, 0, 11)}>
      <Inject services={[ Day, Week, Month, Agenda,]} />
    </ScheduleComponent>
  }
}

export default App;
