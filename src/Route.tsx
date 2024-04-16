import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
// import Aboutpage from './pages/Aboutpage';

export default function App() {
  return (
    <Router>
      <Route path="/" Component={Homepage} />
      {/* <Route path="/Aboutpage" component={Aboutpage} /> */}
    </Router>
  );
}