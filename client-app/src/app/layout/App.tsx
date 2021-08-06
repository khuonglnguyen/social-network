import React, { useState, useEffect, Fragment } from "react";
import { Container, Header, Icon, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { IActivity } from "../models/activity";
import NavBar from "../../features/nav/NavBar";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("https://localhost:5001/api/activities")
      .then((response) => {
        setActivities(response.data)
      });
  }, []);

  return (
    <Fragment>
      <NavBar></NavBar>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard activities={activities}></ActivityDashboard>
      </Container>
      <ul></ul>
    </Fragment>
  );
};

export default App;
