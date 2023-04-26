import React from 'react';

//instantiate context with createContext from React API
const MealsContext = React.createContext();

/* [{
    sectionName: "Appetizers",
    sectionData: [{item: "Biryani", price: 12}]
}] 
*/

const menuData = {
    "menuItems": [
        {"Appetizers": [{"Samosas LARGE": 5}, {"Bhaji": 4.75}]},
        {"Vegetarian": [{"Biryani": 12}, {"Dal Tadka": 12}]},
        {"Non-Vegetarian": [{"Chicken Biryani": 12}, {"Boti Kebab": 18}]},
        {"Bread": [{"Naan": 4, "Roti": 3}]},
        {"Dessert": [{"Gulab Jaman": 4}]}
        ],
    "selected": "Appetizers"
    };

// create provider with an ES6 function that accepts children as the sole parameter
const MealsProvider  = ({children}) => {
    
    //instantiate state
    const [meals, setMealsList] = React.useState(menuData);

    return (
        <MealsContext.Provider value={{meals, setMealsList}}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;

