import { useMealsListContext } from "../providers/MealsProvider";
import MenuSection from "./MenuSection";

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
        <div>
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
        </div>
    )
}

export default MenuPage;