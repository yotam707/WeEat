import React from 'react'
import { Provider } from 'react-redux';
import store from '../store/resturant.store';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                
            </Provider>
        );
    }
}

// You will need this on the bottom of each component file
// to make it available through ES6 'import' statements.

export default App