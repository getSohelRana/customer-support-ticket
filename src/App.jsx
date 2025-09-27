import Navar from './components/Navbar/Navar'
import './App.css'
import Banner from './components/Navbar/banner/Banner'
import IssueCard from './components/issueCard/IssueCard'
import TaskStatus from './components/taskStatus/TaskStatus'
import SectionTitle from './components/SectionTitle/SectionTitle'
import { ToastContainer} from 'react-toastify';

import { Suspense, useState } from 'react'
import Footer from './components/Footer/Footer'

const fetchTicket = async () => {
  const res = await fetch('./ticket.json')
  return res.json()
}
const ticketPromise = fetchTicket()
function App() {

  const [progress, setProgress] = useState(0)
  const [resolved , setResolved] = useState(0)
  const [task , setTask] = useState([])
  const removeTask = (t) => {
    console.log(t)
  }
   // console.log(task)
  return (
    <>
      <Navar></Navar>
      <Banner progress={progress} resolved={resolved}></Banner>
      <SectionTitle></SectionTitle>
      <Suspense fallback={<div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-blue bg-opacity-10 z-50">
        <span className="loading loading-spinner text-warning"></span>
      </div>}>
        <IssueCard task = {task} setTask = {setTask} ticketPromise={ticketPromise} setProgress={setProgress} ></IssueCard>
      </Suspense>

      <TaskStatus removeTask = {removeTask} task = {task} setResolved={setResolved}> </TaskStatus>
      <Footer></Footer>

      <ToastContainer />
    </>
    
  )
}

export default App
