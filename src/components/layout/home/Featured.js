import * as React from 'react';
import { inject, observer } from "mobx-react";

@observer
export default class extends React.Component {
    removeFeatured = () => {
        this.props.onRemoveCharacter(this.props.character.id);
    }
    render() {
        const { character } = this.props;
        const { classe, status, saveRolls, attackRolls } = character;
        return (
            <div class="col-md-3" style={{
                overflow: "hidden"
            }}>
                <div class="">
                    <div class="text-center">
                        <h2>{character.name}</h2>
                        <h4>{classe.name} {classe.level}</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <span class="glyphicon glyphicon-heart" aria-hidden="true" title="Health Points"></span> {classe.level}{classe.hitDice}
                        </li>
                        <li class="list-group-item">
                            <span class="glyphicon glyphicon-tower" aria-hidden="true" title="Armor Class"></span> {status.armorClass}
                        </li>
                        <li class="list-group-item">
                            <span class="glyphicon glyphicon-screenshot" aria-hidden="true" title="Attack Roll"></span> {attackRolls.roll}
                        </li>
                        <li class="list-group-item">
                            <span class="glyphicon glyphicon-share-alt" aria-hidden="true" title="Save Roll"></span> {saveRolls.fortitude} | {saveRolls.reflex} | {saveRolls.will}
                        </li>
                    </ul>
                    <div class="card-block">
                        <a href="#" class="btn btn-block btn-primary">More info</a>
                        <a href="#" class="btn btn-block btn-danger" onClick={this.removeFeatured}>Remove</a>
                    </div>
                </div>
            </div >
        );
    }
}