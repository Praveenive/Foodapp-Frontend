import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Components/Admin/Aboutus';
import AdminFeedback from './Components/Admin/AdminFeedback';
import Allorders from './Components/Admin/Catering/Allorders';
import UpdatecateringStatus from './Components/Admin/Catering/UpdatecateringStatus';
import Menu from './Components/Admin/Menu';
import Addnonveg from './Components/Admin/Non-veg/Addnonveg';
import Nonveg from './Components/Admin/Non-veg/Nonveg';
import Addveg from './Components/Admin/Veg/Addveg';
import Vegeterian from './Components/Admin/Veg/Vegeterian';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CreateCatering from './Components/User/Catering/CreateCatering';
import Usercateringorder from './Components/User/Catering/Usercateringorder';
import Contactus from './Components/User/Contactus';
import UserFeedback from './Components/User/UserFeedback';
import UserMenu from './Components/User/UserMenu';
import UserNonveg from './Components/User/UserNonveg';
import UserVeg from './Components/User/UserVeg';
import UserAbout from './Components/User/UserAbout';
import Homepage from './Components/Homepage';
import Paymentgateway from './Components/Paymentgateway';

function App() {
  const [vegdishes,setVegdishes] =useState([])
  const [nonvegdishes,setNonvegdishes] =useState([])
  const [catering,setCatering] = useState([])
  const [feedback,setfeedback] = useState([])
  const [amount,setAmount] = useState(0)
  const [count,setCount] = useState(0)
  return (
    <div className="App">
   <Routes>
    <Route exact path="/" element={<Homepage/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/admindishes" element={<Menu/>}></Route>
    <Route path="/adminveg" element={<Vegeterian
    vegdishes={vegdishes} setVegdishes={setVegdishes}/>}></Route>
    <Route path='/addveg' element={<Addveg
    vegdishes={vegdishes} setVegdishes={setVegdishes}/>}></Route>
    <Route path="/adminnonveg" element={<Nonveg
    nonvegdishes={nonvegdishes} setNonvegdishes={setNonvegdishes}/>}></Route>
    <Route path="/addnonveg" element={<Addnonveg
    nonvegdishes={nonvegdishes} setNonvegdishes={setNonvegdishes}/>}></Route>
    <Route path="/usermenu" element={<UserMenu/>}></Route>
    <Route path="/userveg" element={<UserVeg
    vegdishes={vegdishes} setVegdishes={setVegdishes}
    amount={amount} setAmount={setAmount} count={count} setCount={setCount}/>}></Route>
    <Route path="/usernonveg" element={<UserNonveg
    nonvegdishes={nonvegdishes} setNonvegdishes={setNonvegdishes} count={count} setCount={setCount}
    amount={amount} setAmount={setAmount}/>}></Route>
    <Route path='/mycateringorder' element={<Usercateringorder
    catering={catering} setCatering={setCatering}/>}></Route>
    <Route path="/createcatering"  element={<CreateCatering
    catering={catering} setCatering={setCatering}/>}></Route>
    <Route path="/cateringallorders" element={<Allorders
    catering={catering} setCatering={setCatering}/>}></Route>
    <Route path='/cateringstatus/:id/:token' element={<UpdatecateringStatus/>}></Route>
    <Route path='/adminaboutus' element={<Aboutus/>}></Route>
    <Route path='/useraboutus' element={<UserAbout/>}></Route>
    <Route path='/contactus' element={<Contactus/>}></Route>
    <Route path='/feedback' element={<UserFeedback
    feedback={feedback} setfeedback={setfeedback}/>}></Route>
    <Route path="/adminfeedback" element = {<AdminFeedback
     feedback={feedback} setfeedback={setfeedback}/>}></Route>
     <Route path="paymentgateway" element={<Paymentgateway
     amount={amount} setAmount={setAmount}
     count={count} setCount={setCount}/>}></Route>
   </Routes>
    </div>
  );
}

export default App
