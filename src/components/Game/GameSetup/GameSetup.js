import React, { Component } from 'react';

import axios from 'axios';

import Card from './../../UI/Card/Card';
import CardHeader from './../../UI/Card/CardHeader/CardHeader';
import CardBody from './../../UI/Card/CardBody/CardBody';
import FlatButton from './../../UI/Button/FlatButton/FlatButton';
import TextInput from './../../UI/Input/TextInput/TextInput';

class GameSetup extends Component {
    decks = [
        { id: 1, label: 'Blue', color: 'cornflowerblue' },
        { id: 2, label: 'Yellow', color: 'goldenrod' },
        { id: 3, label: 'Red', color: 'darkred' },
        { id: 4, label: 'Purple', color: 'purple' }
    ]

    state = {
        decks: null,
        selectedDeck: null,
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

    _createDOMDecks = () => {
        return (
            <div className="row center-xs">
                <div className="col-xs-12">
                    <TextInput />
                </div>
                {this.state.decks.map(deck => (
                    <div key={deck.id} className="col-xs-6">
                        <Card borderColor={deck.color} clicked={() => this.props.cardClicked(deck.id)}>
                            <CardHeader bgColor={deck.color}></CardHeader>
                            <CardBody>
                                <p style={{ fontSize: '1.5rem', fontWeight: '700', textTransform: 'uppercase', textAlign: 'center' }}>
                                    {deck.label}
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                ))}
                <div className="col-xs-12">
                    <FlatButton type="Success"><i class="fas fa-play"></i>&nbsp;Start</FlatButton>
                </div>
            </div>
        );
    }

    _createDOMLoading = () => {
        return null;
    }

    render() {
        return this.state.decks ? this._createDOMDecks() : this._createDOMLoading();
    }
}

export default GameSetup;