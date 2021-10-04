import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";

import AddClassApplication  from "./components/pages/AddStudent/AddStudent";
import viewallnotaccepted from "./components/pages/VIew All not accepted student/notaccepted";
import viewallaccepted from "./components/pages/VIew All accepted student/accepted";


function App() {
  return (
    <div>
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
        

          <Route path="/" exact component={AddClassApplication} />
          <Route path="/viewallnotaccepted" exact component={viewallnotaccepted}/> 
          <Route path="/viewallaccepted" exact component={viewallaccepted} />




        </Switch>
      </Router>
    </div>
  );
}

export default App;
