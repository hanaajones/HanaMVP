import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import axios from 'axios';
import Country from './components/Country.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: {},
            resources: [],
            numbers: [],
            population: 0,
            space: true,
            title: "regular",
        }

    }

    componentDidMount() {
        this.fetch()
    }

    fetch(term) {
        
        if (term === "space") {
            console.log("this was space")
            this.setState({ space: !this.state.space })
        }else if(term === "kahtan") {
            console.log("this was kahtan")
            this.setState({ title: "animated hinge"})
            console.log("this.state.title", this.state.title)
        } else {
            axios.get('/katan', {
                params: {
                    name: term
                }
            }).then((response) => {
                console.log("This is response in get:", response.data);
                if (response.data) {
                    this.setState({
                        country: response.data,
                        resources: response.data.resources,
                        numbers: response.data.numbers,
                        population: response.data.population
                    }, () => { console.log("this.setstate:", this.state.resources) })

                }else{
                    alert("Not a country, try again")
                }

            })
                .catch((error) => {
            console.log("There was an error in post:", error);
        });
    }
}


settle(term) {
    // axios.post('/katan', {
    //     name: term
    // })
    //     .then(function (response) {
    //         console.log("This is response in post:", response);
    //     })
    //     .catch(function (error) {
    //         console.log("There was an error in post:", error);
    //     });
    alert("too bad, someone has already conquered!")

}


render() {
    let indexClass = this.state.space ? "nothing" : "animated infinite shake";
    // let title = this.state.kahtan ? "nothing" : "animated hinge"
    return (
        <div className={indexClass}>
            <h1 className={this.state.title}>Kah-tan</h1>
            <Search onSearch={this.fetch.bind(this)} onSettle={this.settle.bind(this)} />
            <div>
                <Country country={this.state.country} resources={this.state.resources} numbers={this.state.numbers} population={this.state.population} settle={this.settle.bind(this)}/>
            </div>

        </div>)
}
}

ReactDOM.render(<App />, document.getElementById('app'));