import"./NavBar-gEiZQ2nI.js";class n{constructor(e,s,l,o,a,c,r,u,g,h){this.id=e,this.title=s,this.img=l,this.alt=o,this.desc=a,this.introBullet=c,this.bullet1=r,this.bullet2=u,this.bullet3=g,this.bullet4=h}}const d=new n(1,"Light Activity","light.jpg","Elderly couple walking on a path","Light activity is moving rather than sitting or lying down","Examples of light activity include:","Getting up to make a cup of tea","Move around your home","Walking at a slow pace","Cleaning and Dusting"),y=new n(2,"Moderate intensity acitvity","moderate.jpg","Dance for fitness class","Moderate intensity activity will raise raise your heart rate, make you breathe faster and feel warmer. You should be able to talk, but not sing","Examples of moderate activity include:","Walking for health","Pushing a lawnmower","Doubles Tennis","Dance for fitness"),v=new n(3,"Vigorous intensity activity","vigerous.jpg","Couple jogging","Vigorous activity makes you breathe hard and fast. In general, 75 minutes out vigorous intensity activity can give similar health benefots to 150 minutes of moderate intensity activity","Examples of vigorous activities include:","Running","Aerobics","Singles Tennis","Dance for fitness"),p=new n(4,"Muscle Strengthening Activity","muscle.jpg","Two people swingning kettlebells","Strengthing muscles can be done at home or in the gym, you should do them to the point where you need a short rest before repeating the activity","Examples of Muscle-strengthening activities include:","Carrying heavy shopping bags","Heavy gardening (Digging)","Lifting weights","Yoga"),t=[];t.push(d);t.push(y);t.push(v);t.push(p);console.log(t.length);const b=document.querySelector("#section-center");function m(){let i=t.map(e=>`
        <article class="service">
            <h1 class="title">${e.title}</h1>
            <div class="row">
                <img src=${e.img}  class="photo"/>
                <div class="service-text">
                    <h2 class="desc"><b>${e.desc}</b></h2>
                    <h2 class="introBullet">${e.introBullet}</h2>
                    <ul>
                        <li class="bullet">${e.bullet1}</li>
                        <li class="bullet">${e.bullet2}</li>
                        <li class="bullet">${e.bullet3}</li>
                        <li class="bullet">${e.bullet4}</li>
                    </ul>
                </div>
            </div>
        </article>
        `);i=i.join(""),console.log(i),b.innerHTML=i}window.addEventListener("DOMContentLoaded",m,!1);
