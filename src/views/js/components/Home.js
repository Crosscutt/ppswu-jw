import React from 'react';




const Home=()=>{
    return (
        <div class="col-md-12">
            <div class="card text-center">
                <div class="card-header">
                    Bienvenido
                </div>
                <div class="card-body">
                    <h5 class="card-title">{Date(Date.now())}</h5>
                    <p class="card-text">Paquete desarrollado para la materia de ingenieria de Software 1</p>
                </div>
                <div class="card-footer text-muted">
                    Uagrm
                </div>
                </div>
        </div>
    )
}

export default Home;