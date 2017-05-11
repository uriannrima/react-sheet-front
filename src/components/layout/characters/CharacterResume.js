import * as React from 'react';
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

@observer
export default class extends React.Component {
    deleteCharacter = () => {
        this.props.onRemoveCharacter(this.props.character.id);
    }
    render() {
        const { character } = this.props;
        const { classe, status, saveRolls, attackRolls } = character;
        const characterClass = character.classe ?
            (<h4>{classe.name} {classe.level}</h4>) :
            (<h4>No Class</h4>);
            
        return (
            <div class="col-md-3" style={{
                overflow: "hidden"
            }}>
                <div class="">
                    <div class="text-center">
                        <h2>{character.name}</h2>
                        {characterClass}
                    </div>
                    <ul class="list-group">
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
                    <div class="card-block text-center">
                        <Link to={"/character/" + character.id} class="btn btn-space btn-primary">
                            Editar
                        </Link>
                        <a href="#" class="btn btn-space btn-danger" onClick={this.deleteCharacter}>
                            Excluir
                        </a>
                    </div>
                </div>
            </div >
        );
    }
}