import React, { Component } from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import ImageGrid from './components/ImageGrid';

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <div>
                        <ImageGrid />
                    </div>
                </Provider>
            </div>
        );
    }
}

export default App;
