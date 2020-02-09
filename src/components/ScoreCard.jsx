import React from 'react';
import {
    Card, CardText, CardBody
} from 'reactstrap';
import '../assets/css/ScoreCard.css'

const ScoreCard = props => {
    return (
        <Card onClick={() => props.onImgClick(props.id)}>
            <CardBody>
                <CardText>Score: {props.score}</CardText>
                <CardText>High Score: {props.highScore}</CardText>
            </CardBody>
        </Card>
    )
}

export default ScoreCard;