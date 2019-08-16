import React, { Component } from 'react';

import Card from './../../UI/Card/Card';
import CardHeader from './../../UI/Card/CardHeader/CardHeader';
import CardBody from './../../UI/Card/CardBody/CardBody';
import CardFooter from './../../UI/Card/CardFooter/CardFooter';
import List from './../../UI/List/List';
import ListItem from './../../UI/List/ListItem/ListItem';
import FlatButton from './../../UI/Button/FlatButton/FlatButton';

import classes from './GameCard.css';

class GameCard extends Component {
    state = {
        flipped: true,
    }

    flipCard = () => {
        if (this.state.flipped) {
            this.setState({ flipped: false });
        }
    }

    render() {
        const btnStyle = {
            width: '50%',
            fontSize: '1.5rem',
        };
        const flipCardClasses = [classes.FlipCard];
        if (this.state.flipped) {
            flipCardClasses.push(classes.Flipped);
        }
        if (this.props.cardAnimation) {
            flipCardClasses.push(classes[this.props.cardAnimation]);
        }
        return (
            <div className={flipCardClasses.join(' ')} onClick={this.flipCard}>
                <Card borderColor={this.props.color} addClass={classes.CardBack}>
                    <CardHeader bgColor={this.props.color}>&nbsp;</CardHeader>
                    <CardBody addClass="flex-col-c-c">
                        <strong style={{ fontSize: '1.3rem' }}>Tabu</strong>
                        <small style={{ color: 'gray' }}>&copy;BGM</small>
                    </CardBody>
                </Card>
                <Card borderColor={this.props.color} addClass={classes.CardFront}>
                    <CardHeader bgColor={this.props.color}>
                        {this.props.card.word}
                    </CardHeader>
                    <CardBody>
                        <List>
                            {this.props.card.forbiddenWords.map(forbiddenWord => (
                                <ListItem key={forbiddenWord}>{forbiddenWord}</ListItem>
                            ))}
                        </List>
                    </CardBody>
                    <CardFooter borderColor={this.props.color} noSpacing>
                        <FlatButton type="Success" addStyle={btnStyle} clicked={this.props.guessedGood}>
                            <i className="fas fa-check"></i>
                        </FlatButton>
                        <FlatButton type="Error" addStyle={btnStyle} clicked={this.props.guessedWrong}>
                            <i className="fas fa-times"></i>
                        </FlatButton>
                    </CardFooter>
                </Card>
            </div>
        );
    }

}

export default GameCard;