import PropTypes from 'prop-types';
import React from 'react';
import { Input } from 'components/Input/Input';
import { Box,Btn } from './InputForm.styled';
import data from '../../data/data.json';

    // pattern:"\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    // "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
   const INITIAL_STATE = {
        name: '',
        number: '',
      }

class InputForm extends React.Component{ 
    
    state = {...INITIAL_STATE}

      handleInputChange = evt => {
        let target = evt.currentTarget;
        this.setState({[target.name]:target.value})
        
      };


    
      
      handleSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit({...this.state});
        this.reset();
      };
    reset = () => {
        this.setState({ ...INITIAL_STATE });
      };
    
    render(){
        return(
            <Box  onSubmit={this.handleSubmit}>

              {/* 
              Input в папке components/Input/Input.jsx

              Input:const Input = ({value,onChange,type,pattern,name,title,titleBox}) =>{
                  return(<>
                  <Title>{titleBox}
                  <ContactInput
                  value={value}
                  onChange={onChange}
                  type={type}
                  pattern={pattern}
                  name={name}
                  title={title}
                  required/></Title>
                  </> 
                  data в папке src/data/data.json
                  data: [{
                      "titleBox": "Name",
                      "type":"text",
                      "name": "name",
                      "pattern": "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                      "title": "Name may contain only letters, apostrophe, dash and spaces. For example Adrian,Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" },
                      {
                      "titleBox": "Number",
                      "type":"tel",
                      "name":"number",
                      "pattern": "[0-9]{3}-[0-9]{2}-[0-9]{2}",
                      "title":"222-22-22"}]
                      */}
            {data.map(d=>(<Input 
            key={d.name}
            onChange={this.handleInputChange}
            value={this.state[d.name]}   
            type={d.type}
            name={d.name}
            pattern={d.pattern}
            title={d.title}
            titleBox={d.titleBox} 
            />))}
            {/* Btn в папке components/InutForm/InutForm.styled.jsx 
            Btn:onst Btn = styled.button`
                width:100px;
                display:block;
                background-color:#FFCCE5;
                border:none;
                border-radius:4px;
                padding:10px;
                cursor:pointer;
                :hover,
                :focus{
                    border:2px solid #00FFFF;
                }

                `;*/}
            <Btn type="submit">Add contact</Btn>
            </Box>
        )
    }
    
}
export {InputForm}



InputForm.popTypes ={
  onSubmit:PropTypes.func.isRequired
}