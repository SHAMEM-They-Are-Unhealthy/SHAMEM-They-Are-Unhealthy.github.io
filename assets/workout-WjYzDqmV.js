import"./NavBar-PgYyMm5z.js";class n{constructor(t,o,l,s,a,h,r,u,c,g){this.id=t,this.title=o,this.img=l,this.alt=s,this.desc=a,this.introBullet=h,this.bullet1=r,this.bullet2=u,this.bullet3=c,this.bullet4=g}}const y=new n(1,"Light Activity","https://github.com/SHAMEM-They-Are-Unhealthy/SHAMEM-They-Are-Unhealthy.github.io/blob/main/workout/photos/light.jpg?raw=true","Elderly couple walking on a path","Light activity is moving rather than sitting or lying down","Examples of light activity include:","Getting up to make a cup of tea","Move around your home","Walking at a slow pace","Cleaning and Dusting"),d=new n(2,"Moderate intensity acitvity","https://github.com/SHAMEM-They-Are-Unhealthy/SHAMEM-They-Are-Unhealthy.github.io/blob/main/workout/photos/moderate.jpg?raw=true","Dance for fitness class","Moderate intensity activity will raise raise your heart rate, make you breathe faster and feel warmer. You should be able to talk, but not sing","Examples of moderate activity include:","Walking for health","Pushing a lawnmower","Doubles Tennis","Dance for fitness"),b=new n(3,"Vigorous intensity activity","https://github.com/SHAMEM-They-Are-Unhealthy/SHAMEM-They-Are-Unhealthy.github.io/blob/main/workout/photos/vigorous.jpg?raw=true","Couple jogging","Vigorous activity makes you breathe fast. In general, every 75 minutes of vigorous activity has similar benefits to 150 minutes of moderate activity","Examples of vigorous activities include:","Running","Aerobics","Singles Tennis","Dance for fitness"),p=new n(4,"Muscle Strengthening Activity","https://github.com/SHAMEM-They-Are-Unhealthy/SHAMEM-They-Are-Unhealthy.github.io/blob/main/workout/photos/muscle.jpg?raw=true","Two people swingning kettlebells","Strengthing muscles can be done at home or in the gym, you should do them to the point where you need a short rest before repeating the activity","Examples of Muscle-strengthening activities include:","Carrying heavy shopping bags","Heavy gardening (Digging)","Lifting weights","Yoga"),e=[];e.push(y);e.push(d);e.push(b);e.push(p);const m=document.querySelector("#section-center");function v(){let i=e.map(t=>`<article class="info-container">
        <div class="left">
                <img src="${t.img}" alt="${t.alt}">
        </div>
        <div class="right">
                <h2>${t.title}</h2>
                <p>${t.desc}</p>
                <p>${t.introBullet}</p>
                <ul>
                        <li class="bullet">- ${t.bullet1}</li>
                        <li class="bullet">- ${t.bullet2}</li>
                        <li class="bullet">- ${t.bullet3}</li>
                        <li class="bullet">- ${t.bullet4}</li>
                </ul>
        </div>
</article>`);i=i.join(""),m.innerHTML=i}window.addEventListener("DOMContentLoaded",v,!1);
