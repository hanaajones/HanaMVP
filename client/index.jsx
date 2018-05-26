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
            numbers: []
        }

    }

    componentDidMount() {
        this.fetch()
    }

    fetch(term) {
        axios.get('/katan', {
            params: {
                name: term
            }
        }).then((response) => {
            console.log("This is response in get:", response.data);
            if (response.status === 404) {
                console.log("error")
            } else {

                this.setState({
                    country: response.data,
                    resources: response.data.resources,
                    numbers: response.data.numbers
                }, () => { console.log("this.setstate:", this.state.resources) })

            }
        })
            .catch((error) => {
                console.log("There was an error in post:", error);
            });

    }


    settle(term) {
        axios.post('/katan', {
            name: term
        })
            .then(function (response) {
                console.log("This is response in post:", response);
            })
            .catch(function (error) {
                console.log("There was an error in post:", error);
            });

    }


    render() {
        return (
            <div>
                <h1>KAH - TAN</h1>
                <Search onSearch={this.fetch.bind(this)} onSettle={this.settle.bind(this)} />
                <Country country={this.state.country} resources={this.state.resources} numbers={this.state.numbers}/>
            </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));