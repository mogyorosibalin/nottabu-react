import React, { Component } from 'react';

import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
import GameSetup from './GameSetup/GameSetup';
import GameCard from './GameCard/GameCard';

class Game extends Component {
    decks = [
        { id: 1, label: 'Blue', color: 'cornflowerblue' },
        { id: 2, label: 'Yellow', color: 'goldenrod' },
        { id: 3, label: 'Red', color: 'darkred' },
        { id: 4, label: 'Purple', color: 'purple' }
    ]

    cards = [
        { word: 'Betörő', forbiddenWords: ['Lop', 'Sötét', 'Surran', 'Bűnöző', 'Rablás'] },
        { word: 'Telivér', forbiddenWords: ['Ló', 'Vágtáz', 'Verseny', 'Győztes', 'Nyerít'] },
        { word: 'Valami', forbiddenWords: ['Határozószó', 'Semmi', 'Valaki', 'Dolog', 'Izé'] },
    ]

    state = {
        cardAnimation: null,
        cardShowing: false,
        guessedGood: 0,
        guessedWrong: 0,
        deckChoosen: false,
        currentIndex: 0,
        currentDeck: null,
    }

    componentDidMount() {
        axios.get('http://definitely-not-tabu.herokuapp.com/decks')
            .then(response => {
                this.setState({ decks: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    addCardAnimation = (animation) => {
        this.setState({ cardAnimation: animation }, () => {
            setTimeout(() => {
                this.setState({ cardShowing: false });
            }, 600);
        });
    }

    guessedGood = () => {
        this.addCardAnimation('Pop');
        this.setState((prevState) => ({
            guessedGood: prevState.guessedGood + 1
        }), this.getNextCard);
    }

    guessedWrong = () => {
        this.addCardAnimation('Shake');
        this.setState((prevState) => ({
            guessedWrong: prevState.guessedWrong + 1
        }), this.getNextCard);
    }

    getNextCard = () => {
        setTimeout(() => {
            this.setState((prevState) => ({
                currentIndex: prevState.currentIndex + 1,
                cardAnimation: null,
            }), () => {
                this.setState({
                    cardShowing: true,
                });
            });
        }, 600);
    }

    chooseDeck = (deckId) => {
        this.deck = this.decks.find(deck => deck.id === deckId);
        this.setState({
            deckChoosen: true,
            cardShowing: true,
        });
    }

    render() {
        const card = this.cards[this.state.currentIndex];
        const component = this.state.deckChoosen ?
            this.state.cardShowing ?
                <div className="SmallContainer">
                    <GameCard
                        card={card}
                        color={this.deck.color}
                        cardAnimation={this.state.cardAnimation}
                        guessedGood={this.guessedGood}
                        guessedWrong={this.guessedWrong}
                    />
                </div> : null :
            <div className="BigContainer"><GameSetup cardClicked={this.chooseDeck} /></div>;
        return (
            <Aux>
                {component}
            </Aux>
        );
    }
}

export default Game;