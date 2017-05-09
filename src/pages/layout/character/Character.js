import * as React from "react";
import { inject, observer } from "mobx-react";
import InputGroup from "components/shared/InputGroup";
import * as Models from "models";

@inject('charactersStore')
@observer
export default class extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        const { charactersStore, match } = this.props;
        const character = charactersStore.getById(this.props.match.params.id);

        this.setState({
            character
        });
    }

    saveCharacter = (e) => {
        const { character } = this.state;
        const { charactersStore } = this.props;
        charactersStore.saveOrUpdate(character);
    }

    saveView = (e) => {
        const { character } = this.state;
        this.setState({
            character
        });
    }

    render() {
        const { character } = this.state;

        if (!character) {
            this.props.history.push("/");
            return (<div />);
        }

        return (
            <div>
                <div class='form-group'>
                    <InputGroup value={character.name} label={"Character Name:"} onChange={(e) => {
                        character.name = e.currentTarget.value;
                        this.saveView();
                    }}></InputGroup>
                </div>
                <div class='form-group'>
                    <InputGroup value={character.classe.name} label={"Class Name:"} onChange={(e) => {
                        character.classe.name = e.currentTarget.value;
                        this.saveView();
                    }}></InputGroup>
                </div>
                <div class='form-group'>
                    <InputGroup value={character.classe.level} label={"Class Level:"} type="number" onChange={(e) => {
                        character.classe.level = e.currentTarget.value;
                        this.saveView();
                    }}></InputGroup>
                </div>
                <div class="controls">
                    <a href="#" onClick={this.saveCharacter} class="btn btn-success">Salvar </a>
                </div>
            </div>
        );
    }
}