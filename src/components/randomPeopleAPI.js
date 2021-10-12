import React from "react";
import { render } from "react-dom";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class RandomPeopleAPI extends React.Component {
    state = {
        people: []
    };

    loadData = async () => {
        const response = await fetch("http://127.0.0.1:8000/stator/");
        const data = await response.json();
        this.setState({
            people: data.results
        });
    };

    render() {
        const { people } = this.state;
        return (
            <div style={styles}>
                <button onClick={this.loadData}>load data</button>
                {people.map(x => <div key={x.name.first}>{x.name.first}</div>)}
            </div>
        );
    }
}
export default RandomPeopleAPI;