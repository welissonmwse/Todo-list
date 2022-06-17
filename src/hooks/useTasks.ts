import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export function useTasks(){
  const context = useContext(TaskContext)

  return context
}