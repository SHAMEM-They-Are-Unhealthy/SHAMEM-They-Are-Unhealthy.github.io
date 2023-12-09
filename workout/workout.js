
class Index{
    constructor(id, title,img, alt, desc, introBullet, bullet1, bullet2, bullet3, bullet4){
        this.id = id;
        this.title = title;
        this.img = img;
        this.alt = alt;
        this.desc = desc;
        this.introBullet = introBullet;
        this.bullet1 = bullet1;
        this.bullet2 = bullet2;
        this.bullet3 = bullet3;
        this.bullet4 = bullet4;
    }
}

const index1 = new Index(1,"Light Activity","light.jpg","Elderly couple walking on a path", "Light activity is moving rather than sitting or lying down", "Examples of light activity include:","Getting up to make a cup of tea", "Move around your home","Walking at a slow pace","Cleaning and Dusting"  );
const index2 = new Index(2,"Moderate intensity acitvity", "moderate.jpg","Dance for fitness class","Moderate intensity activity will raise raise your heart rate, make you breathe faster and feel warmer. You should be able to talk, but not sing", "Examples of moderate activity include:", "Walking for health", "Pushing a lawnmower", "Doubles Tennis" , "Dance for fitness" );
const index3 = new Index(3,"Vigorous intensity activity","vigerous.jpg","Couple jogging", "Vigorous activity makes you breathe hard and fast. In general, 75 minutes out vigorous intensity activity can give similar health benefots to 150 minutes of moderate intensity activity", "Examples of vigorous activities include:", "Running", "Aerobics", "Singles Tennis", "Dance for fitness" );
const index4 = new Index(4,"Muscle Strengthening Activity","muscle.jpg","Two people swingning kettlebells", "Strengthing muscles can be done at home or in the gym, you should do them to the point where you need a short rest before repeating the activity","Examples of Muscle-strengthening activities include:", "Carrying heavy shopping bags", "Heavy gardening (Digging)", "Lifting weights", "Yoga");

const index = [];
index.push(index1);
index.push(index2);
index.push(index3);
index.push(index4);


console.log(index.length);

const sectionCenter = document.querySelector("#section-center");
function loadContent(){
    let displayItem = index.map((item)=>{
        return`
        <article class="service">
            <h1 class="title">${item.title}</h1>
            <div class="row">
                <img src=${item.img}  class="photo"/>
                <div class="service-text">
                    <h2 class="desc"><b>${item.desc}</b></h2>
                    <h2 class="introBullet">${item.introBullet}</h2>
                    <ul>
                        <li class="bullet">${item.bullet1}</li>
                        <li class="bullet">${item.bullet2}</li>
                        <li class="bullet">${item.bullet3}</li>
                        <li class="bullet">${item.bullet4}</li>
                    </ul>
                </div>
            </div>
        </article>
        `;
        
    });
    displayItem = displayItem.join("");
    console.log(displayItem);
    sectionCenter.innerHTML = displayItem;
};

window.addEventListener("DOMContentLoaded", loadContent, false);
