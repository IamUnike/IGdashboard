import Nav from "./components/Nav";
import Bio from "./components/Bio";
import Gallery from "./components/Gallery";


const App = () => {
    return ( 
        <>
            <Nav />
            
            <div className="container">
                <Bio />
                <Gallery />
            </div>
        </>
     );
}
 
export default App;