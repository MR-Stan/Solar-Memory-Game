import React from 'react';
import {
    Card, CardImg, CardText, CardBody
} from 'reactstrap';
import '../assets/css/SolarBodyCard.css'

const SolarBodyCard = props => {
    return (
        <Card onClick={() => props.onImgClick(props.id)}>
            <CardImg src={props.image}></CardImg>
            <CardBody>
                {<CardText>{props.name}</CardText>}
            </CardBody>
        </Card>
    )
}

export default SolarBodyCard;