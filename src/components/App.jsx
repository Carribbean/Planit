import React from 'react';
import CalendarComponent from './Calendar';
import EventsUpcoming from './carousel/EventsUpcoming';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsShowing: [
        {
          id: 0,
          title: 'Example Event (Example Group)',
          start: new Date(2021, 3, 0, 3, 20, 0),
          end: new Date(2021, 3, 0, 3, 45, 0),
        },
        {
          id: 1,
          title: 'Free Time',
          start: new Date(2021, 3, 0),
          end: new Date(2021, 3, 3),
        },
      ],
    };
    this.editAvailablity = this.editAvailablity.bind(this);
  }

  editAvailablity({ start, end }) {
    const { eventsShowing } = this.state;
    const tempArr = eventsShowing.slice();

    tempArr.push({start, end, title: 'Freetime' });

    this.setState({
      eventsShowing: tempArr,
    });
  }

  render() {
    const { eventsShowing } = this.state;
    return (
      <div className="app">
        <CalendarComponent
          events={eventsShowing}
          editAvailablity={this.editAvailablity}
        />
        <EventsUpcoming />
      </div>
    );
  }
}

export default App;
