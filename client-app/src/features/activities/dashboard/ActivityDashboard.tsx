import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityList } from "./ActivityList";

interface IProps {
  activities: IActivity[];
}

export const ActivityDashboard: React.FC<IProps> = ({activities}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
          <ActivityList activities={activities}></ActivityList>
      </Grid.Column>
      <Grid.Column width={6}>
          <ActivityDetails></ActivityDetails>
      </Grid.Column>
    </Grid>
  );
};
