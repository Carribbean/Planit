import React from 'react';
import Login from './intro/Login';
import Signup from './intro/Signup';
import CalendarComponent from './Calendar';
import Sidebar from './Sidebar/Sidebar';
import EventsUpcoming from './carousel/EventsUpcoming';
import requests from '../../requests/requests'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 4,
      signup: false,
      eventsShowing: [
        {
          id: 0,
          title: 'Example Event (Example Group)',
          start: new Date(2021, 3, 0, 3, 20, 0),
          end: new Date(2021, 3, 0, 3, 45, 0),
        },
      ],
      loggedIn: false,
    };
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo() {
    const { userId } = this.state;
    requests.getUserEvents(this, userId);
  }

  render() {
    const app = this;
    const { userId, eventsShowing, loggedIn, signup } = this.state;
    if (!loggedIn) {
      return (
        <div id='app'>
          {signup ? <Signup app={app} /> : <Login app={app} /> }
        </div>
      )
    }
    return (
      <div id="appjsx">
        <CalendarComponent app={app} events={eventsShowing} getUserInfo={this.getUserInfo} userId={userId} />
        <Sidebar />
        <EventsUpcoming userId={userId} />
      </div>
    );
  }
}

export default App;
