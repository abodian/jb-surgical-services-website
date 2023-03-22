import React from "react";

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
          <CardText className='service-content'>
            {serviceContent}
          </CardText>
          <Button
            color="primary"
            href="#service"
            onClick={e => e.preventDefault()}
          >
            Read More
          </Button>
        </CardBody>
        <CardFooter className="text-muted mb-2"></CardFooter>
      </Card>
    </>
  );
}

export default OurServicesCard;