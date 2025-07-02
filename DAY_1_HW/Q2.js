const calculateGrade = (score)=>{
    if (score >= 90){
        console.log("A");
    }
    else if( score < 90 && score >= 60){
        console.log("B");
    }
    else if(score < 60 && score >= 40){
        console.log("C");
    }
    else{
        console.log("D");
    }
}

calculateGrade(88)