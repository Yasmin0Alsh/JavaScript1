
function tellFortune(numChildren,partnerNames,locations,jobs){
    const randomElement = Math.floor(Math.random() * [numChildren,partnerNames,locations,jobs].length);
    
    console.log(`You will be a ${jobs[randomElement]}in ${locations[randomElement]},married to ${partnerNames[randomElement]} with ${numChildren[randomElement]} kids.`);            
}

const numChildren=[4,6,3,1,4];
const partnerNames =["Ali","Salah","Taha","Jack","Samer"];
const locations=["Amsterdam","Utreacht","Rotterdam","Nijmegen","Winterswijk"];
const jobs= ["teacher","doctor","engineer","pilot","builder"];
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);