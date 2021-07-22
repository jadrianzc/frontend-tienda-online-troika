import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import './Registro.css'

function registro() {
    return (
        <div className="ContRegistro">
            <Card className="CardRegistro">
                <CardContent>
                    <h1>Crear cuenta</h1>
                    <form className='FormRegistro'>
                        <div className="ContInputRegistro1">
                            <TextField id="outlined-basic" className='InputRegistro' label="Nombres*" variant="outlined" />
                            <TextField id="outlined-basic" className='InputRegistro' label="Apellidos*" variant="outlined" />
                            <TextField id="outlined-basic" className='InputRegistro' label="Cédula / RUC*" variant="outlined" />
                            <TextField id="outlined-basic" className='InputRegistro' label="Télefono" variant="outlined" />
                            <TextField id="outlined-basic" className='InputRegistro' label="Celular" variant="outlined" />
                        </div>
                        <div className="ContInputRegistro2">
                            <TextField id="outlined-basic" className='InputRegistro' label="E-mail*" variant="outlined" />
                            <TextField id="outlined-basic" className='InputRegistro' label="Contraseña*" type='password' variant="outlined" />
                            <TextField id="outlined-basic" className='InputRegistro' label="Repetir contraseña*" type='password' variant="outlined" />
                            <input type="button" className="btnRegistro" value="Registrarse" />
                        </div>
                    </form>
                    <span>* Campos obligatorios</span>
                </CardContent>
            </Card>
        </div>
    )
}

export default registro
