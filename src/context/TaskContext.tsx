import { createContext, ReactNode, useEffect, useState } from "react"

interface TaskProviderProps{
  children: ReactNode;
}

interface TaskType{
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TaskProviderData{
  tasks: TaskType[];
  countTasksCompleted: number;
  handleNewTask: (task : TaskType) => void;
  deleteTask: (id: string) => void;
  toggleTaskCompleted: (id: string) => void;
}

export const TaskContext = createContext<TaskProviderData>({} as TaskProviderData)


export function TaskProvider({children}: TaskProviderProps){
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [countTasksCompleted, setTasksCompleted] = useState(0)

  function handleNewTask(task : TaskType){
    setTasks(state => [task, ...state])
  }

  function deleteTask(id: string){
    const taskWithoutDeletedOne = tasks.filter(task => task.id !== id)
    setTasks(taskWithoutDeletedOne)
  }

  function toggleTaskCompleted(id: string){
    const taskStatusCompleted = tasks.map(task => {
      if(task.id === id){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasks(taskStatusCompleted)
  }

  useEffect(() => {
    const tasksCompleted = tasks.reduce((acc, task) => task.isCompleted === true ? acc + 1 : acc, 0)
    setTasksCompleted(tasksCompleted)
  },[tasks])
  return(
    <TaskContext.Provider value={{handleNewTask, deleteTask, toggleTaskCompleted, countTasksCompleted, tasks}}>
      {children}
    </TaskContext.Provider>
  )
}