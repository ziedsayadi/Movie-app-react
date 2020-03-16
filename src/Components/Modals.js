import React, { Component } from "react";
import {Button, Modal, FormControl} from 'react-bootstrap'
class Modals extends Component {
    state={
      newMovie:'',
      movieUrl:'',
      movierate:0,
        show:false
    }
//ajout un movieName
    movieName=(e)=>{

      this.setState({

        newMovie: e.target.value
      }); console.log(this.state.newMovie)

    }
//Movie url
moviImage=(e)=>{
  this.setState({
    movieUrl: e.target.value
  });console.log(this.state.movieUrl)
}

//movie rate

moviRate=(e)=>{
  this.setState({
    movierate: Number(e.target.value)
  })
}


addNewMovie=()=>{

  let x={name: this.state.newMovie, img:this.state.movieUrl} ;
}

  handleShow = () =>{
    
        this.setState({
            show: !this.state.show
    })};
  render() {
    return (
      <>
        <Button variant="secondary" className="Modal-cont" onClick={this.handleShow}>
        <img className="Modal-img" src="https://cdn3.iconfinder.com/data/icons/glyph/227/Button-Add-1-512.png"/>
         
        </Button>
        <Modal className="Modal-content" show={this.state.show} onHide={this.handleShow} animation={false}>
          <Modal.Header style={{background: "#D8DEDE"}} closeButton>
            <Modal.Title style={{marginLeft: "25%"}}>Incert New Movie</Modal.Title>
          </Modal.Header>

          <Modal.Body className="Modal-input" >
            
            <form >
              <label className="MN fname">Please enter a movie name:</label>
              <input className="title-input input"  placeholder=" " name='title' type='text' onChange={this.movieName}/>
              <label className="MI fname">Please enter an image for your movie</label>
              <input className="img-input input" placeholder=" " name='image' type='text' onChange={this.moviImage}/>
              <label className="MR fname">Please give a rate to your movie:</label>
              <input className="rating-input input" placeholder=" " name='rating' type='text'  onChange={this.moviRate}/>

              
            </form>
          </Modal.Body>
          <Modal.Footer style={{background: "#D8DEDE"}} >
            <Button style={{marginRight: "45%"}} classNmae="Submit-button" variant="primary" type="submit" onClick={()=>this.props.addmovie(this.state.movieUrl,this.state.newMovie,this.state.movierate)}>

              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default Modals