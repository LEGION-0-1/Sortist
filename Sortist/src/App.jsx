import Header from "./Components/Header/Header.jsx"
import TaskInput from "./Components/TaskInput/TaskInput.jsx"
import Filters from "./Components/Filters/Filters.jsx"
import TaskList from "./Components/TaskList/TaskList.jsx"

function App() {
  return(
    <>
      <Header />
      <Filters />
      <TaskList />
      <TaskInput />
    </>
  )
}

export default App;