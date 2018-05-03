import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();


    goToStore = ev => {
    // 1. Stop form from submitting
        ev.preventDefault();
    // 2. Get text from input
        console.log(this.myInput );
        
    // 3. Change page to /store/text
    }
    render () {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()}
                    />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;