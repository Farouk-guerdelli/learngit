let shop= document.getElementById('shop');

let shopitemsData =[{
    id:"wcwc",
    name:"shirt",
    price:45,
    desc:"lorem7",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qUPsHezRJwHeuUHNoQugbo46odaXWI5IHWVINp4wWAUvaCJDwIoZ8wBOJzSJxyTGvCY&usqp=CAU"
    },
    {
        id:"adfa",
        name:"mens suit",
        price:45,
        desc:"lorem7",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qUPsHezRJwHeuUHNoQugbo46odaXWI5IHWVINp4wWAUvaCJDwIoZ8wBOJzSJxyTGvCY&usqp=CAU"
    },
    {
        id:"gwgw",
        name:"office shirt",
        price:45,
        desc:"lorem7",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qUPsHezRJwHeuUHNoQugbo46odaXWI5IHWVINp4wWAUvaCJDwIoZ8wBOJzSJxyTGvCY&usqp=CAU"
    },
    {
        id:"wrw",
        name:"T shirt",
        price:45,
        desc:"lorem7",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qUPsHezRJwHeuUHNoQugbo46odaXWI5IHWVINp4wWAUvaCJDwIoZ8wBOJzSJxyTGvCY&usqp=CAU"
    },
];


let basket =[5];


let generateshop = () => {
    return (shop.innerHTML = shopitemsData
        .map((x)=>{
            let { id, name, price, desc, img } =x; 
            return`
        <div id=product-id-${id} class="item">
            <img width"220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                   <h2>$ ${price}</h2>
                   <div class="buttons">
                       <i onclick="decrement(${id})" class="bi bi-dash"></i>
                       <div id=${id} class="quantity">0</div>
                       <i onclick="increment(${id})" class="bi bi-plus"></i>
                    </div>
                </div>
            </div>
        </div>
`;
    
})
    .join("")) ;
};

generateshop();

let increment = (id) =>{
    let selectedItem = id ;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefiened){
        basket.push({
            id : selectedItem.id,
            item: 1,
        });
    }
    else{
        search.item += 1;
    }
    
    
    console.log(basket);
};
let decrement = (id) =>{
    let selectedItem = id ;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search.item === 0) return;
    
    else{
        search.item -= 1;
    }
    
    
    console.log(basket);
};
let update = () =>{};
