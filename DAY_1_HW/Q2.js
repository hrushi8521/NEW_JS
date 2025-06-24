const calculateGrade = (grade)=>{
    if (grade >= 90){
        console.log("A");
    }
    else if( grade < 90 && grade >= 60){
        console.log("B");
    }
    else if(grade < 60 && grade >= 40){
        console.log("C");
    }
    else{
        console.log("D");
    }
}

calculateGrade(88)