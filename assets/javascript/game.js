$(document).ready(function() {
var answersArray = ["a","a","d","c","b"];
var imagesArray = ["assets/images/Mountain-Chicken.png","assets/images/20.png","assets/images/Road-to-Hell.png","assets/images/Drake-L.png","assets/images/Calendar-2018.png",];
var answerPrompts = ["Amphibian","20","good intentions","L","12"];

var correctA = 0;
var incorrectA = 0;
var unansweredA = 0;
    
var downTick=setInterval(timer, 1000);
var time=5000;
var questionNumber = 1;



$("[name^='q']").on("click",function()
{   
    check();
});

function next(){
    
    // if the last question was answered
    if (questionNumber == 5){
        time = 50000;
        $("#tally-box").show();
        $(".question-boxes").hide();
        $("#time-show").hide();
        $("#trivia-title").append($("#start-box"));
        $("#start-box").text("Play Again?");
        $("#start-box").show();

        //displays # of each
        $("#correct").html(correctA);
        $("#incorrect").html(incorrectA);
        $("#unanswered").html(unansweredA);
      
    }
    else{
       
        
        questionNumber++;
        $("#time-show").show(); 
        timer();
        time = 30;
        $("#time").html(time);
        $(".question-box" + questionNumber).show();
    }
}


$("#time-show").hide();
    
    function timer()
    {
       
      time=time-1;
      if(time == 1){
        $("#seconds-left").html(" second left");
      }
      if (time <= 0)
      {
        time = 30;
        
        check();
      }
    
     $("#time").html(time);
    }

function check(){
      
         if ($('[name=q'+questionNumber.toString()+']:checked').val()== answersArray [questionNumber-1])
        {
                correctA++;
                $("#answered-correct").show();
        }
        else if (!($('[name=q'+questionNumber.toString()+']').is(':checked')))         
         {   
            unansweredA++;
            $("#answered-outOfTime").show();
        }
        else{
           incorrectA++; 
           $("#answered-incorrect").show();
        }
        
    $("#question-image").attr('src',imagesArray[questionNumber-1]);
    $("#answerPrompt").html(answerPrompts[questionNumber-1]).show();
    $(".answerPromptBox").show();
    $(".question-boxes").hide();
    $("#time-show").hide(); 
    $(".answered").show();
    setTimeout(function(){ 
        $("#time-show").show(); 
        $(".answered").hide();
        $("#answered-correct").hide();
        $("#answered-incorrect").hide();
        $("#answered-outOfTime").hide();
        $("#answerPrompt").hide();
        $(".answerPromptBox").hide();
        next();},2500);
       
        
   
}
    
$("#start-box").on("click",function(){
    correctA = 0;
    incorrectA = 0;
    unansweredA = 0;
        

    time=30;
    questionNumber = 1;

    $("#start-box").hide();
    $("#time-show").show(); 
    timer();
    
    time = 30;
    $("#time").html(time);
    $(".question-box1").show();
    $("#tally-box").hide();
});

$("#answered-correct").hide();
$("#answered-incorrect").hide();
$("#answered-outOfTime").hide();
$("#answerPrompt").hide();
$(".answerPromptBox").hide();

$(".question-boxes").hide();
$("#tally-box").hide();

      
});