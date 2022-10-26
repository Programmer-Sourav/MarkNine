import "./styles.css";
import React from "react";
import { useState } from "react";

const foodDetails = {
  nonveg: [
    {
      name: "Chicken Manchuriyan",
      rating: "4.8",
      description:
        "It is a chineese dish. It is a sweet delicious dish made out of marinated chicken, various knd of sauces.",
      imageUrl:
        "https://www.kannammacooks.com/wp-content/uploads/chicken-manchurian-recipe-dry-restaurant-style-3.jpg",
      id: "1"
    },

    {
      name: "Lucknow Chicken Biryani",
      rating: "4.9",
      description:
        "It is the most royal dish in this world. Authentic Biryani with authentic secret spices of Lucknow.",
      imageUrl:
        "https://www.licious.in/blog/wp-content/uploads/2020/05/shutterstock_1048188121.jpg",
      id: "2"
    },

    {
      name: "Chicken Schezwan",
      rating: "4.5",
      description:
        "It is a chineese dish. It is made by tossing crisp chicken in schezwan sauces.",
      imageUrl:
        "https://www.masala.tv/wp-content/uploads/2021/09/schezwan-chickenn.jpg",
      id: "3"
    },

    {
      name: "Fish Paturi",
      rating: "4.8",
      description:
        "Fish paturi is a traditional bengali dish. Use of mustard seeds and mustard oil is prominent in this dish.",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/moumita.malla-gmail.com/Bhetki_Macher_PaturiBarramundi_Fish_Wrapped_in_Banana_Leaf_original-3_1600.jpg",
      id: "4"
    }
  ],

  veg: [
    {
      name: "Gobi Manchuriyan",
      rating: "4.8",
      description:
        "It is a chineese dish. It is a sweet delicious dish made out of marinated cauli flower, various knd of sauces.",
      imageUrl:
        "https://www.kannammacooks.com/wp-content/uploads/chicken-manchurian-recipe-dry-restaurant-style-3.jpg",
      id: "5"
    },

    {
      name: "Veg Biryani",
      rating: "4.7",
      description:
        "It is a pure veg dish for those who loves to have biryani. It contains cottage cheeze, mashrooms and seasoned spicces.",
      imageUrl:
        "https://www.licious.in/blog/wp-content/uploads/2020/05/shutterstock_1048188121.jpg",
      id: "6"
    },

    {
      name: "Paneer Butter Masala",
      rating: "4.9",
      description:
        "It is a punjabi dish. It is made by tossing crisp cottage cheeze in cream and sauces.",
      imageUrl:
        "https://www.masala.tv/wp-content/uploads/2021/09/schezwan-chickenn.jpg",
      id: "7"
    },

    {
      name: "Mixed veg",
      rating: "4.5",
      description: "It is made of various seasoned veggies and spices.",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/moumita.malla-gmail.com/Bhetki_Macher_PaturiBarramundi_Fish_Wrapped_in_Banana_Leaf_original-3_1600.jpg",
      id: "8"
    }
  ],
  vegan: [
    {
      name: "Gobi Manchuriyan",
      rating: "4.8",
      description:
        "It is a chineese dish. It is a sweet delicious dish made out of marinated cauli flower, various knd of sauces.",
      imageUrl:
        "https://www.kannammacooks.com/wp-content/uploads/chicken-manchurian-recipe-dry-restaurant-style-3.jpg",
      id: "9"
    },

    {
      name: "Veg Biryani",
      rating: "4.7",
      description:
        "It is a pure veg dish for those who loves to have biryani. It contains cottage cheeze, mashrooms and seasoned spicces.",
      imageUrl:
        "https://www.licious.in/blog/wp-content/uploads/2020/05/shutterstock_1048188121.jpg",
      id: "10"
    },

    {
      name: "Palak  Masala",
      rating: "4.9",
      description:
        "It is a punjabi dish. It is made by tossing crisp cottage cheeze in sauces.",
      imageUrl:
        "https://www.masala.tv/wp-content/uploads/2021/09/schezwan-chickenn.jpg",
      id: "11"
    },

    {
      name: "Mixed veg",
      rating: "4.5",
      description: "It is made of various seasoned veggies and spices.",
      imageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/moumita.malla-gmail.com/Bhetki_Macher_PaturiBarramundi_Fish_Wrapped_in_Banana_Leaf_original-3_1600.jpg",
      id: "12"
    }
  ]
};

export default function App() {
  const [foodType, setFoodType] = useState("veg");

  function onClickHandler(foodType) {
    setFoodType(foodType);
  }

  return (
    <div className="App">
      <h1>Recommend Food</h1>
      <p>Click and get best recommendations.</p>
      {Object.keys(foodDetails).map((foodType, index) => {
        return (
          <button onClick={() => onClickHandler(foodType)} key={index}>
            {foodType}
          </button>
        );
      })}

      <ul>
        {foodDetails[foodType].map((food) => {
          return (
            <div key={food.id}>
              <img src={food.imageUrl} alt="food pic" />
              <div>
                <h2>Food- {food.name}</h2>
                <h4>Rating - {food.rating}</h4>
                <p>{food.description}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
