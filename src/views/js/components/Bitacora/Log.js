import React, { Component } from 'react';
import firebase from 'firebase';
import Lista from './uploadBD';


class App extends Component {
  constructor () {
    super();
    this.state = {
      user: null,
      Log:[],
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
    this.añadir=this.añadir.bind(this);
  }

  componentWillMount () {

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });




  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha Cerrado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }
  

  fecha(){
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if(month < 10){
      return (`${day}-0${month}-${year}`);
    }else{
      return (`${day}-${month}-${year}`);
    }
}
  añadir(){
   
     
     <Lista></Lista>
   // axios.get('https://swpp-6e4aa.firebaseio.com/Bitacora.json')
   // .then(res=>Console.log(res.data));
  }
  renderLoginButton () {
    if (!this.state.user) {
      return (
        <div>
      

           <div class="card text-center">
          <div class="card-header">
            Log-Bitacora
          </div>
          <div class="card-body">
            <h5 class="card-title"><b>Bienvenido A ala Bitacora</b></h5>
            <div class="alert alert-primary" role="alert">
            Debe logearse con una cuenta de Google para ver el contenido        
            </div>   
            <div class="alert alert-danger" role="alert">
              Solo Personal Autorizado
             </div>                  
            <button onClick={this.handleAuth}  class="btn btn-success btn-block">
                    Iniciar sesión con Google
                  </button>      
            </div>
          <div class="card-footer text-muted">
          {Date(Date.now())}
          </div>
        </div>
        </div>

      );
    } else  {
      return (
        <div >

              <div class="card text-center">
                <div class="card-header">
                  <h3>Bienvenido</h3>
                </div>
                <div class="card-body">
                  <h5 class="card-title">¡Hola, { this.state.user.displayName }!</h5>
                   

                <button class="btn btn-danger btn-block" onClick={this.handleLogout} > Cerrar Sesión </button>
                <br/>
                  <Lista></Lista>
                </div>
                <div class="card-footer text-muted">
                   {
                     Date(Date.now())
                    
                   }
                </div>
              </div>
              </div>
      

      );
    }
  }

  render() {
    return (
      <div >
        <div >
        </div>
        { this.renderLoginButton() }
      </div>
    );
  }
}

export default App;