import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";

export const ActivityDetails = () => {
  return (
    <Card fluid>
      <Image src="/assets/placeholder.png" wrapped ui={false}></Image>
      <Card.Content>
        <Card.Header>Title</Card.Header>
        <Card.Meta>
          <span>Date</span>
        </Card.Meta>
        <Card.Description>Description</Card.Description>
        <Card.Content extra>
          <Button.Group widths={2}>
            <Button basic color="blue" content="Edit"></Button>
            <Button basic color="grey" content="Cancel"></Button>
          </Button.Group>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};
