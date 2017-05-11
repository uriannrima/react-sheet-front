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

    handleChange = (e, propertyName) => {
        const { character } = this.state;
        character[propertyName] = e.currentTarget.value;
        this.saveView();
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
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-6">
                            <div class='form-group'>
                                <InputGroup propertyName={"name"} value={character.name} label={"Character Name:"} onChange={this.handleChange}></InputGroup>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class='form-group'>
                                <InputGroup propertyName={"playerName"} value={character.playerName} label={"Player Name:"} onChange={this.handleChange}></InputGroup>
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