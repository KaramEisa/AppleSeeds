


const mostSpoken = (language) => {
    switch(language){
        case "mandarin":
            console.log('Most number of native speakers!');
            break;
        case "spanish":
            console.log("second place in number of native speakers");
            break;
        case "english":
            console.log("3rd place");
            break;
        case "hindi":
            console.log("number 4");
            break;
        case "arabic":
            console.log("5th most spoken language");
            break;
        default :
            console.log("not in in the top 5");
            break;


        
    }
}  
mostSpoken("arabic");
mostSpoken("arasfasf");
mostSpoken("english");
mostSpoken("mandarin");