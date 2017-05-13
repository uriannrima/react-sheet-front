import * as React from "react";
import { inject, observer } from "mobx-react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { linkObject } from "extensions/linkObject";


import HomeStyle from "styles/Home";
import CharacterResume from "components/layout/characters/CharacterResume";
import InputGroup from "components/shared/InputGroup";

@inject('charactersStore')
@observer
export default class extends React.Component {

    removeCharacter = (characterId) => {
        this.props.charactersStore.delete(characterId);
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
                        <InputGroup label={"Filter by Name:"} value={filter.byName} onChange={linkObject(charactersStore, 'filter.byName')}></InputGroup>
                    </div>
                    <div class="col-md-4">
                        <InputGroup label={"Filter by Class Name:"} value={filter.byClass} onChange={linkObject(charactersStore, 'filter.byClass')}></InputGroup>
                    </div>
                    <div class="col-md-4">
                        <InputGroup label={"Filter by Level Above:"} value={filter.byLevel} type={"number"} onChange={linkObject(charactersStore, 'filter.byLevel')}></InputGroup>
                    </div>
                </div>
                <div class="row">
                    <CSSTransitionGroup transitionName="featured"
                        transitionAppear={true} transitionAppearTimeout={700}
                        transitionEnter={true} transitionEnterTimeout={700}
                        transitionLeave={true} transitionLeaveTimeout={500}>
                        {CharactersResume}
                    </CSSTransitionGroup>
                </div>
            </div>
        );
    }
}