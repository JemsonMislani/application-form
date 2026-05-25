import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Applicant from './Applicant'
import NewApplicant from './NewApplicant'
import UpdateApplicant from './UpdateApplicant'
export default function App() {

  return (
<>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Applicant/>} />
    <Route path='create-applicant' element={<NewApplicant/>}/>
    <Route path='update-applicant' element={<UpdateApplicant/>}/>
  </Routes>
</BrowserRouter>
</>
  )
}