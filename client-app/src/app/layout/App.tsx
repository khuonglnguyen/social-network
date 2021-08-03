import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { IActivity } from "../models/activity";

interface IState{
  activities: IActivity[]
}

class App extends Component<{}, IState> {
  readonly state:IState = {
    activities: [],
  };

  componentDidMount() {
    axios.get<IActivity[]>("https://localhost:5001/api/activities").then((response) => {
      this.setState({
        activities: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.activities.map((activity) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
        <ul></ul>
      </div>
    );
  }
}

export default App;
