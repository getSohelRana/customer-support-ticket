import Navar from './components/Navbar/Navar'
import './App.css'
import Banner from './components/Navbar/banner/Banner'
import IssueCard from './components/issueCard/IssueCard'
import TaskStatus from './components/taskStatus/TaskStatus'
import { Suspense } from 'react'

const fetchTicket = async() => {
  const res = await fetch('./ticket.json')
  return res.json()
}

function App() {
  const ticketPromise = fetchTicket()
 
  return (
    <>
      <Navar></Navar>
      <Banner></Banner>
    
      <Suspense fallback = {<div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-blue bg-opacity-10 z-50">
            <span className="loading loading-spinner text-warning"></span>
          </div>}>
        <IssueCard ticketPromise = {ticketPromise}></IssueCard>
      </Suspense>
      <TaskStatus>
        
      </TaskStatus>
    </>
  )
}

export default App
