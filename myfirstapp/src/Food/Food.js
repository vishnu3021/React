import React from 'react'
import "./Food.css"
import Cards from '../day11/card';

export default function Food() {
    const foodData = [
        {
          category: "Non Veg",
          items: [
            {
              id: 1,
              name: "Grilled Chicken",
              description: "Juicy grilled chicken with a smoky flavor.",
              price: 101,
              image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe.jpg"
            },
            {
              id: 2,
              name: "Mutton Biryani",
              description: "Aromatic rice with tender mutton cooked to perfection.",
              image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe.jpg"
            },
            {
              id: 3,
              name: "Fish Tacos",
              description: "Crispy fish fillets with tangy slaw in a soft taco.",
              image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe.jpg"
            },
            {
              id: 4,
              name: "Chicken Wings",
              description: "Spicy, crispy chicken wings with a hint of tanginess.",
              image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe.jpg"
            },
            {
              id: 5,
              name: "Beef Burger",
              description: "A juicy beef patty with cheese, lettuce, and sauce.",
              image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe.jpg"
            }
          ]
        },
        {
          category: "Veg",
          items: [
            {
              id: 1,
              name: "Veg Pizza",
              description: "A delicious pizza topped with fresh vegetables and cheese.",
              image: "https://via.placeholder.com/150/28A745/FFFFFF?text=Veg+Pizza"
            },
            {
              id: 2,
              name: "Paneer Butter Masala",
              description: "Soft paneer cooked in a rich and creamy tomato sauce.",
              image: "https://via.placeholder.com/150/28A745/FFFFFF?text=Paneer+Butter+Masala"
            },
            {
              id: 3,
              name: "Vegetable Samosa",
              description: "Crispy pastry filled with a flavorful spiced vegetable mix.",
              image: "https://via.placeholder.com/150/28A745/FFFFFF?text=Vegetable+Samosa"
            },
            {
              id: 4,
              name: "Veg Burger",
              description: "A tasty vegetable patty with fresh toppings.",
              image: "https://via.placeholder.com/150/28A745/FFFFFF?text=Veg+Burger"
            },
            {
              id: 5,
              name: "Aloo Tikki",
              description: "Spicy potato patties served with chutney.",
              image: "https://via.placeholder.com/150/28A745/FFFFFF?text=Aloo+Tikki"
            }
          ]
        },
        {
          category: "Milkshakes",
          items: [
            {
              id: 1,
              name: "Chocolate Milkshake",
              description: "Rich chocolate milkshake topped with whipped cream.",
              image: "https://via.placeholder.com/150/FFC107/FFFFFF?text=Chocolate+Milkshake"
            },
            {
              id: 2,
              name: "Vanilla Milkshake",
              description: "Smooth vanilla milkshake with a hint of sweetness.",
              image: "https://via.placeholder.com/150/FFC107/FFFFFF?text=Vanilla+Milkshake"
            },
            {
              id: 3,
              name: "Strawberry Milkshake",
              description: "Creamy milkshake with fresh strawberry flavor.",
              image: "https://via.placeholder.com/150/FFC107/FFFFFF?text=Strawberry+Milkshake"
            },
            {
              id: 4,
              name: "Banana Milkshake",
              description: "Refreshing banana milkshake with a natural sweet taste.",
              image: "https://via.placeholder.com/150/FFC107/FFFFFF?text=Banana+Milkshake"
            },
            {
              id: 5,
              name: "Mango Milkshake",
              description: "Deliciously smooth milkshake made with ripe mangoes.",
              image: "https://via.placeholder.com/150/FFC107/FFFFFF?text=Mango+Milkshake"
            }
          ]
        },
        {
          category: "Desserts",
          items: [
            {
              id: 1,
              name: "Chocolate Cake",
              description: "Rich and moist chocolate cake with a creamy frosting.",
              image: "https://via.placeholder.com/150/9C27B0/FFFFFF?text=Chocolate+Cake"
            },
            {
              id: 2,
              name: "Cheesecake",
              description: "Creamy cheesecake with a buttery graham cracker crust.",
              image: "https://via.placeholder.com/150/9C27B0/FFFFFF?text=Cheesecake"
            },
            {
              id: 3,
              name: "Ice Cream Sundae",
              description: "Vanilla ice cream topped with chocolate syrup and sprinkles.",
              image: "https://via.placeholder.com/150/9C27B0/FFFFFF?text=Ice+Cream+Sundae"
            },
            {
              id: 4,
              name: "Brownie",
              description: "Warm, fudgy brownie served with a scoop of vanilla ice cream.",
              image: "https://via.placeholder.com/150/9C27B0/FFFFFF?text=Brownie"
            },
            {
              id: 5,
              name: "Tiramisu",
              description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers.",
              image: "https://via.placeholder.com/150/9C27B0/FFFFFF?text=Tiramisu"
            }
          ]
        }
      ];
      
    
  return (
    <div className='itemsContainer'>
      
         {/* <h1 style={{textAlign:"center"}}>food page</h1> */}
      {foodData.map((x)=>{
        return x.items.map((y=>{
                return ( 
                  
                <div className='items'>
                    <Cards title={y.name} img={y.image} description={y.description} name={y.name}/>
                {/* <img src={y.image} alt="image"  /> */}
               <h2>{y.name}</h2>
               <p>{y.description}</p>
               <button>Add to cart</button>
             
               <h4>Rs:{y?.price}</h4> 
               
               </div>
                )
                    
                  
                
            }))
            
        
      })} 
     
    </div>
  )
}
