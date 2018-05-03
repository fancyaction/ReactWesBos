import React, { Component } from 'react'

class AddFishForm extends Component {
    nameRef = React.createRef();    
    priceRef = React.createRef();   
    statusRef = React.createRef();  
    descRef = React.createRef();    
    imageRef = React.createRef();   
    submitRef = React.createRef();  

    createFish = ev => {
        // 1. Stop form from submitting
        ev.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value,
            submit: this.submitRef.value.value
        }
        this.props.addFish(fish);
        // refresh form after submit
        ev.currentTarget.reset();
    }
    render () {
        return (
            <form className='fish-edit' onSubmit={this.createFish}>
                <input name='name' ref={this.nameRef} type='text' placeholder='Name' />
                <input name='price' ref={this.priceRef} type='text' placeholder='Price' />
                <select name='status' ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name='desc' ref={this.descRef} placeholder='Desc' />
                <input name='image' ref={this.imageRef} type='text' placeholder='Image' />
                <button type="submit" ref={this.submitRef}>+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm