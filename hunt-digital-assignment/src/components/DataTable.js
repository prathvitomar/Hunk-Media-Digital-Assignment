// import React, { useState } from 'react';
// import DatePicker from '@mui/lab/DatePicker';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function DataTable() {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [excludedDates, setExcludedDates] = useState([]);
//   const [leadCount, setLeadCount] = useState(0);

//   const handleStartDateChange = (date) => {
//     setStartDate(date);
//   };

//   const handleEndDateChange = (date) => {
//     setEndDate(date);
//   };

//   const handleExcludeDateChange = (date) => {
//     if (!excludedDates.includes(date)) {
//       setExcludedDates([...excludedDates, date]);
//     }
//   };

//   const handleLeadCountChange = (event) => {
//     setLeadCount(event.target.value);
//   };

//   const calculateExpectedLeadCount = () => {
//     // Calculate expected lead count based on lead count and the number of days
//     // (excluding excluded dates)
//     const excludedDateSet = new Set(excludedDates.map((date) => date.toDateString()));
//     const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
//     const daysExcluded = excludedDates.filter((date) =>
//       date >= startDate && date <= endDate
//     ).length;
//     const daysIncluded = totalDays - daysExcluded;
//     return Math.round((leadCount / daysIncluded) * totalDays);
//   };

//   const handleSave = () => {
//     // Use Ajax to submit data
//     // You can make an API call here to send the data to your server
//     console.log("Submitting data:", {
//       startDate,
//       endDate,
//       excludedDates,
//       leadCount,
//       expectedLeadCount: calculateExpectedLeadCount(),
//     });
//   };


//   //   return (
// //     <div>
// //       <div>
// //         <div>
// //           <label>Start Date:</label>
// //           <DatePicker
// //             value={startDate}
// //             onChange={handleStartDateChange}
// //             renderInput={(params) => <TextField {...params} />}
// //           />
// //         </div>
// //         <div>
// //           <label>End Date:</label>
// //           <DatePicker
// //             value={endDate}
// //             onChange={handleEndDateChange}
// //             renderInput={(params) => <TextField {...params} />}
// //           />
// //         </div>
// //         <div>
// //           <label>Exclude Dates:</label>
// //           <DatePicker
// //             value={null}
// //             onChange={handleExcludeDateChange}
// //             disablePast
// //             shouldDisableDate={(date) => excludedDates.includes(date)}
// //             renderInput={(params) => <TextField {...params} />}
// //           />
// //         </div>
// //         <div>
// //           <label>Number of Leads:</label>
// //           <TextField
// //             type="number"
// //             value={leadCount}
// //             onChange={handleLeadCountChange}
// //           />
// //         </div>
// //         <div>
// //           <Button variant="contained" color="primary" onClick={handleSave}>
// //             Save
// //           </Button>
// //         </div>
// //       </div>
// //       <div>
// //         {startDate && endDate && (
// //           <div>
// //             <p>Month: {startDate.toLocaleString('default', { month: 'long' })}</p>
// //             <p>Year: {startDate.getFullYear()}</p>
// //             <p>Number of Days: {calculateExpectedLeadCount()}</p>
// //           </div>
// //         )}
// //       </div>
// //       <TableContainer component={Paper}>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>#</TableCell>
// //               {/* Add your table headers here */}
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {/* Add your table rows here */}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //     </div>
// //   );




// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }


// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];


// return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default DataTable;






























// import React, { useState } from 'react';
// import DatePicker from '@mui/lab/DatePicker';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import TableContainer from '@mui/material/TableContainer';
// import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import TableBody from '@mui/material/TableBody';
// import Paper from '@mui/material/Paper';

// function App() {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [excludedDates, setExcludedDates] = useState([]);
//   const [leadCount, setLeadCount] = useState(0);
//   const [rows, setRows] = useState([]); // Define your data rows here

//   const handleStartDateChange = (date) => {
//     setStartDate(date);
//   };

//   const handleEndDateChange = (date) => {
//     setEndDate(date);
//   };

//   const handleExcludeDateChange = (date) => {
//     if (!excludedDates.includes(date)) {
//       setExcludedDates([...excludedDates, date]);
//     }
//   };

//   const handleLeadCountChange = (event) => {
//     setLeadCount(event.target.value);
//   };

//   const calculateExpectedLeadCount = () => {
//     // Calculate expected lead count based on lead count and the number of days
//     // (excluding excluded dates)
//     const excludedDateSet = new Set(excludedDates.map((date) => date.toDateString()));
//     const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
//     const daysExcluded = excludedDates.filter((date) =>
//       date >= startDate && date <= endDate
//     ).length;
//     const daysIncluded = totalDays - daysExcluded;
//     return Math.round((leadCount / daysIncluded) * totalDays);
//   };

//   const handleSave = () => {
//     // Use Ajax to submit data
//     // You can make an API call here to send the data to your server
//     console.log("Submitting data:", {
//       startDate,
//       endDate,
//       excludedDates,
//       leadCount,
//       expectedLeadCount: calculateExpectedLeadCount(),
//     });
//   };

  
//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Action</TableCell>
//               <TableCell>ID</TableCell>
//               <TableCell>Start Date</TableCell>
//               <TableCell>End Date</TableCell>
//               <TableCell>Month, Year</TableCell>
//               <TableCell>Date Excluded</TableCell>
//               <TableCell>Number of Days</TableCell>
//               <TableCell>Lead Count</TableCell>
//               <TableCell>Expected DDR</TableCell>
//               <TableCell>Last Updated</TableCell>

//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow
//                 key={row.name}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.name}
//                 </TableCell>
//                 <TableCell align="right"></TableCell>
//                 <TableCell align="right"></TableCell>
//                 <TableCell align="right"></TableCell>
//                 <TableCell align="right"></TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default App;


























import React, { useState } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';

function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [excludedDates, setExcludedDates] = useState([]);
  const [leadCount, setLeadCount] = useState(0);
  const [rows, setRows] = useState([]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleExcludeDateChange = (date) => {
    if (!excludedDates.includes(date)) {
      setExcludedDates([...excludedDates, date]);
    }
  };

  const handleLeadCountChange = (event) => {
    setLeadCount(event.target.value);
  };

  const calculateExpectedLeadCount = () => {
    const excludedDateSet = new Set(excludedDates.map((date) => date.toDateString()));
    const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const daysExcluded = excludedDates.filter((date) =>
      date >= startDate && date <= endDate
    ).length;
    const daysIncluded = totalDays - daysExcluded;
    return Math.round((leadCount / daysIncluded) * totalDays);
  };

  const handleSave = () => {
    // Use Ajax to submit data
    console.log("Submitting data:", {
      startDate,
      endDate,
      excludedDates,
      leadCount,
      expectedLeadCount: calculateExpectedLeadCount(),
    });
  };

  return (
    <div>
      <div>
        <div>
          <label>Start Date:</label>
          <DatePicker
            value={startDate}
            onChange={handleStartDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div>
          <label>End Date:</label>
          <DatePicker
            value={endDate}
            onChange={handleEndDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div>
          <label>Exclude Dates:</label>
          <DatePicker
            value={null}
            onChange={handleExcludeDateChange}
            disablePast
            shouldDisableDate={(date) => excludedDates.includes(date)}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div>
          <label>Number of Leads:</label>
          <TextField
            type="number"
            value={leadCount}
            onChange={handleLeadCountChange}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Action</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Month, Year</TableCell>
              <TableCell>Date Excluded</TableCell>
              <TableCell>Number of Days</TableCell>
              <TableCell>Lead Count</TableCell>
              <TableCell>Expected DDR</TableCell>
              <TableCell>Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>Custom Action</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.endDate}</TableCell>
                <TableCell>
                  {row.startDate &&
                    row.startDate.toLocaleString('default', { month: 'long' })}{' '}
                  {row.startDate && row.startDate.getFullYear()}
                </TableCell>
                <TableCell>{row.excludedDates.join(', ')}</TableCell>
                <TableCell>
                  {row.startDate && row.endDate
                    ? Math.ceil((row.endDate - row.startDate) / (1000 * 60 * 60 * 24))
                    : 0}
                </TableCell>
                <TableCell>{row.leadCount}</TableCell>
                <TableCell>{row.expectedLeadCount}</TableCell>
                <TableCell>{row.lastUpdated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
