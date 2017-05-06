import * as React from 'react';
import { inject, observer } from "mobx-react";

@observer
export default class extends React.Component {
    render() {
        const { character } = this.props;
        const { charClass, status, saveRolls, attackRolls } = character;
        return (
            <div class="col-md-3">
                <div class="">
                    <div class="text-center">
                        <h2>{character.name}</h2>
                        <h4>{charClass.name} {charClass.level}</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <span class="glyphicon glyphicon-heart" aria-hidden="true" title="Health Points"></span> {charClass.level}{charClass.hitDice}
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
                    <div class="card-block"> <a href="#" class="btn btn-block btn-primary">More info</a> </div>
                </div>
            </div>
        );
    }
}