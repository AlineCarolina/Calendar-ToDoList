import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { post, request, deleteTask } from '../services/api';
import 'react-calendar/dist/Calendar.css';
import '../styles/Home.css';

function Home() {
  const [date, setDate] = useState(new Date());
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
    });

  const handleChangeDate = date => {
    setDate(date);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    setInput({
      data: `${day}-${month}-${year}`
    })
  };

  const handleChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
  };

  const postItem = async (e) => {
    e.preventDefault();
    const data = await post('/', input);
  };

  return (
    <div id="div-page">
      <Calendar onChange={handleChangeDate} value={date} />
      <div className='div-form'>
        <div className='form-task'>
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
              value={input.data}
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
            onClick={ (e) => postItem(e) }
          >
            Add
          </button>
        </div>
      </div>
      {list.map(item => (
        <div key={item._id} className="task">
          <h3>{item.titulo}</h3>
          <p>{item.descrição}</p>
          <p>{item.data}</p>
          <p>{item.hora}</p>
          <p>{item.duração}</p>
          <p>{item.atributo}</p>
          <button
            type="button"
            onClick={ () => deleteTask(`/${item._id}`) }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home;