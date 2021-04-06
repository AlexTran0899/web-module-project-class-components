import React from 'react'

class todoForm extends React.Component{

constructor(){
    super();
    
    this.state = {
        input:''
    }
}

handleChange = e =>{
    this.setState({
        input:e.target.value
    })
}

handleSubmit = e =>{
    e.preventDefault();
    this.props.addItem(this.state.input);
}

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="item"/>
                    <button>Add</button>
            </form>




        )
    }

}

export default todoForm