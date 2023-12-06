// <img src=${item.img} class="photo"/>

// class Index{
//     constructor(id, title, desc,introBullet, bullet1, bullet2, bullet3, bullet4){
//         this.id = id;
//         this.title = title;
//         this.desc = desc;
//         this.intoBullet = introBullet;
//         this.bullet1 = bullet1;
//         this.bullet2 = bullet2;
//         this.bullet3 = bullet3;
//         this.bullet4 = bullet4;
//     }
// }
// const index1 = new Index(1,"Exercise Goals", "Older adults should do some type of physical activity every day to help improve health and reduce risk of heart disease and stroke", "Adults aged 65 and over should:","Aim to be physically active everyday, even if it is just light activity", "Do activities that improve strength, balance and flexibility at least 2 days a week","Do at least 150 minutes of moderate intensity activity a week","Reduce time spent sitting or lying down" );
// const index2 = new Index(2,"Light Activity", "Light activity is moving rather than sitting or lying down", "Examples of light activity include:","Getting up to make a cup of tea", "Move around your home","Walking at a slow pace","Cleaning and Dusting"  );
// const index3 = new Index(3,"Moderate intensity acitvity", "Moderate intensity activity will raise raise your heart rate, make you breathe faster and feel warmer. You should be able to talk, but not sing", "Examples of moderate activity include:", "Walking for health", "Pushing a lawnmower", "Doubles Tennis" , "Dance for fitness" );
// const index4 = new Index(4,"Vigorous intensity activity", "Vigorous activity makes you breathe hard and fast. In general, 75 minutes out vigorous intensity activity can give similar health benefots to 150 minutes of moderate intensity activity", "Examples of vigorous activities include:", "Running", "Aerobics", "Singles Tennis", "Dance for fitness" );
// const index5 = new Index(5,"Muscle Strengthening Activity", "Strengthing muscles can be done at home or in the gym, you should do them to the point where you need a short rest before repeating the activity","Examples of Muscle-strengthening activities include:", "Carrying heavy shopping bags", "Heavy gardening (Digging)", "Lifting weights", "Yogs");

// const index = [];
// index.push(index1);
// index.push(index2);
// index.push(index3);
// index.push(index4);
// index.push(index5);

// console.log(index.length);

// const sectionCenter = document.querySelector("#section-center");
// function loadContent(){
//     let displayItem = index.map((item)=>{
//         return`
//         <article class="service">
//         <div>
//             <h1 class="title">${item.title}</h1>
//             <p class="desc"><b>${item.desc}</b></p>
//             <ul>
//                  <li class="bullet1"> ${item.bullet1}</li>
//                  <li class="bullet2">${item.bullet2}</li>
//                  <li class="bullet3">${item.bullet3}</li>
//                  <li class="bullet4">${item.bullet4}</li>
//              </ul>
//         </div>
//         </article>
  
//         `;
        
//     });
//     displayItem = displayItem.join("");
//     console.log(displayItem);
//     sectionCenter.innerHTML = displayItem;
// };

// window.addEventListener("DOMContentLoaded", loadContent, false);

class Index{
    constructor(id, title,img, desc,introBullet, bullet1, bullet2, bullet3, bullet4){
        this.id = id;
        this.title = title;
        this.img = img;
        this.desc = desc;
        this.intoBullet = introBullet;
        this.bullet1 = bullet1;
        this.bullet2 = bullet2;
        this.bullet3 = bullet3;
        this.bullet4 = bullet4;
    }
}
const index1 = new Index(1,"Exercise Goals","goals.jpg" , "Older adults should do some type of physical activity every day to help improve health and reduce risk of heart disease and stroke", "Adults aged 65 and over should:","Aim to be physically active everyday, even if it is just light activity", "Do activities that improve strength, balance and flexibility at least 2 days a week","Do at least 150 minutes of moderate intensity activity a week","Reduce time spent sitting or lying down" );
const index2 = new Index(2,"Light Activity","", "Light activity is moving rather than sitting or lying down", "Examples of light activity include:","Getting up to make a cup of tea", "Move around your home","Walking at a slow pace","Cleaning and Dusting"  );
const index3 = new Index(3,"Moderate intensity acitvity", "moderate.jpg","Moderate intensity activity will raise raise your heart rate, make you breathe faster and feel warmer. You should be able to talk, but not sing", "Examples of moderate activity include:", "Walking for health", "Pushing a lawnmower", "Doubles Tennis" , "Dance for fitness" );
const index4 = new Index(4,"Vigorous intensity activity","vigerous.jpg", "Vigorous activity makes you breathe hard and fast. In general, 75 minutes out vigorous intensity activity can give similar health benefots to 150 minutes of moderate intensity activity", "Examples of vigorous activities include:", "Running", "Aerobics", "Singles Tennis", "Dance for fitness" );
const index5 = new Index(5,"Muscle Strengthening Activity","muscle.jpg", "Strengthing muscles can be done at home or in the gym, you should do them to the point where you need a short rest before repeating the activity","Examples of Muscle-strengthening activities include:", "Carrying heavy shopping bags", "Heavy gardening (Digging)", "Lifting weights", "Yogs");

const index = [];
index.push(index1);
index.push(index2);
index.push(index3);
index.push(index4);
index.push(index5);

console.log(index.length);

const sectionCenter = document.querySelector("#section-center");
function loadContent(){
    let displayItem = index.map((item)=>{
        return`
        <article class="service">
        <div>
            <h1 class="title">${item.title}</h1>
            <img src=${item.img} class="photo"/>
            <p class="desc"><b>${item.desc}</b></p>
            <ul>
                 <li class="bullet1"> ${item.bullet1}</li>
                 <li class="bullet2">${item.bullet2}</li>
                 <li class="bullet3">${item.bullet3}</li>
                 <li class="bullet4">${item.bullet4}</li>
             </ul>
        </div>
        </article>
  
        `;
        
    });
    displayItem = displayItem.join("");
    console.log(displayItem);
    sectionCenter.innerHTML = displayItem;
};

window.addEventListener("DOMContentLoaded", loadContent, false);