import TheTime from "../Time";
import Image from "../Image";
/* Because we have the layout defined, we only need to output what goes into
where Outlet is in layout, which is sandwiched between our main body container.
*/
const Home = () => {
    return ( <>
     <p>Hello World!</p>
     <Image />
     <TheTime />
     </> 
    );
}

export default Home;
