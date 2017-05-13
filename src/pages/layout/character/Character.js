import * as React from "react";
import { inject, observer } from "mobx-react";
import InputGroup from "components/shared/InputGroup";
import * as Models from "models";
import { linkState } from "extensions/linkState";

@inject('charactersStore')
@observer
export default class extends React.Component {
    constructor(props) {
        super(props);

        const { charactersStore, match } = this.props;
        const character = charactersStore.getById(this.props.match.params.id);

        this.state = {
            character
        };
    }

    saveCharacter = (e) => {
        const { character } = this.state;
        const { charactersStore } = this.props;
        charactersStore.saveOrUpdate(character);
    }

    onChangeFinish = (e) => {
        console.log(e);
    }

    render() {
        const { character } = this.state;

        if (!character) {
            this.props.history.push("/");
            return (<div />);
        }

        return (
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-6">
                            <div class='form-group'>
                                <InputGroup
                                    label={"Character Name:"}
                                    value={character.name}
                                    onChange={linkState(this, 'character.name')}>
                                </InputGroup>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class='form-group'>
                                <InputGroup
                                    label={"Class Name:"}
                                    value={character.classe.name}
                                    onChange={linkState(this, 'character.classe.name')}>
                                </InputGroup>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                    </div>
                </div>
                <div class="col-md-12">
                    <div class="controls">
                        <a href="#" onClick={this.saveCharacter} class="btn btn-success">Salvar</a>
                    </div>
                </div>
            </div>
        );
    }
}