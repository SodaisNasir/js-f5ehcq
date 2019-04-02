



window.onload = function(){
  GeneratePrice();
}

//To Generate the Random numbers --------------------------------------------------------------

var num1,  num2
function GeneratePrice(){

    var num_1 =Math.random()+Math.random();
     randamNumber_1 = num_1.toFixed(5);
    var str_1 = randamNumber_1.toString();
    str_1=str_1.replace(".", "");
    Third_Number_1= Math.floor((str_1 / 100) % 10); // 3
    Fourth_Number_1= Math.floor((str_1 / 10) % 10); // 4
    Fifth_Number_1 = Math.floor((str_1 / 1) % 10); // 5
    var NewrandamNumber_1 = num_1.toFixed(2);

    var num_2 =Math.random()+Math.random();
    var randamNumber_2 = num_2.toFixed(5);
    var str_2 = randamNumber_2.toString();
    str_2=str_2.replace(".", "");
    Third_Number_2= Math.floor((str_1 / 100) % 10); // 3
    Fourth_Number_2= Math.floor((str_1 / 10) % 10); // 4
    Fifth_Number_2 = Math.floor((str_1 / 1) % 10); // 5
    NewrandamNumber_2 = num_2.toFixed(2);

    


    if(num_1 > num_2){
    	num1=NewrandamNumber_1 + "" + Third_Number_1+"" +Fourth_Number_1+"" +Fifth_Number_1;
    	num2 =NewrandamNumber_2 + "" + Third_Number_2+"" +Fourth_Number_2+"" +Fifth_Number_2;
		document.getElementById('BidPrice').innerHTML = NewrandamNumber_1 +"<span style='font-size:50px;'>"+Third_Number_1+""+Fourth_Number_1+"</span>" + Fifth_Number_1;	
		document.getElementById('AskPrice').innerHTML = NewrandamNumber_2 +"<span style='font-size:50px;'>"+Third_Number_2+""+Fourth_Number_2+"</span>" + Fifth_Number_2;	
	}
	else{
		num1=NewrandamNumber_2 + "" + Third_Number_2+"" +Fourth_Number_2+"" +Fifth_Number_2;
    	num2 =NewrandamNumber_1 + "" + Third_Number_1+"" +Fourth_Number_1+"" +Fifth_Number_1;
		document.getElementById('BidPrice').innerHTML = NewrandamNumber_2 +"<span style='font-size:50px;'>"+Third_Number_2+""+Fourth_Number_2+"</span>" + Fifth_Number_2;
		document.getElementById('AskPrice').innerHTML = NewrandamNumber_1 +"<span style='font-size:50px;'>"+Third_Number_1+""+Fourth_Number_1+"</span>" + Fifth_Number_1;
	}
 	runGeneratePrice();

}
function runGeneratePrice(){
	setInterval(function(){
		GeneratePrice();
		 }, 15000);

}




//To add the values in list --------------------------------------------------------------

var Selection = [""];

function Addition(selected){
	
	
	if(selected=="Bid"){
    	var price = num1;
    	var Currency = document.getElementById("Currency").value;
		Selection.push("<div class='BidList'><br>Sell 200,000,000 <br>@"+ price +" <br> "+ Currency +"</div>");
    
    
	}
	else if(selected=="Ask"){
		var price = num2;
		var Currency = document.getElementById("Currency").value;
		Selection.push("<div class='AskList'><br>Sell 200,000,000 <br>@"+ price +" <br> "+ Currency +"</div>");
		
    }
    var value="";
    for(var i=Selection.length-1; i>0; i--){
    	
    	value +=Selection[i];
    	
    }
	document.getElementById("List").innerHTML = value;
}