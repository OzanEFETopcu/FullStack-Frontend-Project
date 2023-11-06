import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFilter } from '@fortawesome/free-solid-svg-icons'
import TaskItem from "./TaskItem"
import AddTask from "./AddTask"

function Tasks() {

  const [filterState, setFilterState] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [seenAddPage, setSeenAdd] = useState(false);

  // Controls the visibility of add task page
  function togglePopOnAdd() {
    setSeenAdd(!seenAddPage);
  };
  // Controls the filter input
  function toggleFilter() {
    setFilterState(!filterState);
  };

  // Function to handle filtering
  const applyFilter = (e) => {
    e.preventDefault();

    const filtered = tasks.filter(task => {
      const filterTags = filterValue.toLowerCase().split(',').map(tag => tag.trim());
      return filterTags.every(tag => task.tags.includes(tag));
    });
    if (filtered.length === 0) {
      alert('No matching task has been found!');
    }

    setFilteredTasks(filtered);
    toggleFilter();
  }

  // Fetches all the data from the database
  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    getTasks();
  }, []);

  // Handling data fetching and deleting
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3010/tasks');
    const data = await res.json();

    return data;
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3010/tasks/${id}`, { method: 'DELETE' })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  const addTask = async (name, tags, status) => {
    const response = await fetch('http://localhost:3010/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(name, tags, status),
    })
    const data = await response.json()
    setTasks([...tasks, data]);
  }

  const updateTask = async (id, updatedTask) => {
    const res = await fetch(`http://localhost:3010/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: data.name, tags: data.tags, activation_duration: data.activation_duration} : task
      )
    )
  }
  //-------------------------------------

  return (
    <>
      {!filterState && (filteredTasks.length > 0 ? filteredTasks : tasks).map((task, index) => (
        <TaskItem key={index} task={task} onDelete={deleteTask} onUpdate={updateTask}/>
      ))}
      <div>
        <button onClick={() => togglePopOnAdd()}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button onClick={() => toggleFilter()}>
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <button onClick={() => setFilteredTasks([])}>
          Clean filter
        </button>
      </div>
      {filterState ? <>
        <form onSubmit={applyFilter}>
          <input type="text" placeholder='Filter with tags' onChange={e => setFilterValue(e.target.value)} />
          <button type="submit">Apply</button>
        </form>
      </> : null}
      {seenAddPage ? <AddTask toggle={togglePopOnAdd} onAdd={addTask} /> : null}
    </>
  );
}
export default Tasks;