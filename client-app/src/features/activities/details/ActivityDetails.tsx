import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activity: IActivity;
  setEditMode: (editMode: boolean) => void;
}

export const ActivityDetails: React.FC<IProps> = ({
  activity,
  setEditMode,
}) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity.category}.jpg`}
        wrapped
        ui={false}
      ></Image>
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
        <Card.Content extra>
          <Button.Group widths={2}>
            <Button
              onClick={() => setEditMode(true)}
              basic
              color="blue"
              content="Edit"
            ></Button>
            <Button basic color="grey" content="Cancel"></Button>
          </Button.Group>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};
