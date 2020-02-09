import React from 'react';
import {
    Card, CardImg, CardText, CardBody
} from 'reactstrap';
import '../assets/css/SolarBodyCard.css'

const SolarBodyCard = props => {
    return (
        <Card className='SolarBodyCard' onClick={() => props.onImgClick(props.id)}>
            <CardBody>
                {<CardText>{props.name}</CardText>}
            </CardBody>
            <CardImg className='h-100' src={props.image}></CardImg>
        </Card>
    )
}

export default SolarBodyCard;