import React from 'react';
import Login from './intro/Login';
import Signup from './intro/Signup';
import CalendarComponent from './Calendar';
import Sidebar from './Sidebar/Sidebar';
import EventsUpcoming from './carousel/EventsUpcoming';
import requests from '../../functions/requests'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first: null,
        last: null,
        email: null,
        userId: null,
        profilepic: null,
        freetime: [],
      },
      events: [],
      signup: false,
      loggedIn: false,
      eventsShowing: [
        {
          id: 0,
          title: 'Example Event (Example Group)',
          start: new Date(2021, 3, 0, 3, 20, 0),
          end: new Date(2021, 3, 0, 3, 45, 0),
        },
      ],
    };
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo() {
    const { userId } = this.state;
    requests.getUserEvents(this, userId);
  }

  render() {
    const app = this;
    const { user, eventsShowing, events, loggedIn, signup } = this.state;
    const { userId } = user;
    if (!loggedIn) {
      return (
        <div className="login-outer-div">
          <div id="app" className="login-signup">
            {signup ? <Signup app={app} /> : <Login app={app} />}
          </div>
        </div>
      );
    }
    return (
      <div id="appjsx">
        <CalendarComponent app={app} events={events} getUserInfo={this.getUserInfo} userId={userId} />
        <Sidebar />
        <EventsUpcoming userId={userId} />
      </div>
    );
  }
}

export default App;
