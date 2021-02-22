import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addCity } from '../../redux/actions/city';
import { nanoid } from 'nanoid'

class Navbar extends Component {

    state = {
        search:""
    }

    handleAdd = ()=>{
        // console.log("handle add ..."+this.state.search);
        let {search} = this.state;
        console.log("handle add ..."+search);
        this.props.add({
            id:nanoid(),
            name:search,
            temperature: -88,
            weather:"sunny"
        })
    }

    handleInputChange = (e)=>{
        let search = e.target.value;
        // console.log(search+"!!!");
        this.setState({search:search});
    }

    render() {
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Time & Weather</a>
                    <input className="form-control mr-sm-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            value={this.state.search}
                            onChange={ this.handleInputChange}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" 
                            type="submit"
                            onClick={this.handleAdd}>ADD</button>
                </div>
            </nav>      
        )
    }
}

export default connect(
    state => ({}),
    dispatch => (
       {
            add: (cityObj) => dispatch( addCity(cityObj) )
        } 
    )
    )
    (Navbar);
