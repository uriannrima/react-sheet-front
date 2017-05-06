import * as React from "react";
import { inject, observer } from "mobx-react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import HomeStyle from "styles/Home";
import Featured from "components/layout/home/Featured";
import InputGroup from "components/shared/InputGroup";

@inject('charactersStore')
@observer
export default class extends React.Component {
    removeCharacter = (characterId) => {
        this.props.charactersStore.deleteCharacter(characterId);
    }

    render() {
        const Featureds = this.props.charactersStore.getFiltered.map((character) => {
            return <Featured
                key={character.id}
                character={character}
                onRemoveCharacter={this.removeCharacter}>
            </Featured>
        });

        return (
            <div>
                <div class="row">
                    <div class="col-md-4">
                        <InputGroup label={"Filter by Name:"} onChange={(e) => {
                            this.props.charactersStore.filter.byName = e.currentTarget.value;
                        }}></InputGroup>
                    </div>
                    <div class="col-md-4">
                        <InputGroup label={"Filter by Class Name:"} onChange={(e) => {
                            this.props.charactersStore.filter.byClass = e.currentTarget.value;
                        }}></InputGroup>
                    </div>
                    <div class="col-md-4">
                        <InputGroup label={"Filter by Level Above:"} type={"number"} onChange={(e) => {
                            this.props.charactersStore.filter.byLevel = e.currentTarget.value;
                        }}></InputGroup>
                    </div>
                </div>
                <div class="row">
                    <ReactCSSTransitionGroup transitionName="featured"
                        transitionAppear={true} transitionAppearTimeout={700}
                        transitionEnter={true} transitionEnterTimeout={700}
                        transitionLeave={true} transitionLeaveTimeout={500}>
                        {Featureds}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}