import React, { useEffect, useState }  from 'react'
import { Box, Button, Input} from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {  compra  } from '../Provider/Cantidadcart';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { addDoc, collection } from 'firebase/firestore';
import db from '../services/firebase';
import { useForm } from '../Hooks/useForms';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  
  
  export const Carrito = () => {
      
      //en caso de generar el json por medio de localstorage
      const result1 = compra.filter(x => x.id !== 0 || x.estate === true);
      const result2 = new Set(result1)
      let resultado = [...result2]
      
      const [stet, setStet] = useState(resultado)// stet imprime 
      let rolback = useNavigate();
      
      function handleClickCarro() {
          rolback('/')
        }
        
        
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => {
            setOpen(false)
            handleClickCarro()
            window.location.reload();
        };
        
        
        //const init = JSON.parse(localStorage.getItem('Cantaidad'));
        
        
        
        const handlDelete = (id) => {
            
            const filterdelet = stet.filter(filt => filt.id !== id)
            setStet(filterdelet)
        }
        
        const tem = stet.map( t =>  t.price)
        
        let result = 0;
        
        for(let i = 0 ; i < tem.length; i++)
        {
            result += parseInt(tem[i])
        }
        
        
        
        const [formValues, handleInputChange] = useForm({
            name: '',
            email: '',
            telefono: ''
    
        })
        const {name , email, telefono} = formValues
        
        
        const handleSubmit = (e) =>{

            e.preventDefault();

            console.log (formValues)
        }
        
       




        const sendOrder = async () =>  {
            
            const neworder = {
                buyer: {name, telefono , email},
                item: {
                    stet
                },
            total: result
         };
      
        const {id} = await  addDoc(collection(db, 'NewOrder'), neworder);
      
       
      
        console.log('Usuario! esta es tu orderId nueva', id);
      }


     













    return (
        <div>
            <h1>Su carrito</h1>
                    
                        
                                    <Grid container>
                                            {
                                                stet.map( p => {
                                                   
                                                    return(
                                                        <Grid item xs={3.5} >
                                                            <Box border={2} margin={3}>
                                                        
                                                            <h2>{p.title}</h2>
                                                            <img src={p.image} className="imagen" alt = 'imagen'></img>
                                                            <hr  />
                                                            <h3>Cantidad: {p.cantidad}</h3>
                                                            <h3> ${p.price}</h3>
                                                            
                                                            <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />} 
                                                                onClick={() => handlDelete(p.id)}
                                                            >Eliminar</Button>
                                                        </Box>
                                                        </Grid>
                                                    )
                                                    })
                                            }
                                    </Grid>

                              
           <hr  />
                 <h1>Total a pagar: ${result}</h1>
                                            
                                            


            <hr  />
            

                                        
            <Button variant="contained" color="primary" onClick={handleOpen}>Finalizar compra</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >



                <Box sx={style}>

                    
                <Typography id="modal-modal-title" variant="h6" component="h2">
                      Favor de completar los datos
                <form onSubmit={handleSubmit}>
                <label>
                <input
                    type="text"
                    name="name"
                    className="from-control"
                    placeholder='Tu Nombre'
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <br  />
                     
                <input
                    type="text"
                    name="email"
                    className="from-control"
                    placeholder='const@email.com'
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <br/>
                    
                <input
                    type="number"
                    name="telefono"
                    className="from-control"
                    placeholder='Telefono'
                    autoComplete="off"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    value={ telefono }
                    onChange={ handleInputChange }
                />
                  
                </label>
               


                
                 </form>                          
                 </Typography>
                 <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Nos pondremos en contacto con usted para gestionar el cobro y envio.
                    <hr />
                    Total a pagar ${result}
                </Typography>

                    <button onClick={sendOrder}>
                    Recibir numero de gestion
                    </button>  
                    <h2>aca va el id</h2>
                                          
                </Box>
            </Modal>


            <hr/>





            <Button variant="contained" color="primary" ><ArrowBackIcon/>
            <Link to="/" className="link">Regresar</Link>
            </Button>
           

            
        </div>
    )
}
