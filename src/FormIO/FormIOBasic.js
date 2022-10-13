import React from 'react';
import ReactDOM from 'react-dom';
import BasicForm from './JSON/BasicForm.json';
import 'formiojs/dist/formio.builder.min.css';
import {Form} from 'react-formio';
import 'bootstrap/dist/css/bootstrap.min.css'


function FormioBasic (){
   function handleSubmit(data){
    console.log(data.data.name)
        console.log(data);
      }


return(
    <div style={{maxWidth: '400px', margin: '50px'}}>
    <Form form={BasicForm} onSubmit={handleSubmit}/>
  </div>
);
}
export default FormioBasic;