import { useState } from "react";
import ExploreMenu from "../../Component/ExploreMenu/ExploreMenu";
import Header from "../../Component/Header/Header";
import "./Home.css"
import FoodDisplay from "../../Component/FoodDisplay/FoodDisplay";

const Home = () => {
    const [category,setCategory]= useState('All');

    return (
        <div>
            <Header></Header>
            <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
            <FoodDisplay category={category}></FoodDisplay>
        </div>
    );
};

export default Home;