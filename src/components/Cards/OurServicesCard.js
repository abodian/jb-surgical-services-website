import React from "react";
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardText
} from "reactstrap";

function OurServicesCard({serviceTitle, serviceContent, serviceLink}){
  return (
    <>
      <Card className="card-container">
        <CardBody>
          <CardTitle tag="h4"><b>{serviceTitle}</b></CardTitle>
          <CardText className="service-content">{serviceContent}</CardText>
          <Link to={serviceLink}>
            <Button color="primary">
              Read More
            </Button>
          </Link>
        </CardBody>
        <CardFooter className="text-muted mb-2"></CardFooter>
      </Card>
    </>
  );
}

export default OurServicesCard;