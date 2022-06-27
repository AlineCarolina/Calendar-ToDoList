import React, { useState, useEffect } from 'react';
import { post, request } from '../services/api';

function Input() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState({
    titulo: '',
    descrição: '',
    data: '',
    hora: '',
    duração: '',
    atributo: ''
  });

  useEffect(() => {
    request('/')
      .then(response => {
        setList(response);
        }
      );
  }, []);

  const handleChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
    console.log(input);
  }

  const postItem = async () => {
    const data = await post('/', input)
    console.log(data);
  };  

  return (
    <div>
      {list.map(item => (
        <div key={item._id}>
        <h1>{item.itemList}</h1>
        </div>
      ))}
      <label>
        Título
        <input
          type="text"
          onChange={ (e) => handleChange(e) }
          name="titulo"
        />
      </label>
      <label>
        Descrição
        <input
          type="text"
          onChange={ (e) => handleChange(e) }
          name="descrição"
        />
      </label>
      <label>
        Data
        <input
          type="text"
          onChange={ (e) => handleChange(e) }
          name="data"
        />
      </label>
      <label>
        Hora
        <input
          type="text"
          onChange={ (e) => handleChange(e) }
          name="hora"
        />
      </label>
      <label>
        Duração
        <input
          type="text"
          onChange={ (e) => handleChange(e) }
          name="duração"
        />
      </label>
      <label>
        Atributo
        <input
          type="text"
          onChange={ (e) => handleChange(e) }
          name="atributo"
        />
      </label>
        <button
          type="button"
          onClick={ () => postItem() }
        >
          Add
        </button>
    </div>
  );
}

export default Input;