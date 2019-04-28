import React,{Component} from 'react';
import axios from 'axios';
import style from "./style.css";


class Lista extends Component{
  constructor(){
    super();

    this.state={
      Datos:{},
      bandera:false,
      Log:[]
    }

  }

  componentWillMount(){

     axios.get('https://swpp-6e4aa.firebaseio.com/Bitacora/Usuario.json')
     .then(res=>{
      this.setState({Datos:res.data})
      });
      
 
       
  }

 
 
  Cargar(){

    var wwww=[];  
    var w= Object.keys(this.state.Datos);
     for(var i=0;i<w.length;i++){
       var ww=this.state.Datos[w[i]];////hijo directo de Datos
       var www=Object.keys(ww);
        for(var j=0;j<www.length;j++){            
            wwww.push((ww[www[j]]));
        }
    }
    
    this.setState({Log:wwww,bandera:true});
 
  }

  onPerfil(){
    return (
      <table className="table table-bordered">
      <thead><tr> 
          <th>IdUsuario </th>
          <th>Username</th>
          <th>Accion</th>
          <th>Fecha</th>
          <th>Url</th>
          <th>Dispositivo</th>
          </tr>
      </thead>
      <tbody>
       {Object.entries(this.state.Datos).length != 0?this.Cargar():null}
      </tbody>
     </table>  
    )
  }
  procesar(){
    return this.state.Log.map(piv=>{
      return(
        <div>
            <div class="card text-center">
            <div class="card-header">
            </div>
            <div class="card-body">
              <h5 class="card-title"><strong>{piv.Fecha}</strong></h5>
              <p class="card-text">
              
             <strong>ID DEL USUARIO </strong>             {piv.idUser}
             <br/>
             <strong>USERNAME </strong>                   {piv.UserName}
             <br/>
             <strong> URL </strong>                       {piv.Url}
              <br/>
             <strong> DISPOSITIVO </strong>               {piv.Dispositivo}
             <br/>
             <strong> Accion </strong>                    {piv.Accion}
              
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>
          <tr>

             
              </tr>

        </div>
      )
    })
  }
  render(){
      return(
        <div>
          <button className="btn btn-success btn-block"  data-toggle="modal" data-target="#perfil" onClick={this.onPerfil.bind(this)}>CARGAR DATOS</button>
           {
              this.state.bandera==true?

              this.procesar()
             :null
           }
         </div>
      )
    }

  }


export default Lista;