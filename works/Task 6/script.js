function calculate_grade(){
    let score = (document.getElementById("score_input").value);
    let result = "";
    if(score >= 80 & score<= 100){
    result = "A";
    }
    else if(score >= 60 && score<=79){
    result = "B";
    }
    else if(score>= 40 && score <=59){
    result = "C";
    }
    else{
    result = "Fail";
    }
    document.getElementById("grade_span").innerHTML = result;
    }
    