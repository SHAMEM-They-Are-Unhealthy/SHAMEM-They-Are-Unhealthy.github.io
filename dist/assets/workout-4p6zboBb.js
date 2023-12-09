import"./NavBar-dIRuX06z.js";class s{constructor(e,n,a,l,o,r,c,u,d){this.id=e,this.title=n,this.img=a,this.desc=l,this.intoBullet=o,this.bullet1=r,this.bullet2=c,this.bullet3=u,this.bullet4=d}}const h=new s(1,"Exercise Goals","goals.jpg","Older adults should do some type of physical activity every day to help improve health and reduce risk of heart disease and stroke","Adults aged 65 and over should:","Aim to be physically active everyday, even if it is just light activity","Do activities that improve strength, balance and flexibility at least 2 days a week","Do at least 150 minutes of moderate intensity activity a week","Reduce time spent sitting or lying down"),g=new s(2,"Light Activity","","Light activity is moving rather than sitting or lying down","Examples of light activity include:","Getting up to make a cup of tea","Move around your home","Walking at a slow pace","Cleaning and Dusting"),y=new s(3,"Moderate intensity acitvity","moderate.jpg","Moderate intensity activity will raise raise your heart rate, make you breathe faster and feel warmer. You should be able to talk, but not sing","Examples of moderate activity include:","Walking for health","Pushing a lawnmower","Doubles Tennis","Dance for fitness"),v=new s(4,"Vigorous intensity activity","vigerous.jpg","Vigorous activity makes you breathe hard and fast. In general, 75 minutes out vigorous intensity activity can give similar health benefots to 150 minutes of moderate intensity activity","Examples of vigorous activities include:","Running","Aerobics","Singles Tennis","Dance for fitness"),p=new s(5,"Muscle Strengthening Activity","muscle.jpg","Strengthing muscles can be done at home or in the gym, you should do them to the point where you need a short rest before repeating the activity","Examples of Muscle-strengthening activities include:","Carrying heavy shopping bags","Heavy gardening (Digging)","Lifting weights","Yogs"),t=[];t.push(h);t.push(g);t.push(y);t.push(v);t.push(p);console.log(t.length);const m=document.querySelector("#section-center");function b(){let i=t.map(e=>`
        <article class="service">
        <div>
            <br>
            <h1 class="title">${e.title}</h1>
            <img src=${e.img} class="photo"/>
            <h2 class="desc"><b>${e.desc}</b></h2>
            <ul>
                 <li class="bullet1"> ${e.bullet1}</li>
                 <li class="bullet2">${e.bullet2}</li>
                 <li class="bullet3">${e.bullet3}</li>
                 <li class="bullet4">${e.bullet4}</li>
             </ul>
        </div>
        </article>
  
        `);i=i.join(""),console.log(i),m.innerHTML=i}window.addEventListener("DOMContentLoaded",b,!1);
