

let x = 20;
let y = 60;
[x, y] = [y, x]; 

console.log(x); 
console.log(y);

/////////////////////////2///////////////////



function maxandmin(...arr)
{
    let armr=arr;
    
    Math.max(...armr)
    Math.min(...armr)
    let newww=[ Math.max(...armr),Math.min(...armr)];

return newww   ; 
}

console.log(maxandmin(10,20,30,50,9,87,77,533));

////////////////3////////////

let obj={
    names :"lolla",
    University :"assuit" ,
    faculty:"is",
    fina:100
}
console.log(`name is${obj.names} university is${obj.University} faculity is${obj.faculty} final grad is ${obj.fina}`) ;



///////////////////////////4///////////////////



let s=new Set(["aswan","luxor","qnia","hurgada"]);
 //s.add("asd");   //error

 let news=[...s];
 console.log(news);

 



 let s1=new Set ([10,60,90,70]);
 let s2=new Set([60,70,110,30]);

 Set.prototype.difference=function(s2)
 {
     let uniques=new Set();
     for(let val of s2)
     {
         if(!this.has(val))
         {
             uniques.add(val)
         }
     }
     return uniques; 
 }
 console.log(s1.difference(s2));
 Set.prototype.union=function(s2)
 {
     let news=new Set();
     for(let val of s2)
     {
         news.add(val);
     }
     for(let val of this)
     {
         news.add(val);
     }
     return news;
 }
 console.log(s1.union(s2));









//5//////////////////////////////// 

let mp=new Map();
mp.set("lolla",{Coursename:"JavaScript", Grade:"Excellent"});
mp.set("joy",{Coursename:"Jquery", Grade:"Good"});
mp.set("mrmr",{Coursename:"React", Grade:"V.Good"});
mp.set("asd",{Coursename:"ESNext", Grade:"Good"});
mp.set("qwwe",{Coursename:"NodeJS", Grade:"V.Good"});

for(let x of mp)
{
    console.log(x[0]+"=>"+x[1].Grade)
}
let list=[];

