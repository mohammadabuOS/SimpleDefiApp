// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


// import Home component
import Home from "./pages/Home";
// import About component
import Markets from "./pages/Markets";
// import About component
import NFTs from "./pages/NFTs";

function App() {
return (
	<>
	{/* This is the alias of BrowserRouter i.e. Router */}
	<Router>
		<Routes>
      {/* This route is for home component
      with exact path "/", in component props
      we passes the imported component*/}
      <Route path="/" element={<Home/>} />
        
      {/* This route is for about component
      with exact path "/about", in component
      props we passes the imported component*/}
      <Route path="/Markets" element={<Markets/>} />

      {/* This route is for about component
      with exact path "/about", in component
      props we passes the imported component*/}
      <Route path="/NFTs" element={<NFTs/>} />
        
      {/* If any route mismatches the upper
      route endpoints, then path="*"
      redirects app to home component with to="/" */}
      <Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	</Router>
	</>
);
}

export default App;