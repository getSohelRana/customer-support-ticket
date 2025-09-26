import Navar from './components/Navbar/Navar'
import './App.css'
import Banner from './components/Navbar/banner/Banner'
import IssueCard from './components/issueCard/IssueCard'
import TaskStatus from './components/taskStatus/TaskStatus'
import { Suspense, useState } from 'react'

const fetchTicket = async () => {
  const res = await fetch('./ticket.json')
  return res.json()
}
const ticketPromise = fetchTicket()
function App() {

  const [progress, setProgress] = useState(0)
 
  return (
    <>
      <Navar></Navar>
      <Banner progress={progress}></Banner>

      <Suspense fallback={<div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-blue bg-opacity-10 z-50">
        <span className="loading loading-spinner text-warning"></span>
      </div>}>
        <IssueCard ticketPromise={ticketPromise} setProgress={setProgress}></IssueCard>
      </Suspense>
      <TaskStatus>

      </TaskStatus>
    </>
  )
}

export default App
