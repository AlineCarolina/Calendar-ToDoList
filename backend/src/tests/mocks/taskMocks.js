const taskMock = {
  titulo: 'Tarefa 1',
  descrição: 'Estudar',
  data: '27-06-2022',
  hora: '14:00',
  duração: '08:00',
  atributo: 'importante',
};

const taskList = [
  {
    titulo: 'Tarefa 1',
    descrição: 'Estudar',
    data: '27-06-2022',
    hora: '14:00',
    duração: '08:00',
    atributo: 'importante',
  },
  {
    titulo: 'Tarefa 2',
    descrição: 'Comer',
    data: '27-06-2022',
    hora: '17:00',
    duração: '00:30',
    atributo: 'importante',
  },
];

module.exports = {
  taskMock,
  taskList,
};
