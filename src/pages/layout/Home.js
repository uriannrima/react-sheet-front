import * as React from "react";
import { inject, observer } from "mobx-react";

import Featured from "components/layout/home/Featured";

@inject('charactersStore')
@observer
export default class extends React.Component {
    constructor(){
        super();

    }
    render() {
        const Featureds = this.props.charactersStore.getAll.map((character) => <Featured key={character.id} character={character}></Featured>);
        return (
            <div class="row">
                {Featureds}
            </div>
        );
    }
}