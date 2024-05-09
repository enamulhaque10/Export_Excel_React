import './App.css';
import ExportExcel from './Excelexport';

function App() {

  const excelData =[
    {
      "First Name": "aminul",
      "Last Name": "Islam",
      "Employee Id": "001",
      "Dob": "10-12-2000",
      "Phone": "01845678921"
    },
    {
      "First Name": "jalil",
      "Last Name": "khondok",
      "Employee Id": "002",
      "Dob": "10-12-2001",
      "Phone": "01845678921"
    },
    {
      "First Name": "muaaz",
      "Last Name": "Islam",
      "Employee Id": "003",
      "Dob": "10-12-2004",
      "Phone": "01845678921"
    },
    {
      "First Name": "aminul",
      "Last Name": "Islam",
      "Employee Id": "001",
      "Dob": "10-12-2000",
      "Phone": "01845678921"
    }
  ]
  return (
    <div className="App">
      <h1 style={{marginTop:"20%"}}>Excel Export</h1>
      <ExportExcel excelData={excelData} fileName={"Excel Export"}/>
    </div>
  );
}

export default App;
