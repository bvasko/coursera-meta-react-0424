import { useMealsListContext } from "../providers/MealsProvider";
import MenuSection from "./MenuSection";
import MyVideo from "./MyVideo";

const MenuPage = () => {

    const { meals, setMealsList } = useMealsListContext();
    const sideMenu = {
        float: "left", 
        width: "20%", 
        "textAlign": "left", 
        backgroundColor: "#D9D9D9",
        padding: "30px"}
    
    function handleClick(e) {
        setMealsList({...meals, selected: e.target.innerHTML})
    }

    return (
        <div style={{width: "100%", height: "100%", float: "left"}}>
            <div style={sideMenu}>
           <h2>Menu</h2>
           
           {meals.menuItems.map((meal, index) => (
                <h3 onClick={handleClick} key={index}>
                    {Object.keys(meal)}
                </h3>
           ))}
           </div>
                <MenuSection 
                    selected={meals.selected}
                    data={meals.menuItems.filter(
                        value => Object.keys(value)[0] === meals.selected)[0]
                    } />
            <MyVideo url="https://www.youtube.com/watch?v=rSLiOqJ2egU" />
        </div>
    )
}

export default MenuPage;