import { useSelector } from "react-redux";
import Homeitem from "../components/Homeitem";
import store from "../store";


const Home = () => {

    const item = useSelector(store => store.items);
    console.log(item);
    return <main>
        <div className="items-container">
            {item.map(item => <Homeitem item={item} key={item.id}/>)}
            
        </div>
    </main>
}

export default Home;