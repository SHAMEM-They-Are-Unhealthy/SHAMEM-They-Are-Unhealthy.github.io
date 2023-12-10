import"./NavBar-SbqPiamN.js";class n{constructor(e,s,o,l,a,r,c,u,g,h){this.id=e,this.title=s,this.img=o,this.alt=l,this.desc=a,this.introBullet=r,this.bullet1=c,this.bullet2=u,this.bullet3=g,this.bullet4=h}}const d=new n(1,"Light Activity","photos/light.jpg","Elderly couple walking on a path","Light activity is moving rather than sitting or lying down","Examples of light activity include:","Getting up to make a cup of tea","Move around your home","Walking at a slow pace","Cleaning and Dusting"),p=new n(2,"Moderate intensity acitvity","photos/moderate.jpg","Dance for fitness class","Moderate intensity activity will raise raise your heart rate, make you breathe faster and feel warmer. You should be able to talk, but not sing","Examples of moderate activity include:","Walking for health","Pushing a lawnmower","Doubles Tennis","Dance for fitness"),y=new n(3,"Vigorous intensity activity","photos/vigorous.jpg","Couple jogging","Vigorous activity makes you breathe fast. In general, every 75 minutes of vigorous activity has similar benefits to 150 minutes of moderate activity","Examples of vigorous activities include:","Running","Aerobics","Singles Tennis","Dance for fitness"),b=new n(4,"Muscle Strengthening Activity","photos/muscle.jpg","Two people swingning kettlebells","Strengthing muscles can be done at home or in the gym, you should do them to the point where you need a short rest before repeating the activity","Examples of Muscle-strengthening activities include:","Carrying heavy shopping bags","Heavy gardening (Digging)","Lifting weights","Yoga"),t=[];t.push(d);t.push(p);t.push(y);t.push(b);console.log(t.length);const v=document.querySelector("#section-center");function f(){let i=t.map(e=>`
        <article class="info-container">
            <h2>${e.title}</h2>
            <div class="bottom">
                <img src="${e.img}" alt="${e.alt}">
                <p><b>${e.desc}</b></p>
            </div>
            <div>
                <p style="font-size: 1.4rem;"><b>${e.introBullet}</b></p>
                <ul>
                    <li class="bullet">${e.bullet1}</li>
                    <li class="bullet">${e.bullet2}</li>
                    <li class="bullet">${e.bullet3}</li>
                    <li class="bullet">${e.bullet4}</li>
                </ul>
            </div>
        </article>
        `);i=i.join(""),console.log(i),v.innerHTML=i}window.addEventListener("DOMContentLoaded",f,!1);
