import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  // state that will be used to get the date form the Form component and distribut it to the Table one
  const [formData, setFormData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <div className="title">
          <h1 className="box">HRnet</h1>
        </div>
        <EmployeeForm setShowTable={setShowTable} setFormData={setFormData} />
        {showTable && (
          <div className="table-display">
            <EmployeeTable data={formData} setShowTable={setShowTable} />
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
}

export default App;
