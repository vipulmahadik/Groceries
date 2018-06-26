import React, {Component} from 'react';
import ItemList from './Components/ItemList';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <ItemList></ItemList>
                </div>
            </div>
        );
    }
}

export default App;
