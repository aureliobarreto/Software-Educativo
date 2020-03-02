var acertBall = false;
var acertDog = false;
var quebrada = false;
var acertClic = false;
var count = 0;

function mudaLampada(tipo){
			
	if(!quebrada){
		document.getElementById("luz").src = "img/" + tipo + ".png";
				
		if(tipo == 'lampada-quebrada'){
			quebrada = true;
			count += 10;
			document.getElementById("span").innerHTML = "" + count + "";
		   	document.getElementById("input").value = count;
		}
	}
}

function mudaCubo(){
	if(!acertDog){
		alert("Parabéns, você acertou!");
		acertDog = true;		
		count += 10;
		document.getElementById("span").innerHTML = "" + count + "";
		document.getElementById("input").value = count;	
	}

	if(!acertBall){
		alert("Parabéns, você acertou!");
		acertBall = true;		
		count += 10;
		document.getElementById("span").innerHTML = "" + count + "";
		document.getElementById("input").value = count;	
	}
}

function image(tipo, ref) {

	if (!count == 0) {
		alert("Gastou 10 pts")
		var img = document.createElement("IMG");
	    img.src = "img/" + tipo + ".png";
	    document.getElementById("" + ref + "").appendChild(img);
	    entrer = true;
	    count -= 10;
		document.getElementById("span").innerHTML = "" + count + "";
		document.getElementById("input").value = count;	
	}
	if(count == 0){
		alert('Sem pontos :(');
	}
}
