import * as React from "react";
import { inject, observer } from "mobx-react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import HomeStyle from "styles/Home";
import CharacterResume from "components/layout/characters/CharacterResume";
import InputGroup from "components/shared/InputGroup";

@inject('charactersStore')
@observer
export default class extends React.Component {
    removeCharacter = (characterId) => {
        charactersStore.delete(characterId);
    }

    render() {

        const { charactersStore } = this.props;
        const { filter } = charactersStore;

        const CharactersResume = charactersStore.getFiltered.map((character) => {
            return <CharacterResume
                key={character.id}
                character={character}
                onRemoveCharacter={this.removeCharacter}>
            </CharacterResume>
        });

        return (
            <div>
                <div class="row">
                    <div class="col-md-4">
                        <InputGroup label={"Filter by Name:"} value={filter.byName} onChange={(e) => {
                            filter.byName = e.currentTarget.value;
                        }}></InputGroup>
                    </div>
                    <div class="col-md-4">
                        <InputGroup label={"Filter by Class Name:"} value={filter.byClass} onChange={(e) => {
                            filter.byClass = e.currentTarget.value;
                        }}></InputGroup>
                    </div>
                    <div class="col-md-4">
                        <InputGroup label={"Filter by Level Above:"} value={filter.byLevel} type={"number"} onChange={(e) => {
                            filter.byLevel = e.currentTarget.value;
                        }}></InputGroup>
                    </div>
                </div>
                <div class="row">
                    <ReactCSSTransitionGroup transitionName="featured"
                        transitionAppear={true} transitionAppearTimeout={700}
                        transitionEnter={true} transitionEnterTimeout={700}
                        transitionLeave={true} transitionLeaveTimeout={500}>
                        {CharactersResume}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}