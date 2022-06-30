import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { post, request, update, deleteTask } from '../services/api';
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
    duração: ''
  });
  const [controll, setControll] = useState(false)

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
    setInput({
      titulo: '',
      descrição: '',
      data: '',
      hora: '',
      duração: ''
    });
  };

  const updateTask = async (url, task) => {
    setInput({
      titulo: `${task.titulo}`,
      descrição: `${task.descrição}`,
      data: `${task.descrição}`,
      hora: `${task.descrição}`,
      duração: `${task.descrição}`,
      url: url,
    });
   setControll(true)
  };

  const updateItem = async (e) => {
    e.preventDefault();
    const data = await update(input.url, input);
    setInput({
      titulo: '',
      descrição: '',
      data: '',
      hora: '',
      duração: ''
    });
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
              value={input.titulo}
            />
          </label>
          <label>
            Descrição
            <input
              type="text"
              onChange={ (e) => handleChange(e) }
              name="descrição"
              value={input.descrição}
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
              value={input.hora}
            />
          </label>
          <label>
            Duração
            <input
              type="text"
              onChange={ (e) => handleChange(e) }
              name="duração"
              value={input.duração}
            />
          </label>
          {
            controll === false &&
            <button
            type="button"
            onClick={ (e) => postItem(e) }
            id="button-add"
          >
            Add
          </button>
          }
          {
            controll === true &&
            <button
            type="button"
            onClick={ (e) => updateItem(e) }
            id="button-up"
          >
            Up
          </button>
          }
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
          <button
            type="button"
            onClick={ () => updateTask(`/${item._id}`, item) }
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home;