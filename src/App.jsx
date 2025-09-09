import { OverviewBar } from "./components/OverviewBar"
import { NavBar } from "./components/NavBar"
import { SideBar } from "./components/SideBar"
import { Transactions } from "./components/Transactions"
import { Table } from "./components/Table"

function App() {
  

  return (
    <div>
      <SideBar></SideBar>
      
      <div className="border-b border-gray-300 bg-white sm:pl-64">
        <NavBar></NavBar>
      </div>

      <div className="sm:ml-64 m-5 mb-0 grid gap-8">
        <OverviewBar></OverviewBar>

        <div className="grid gap-6">
          <Transactions></Transactions>
          <Table></Table>
        </div>
      </div>
    </div> 
  )
}

export default App
