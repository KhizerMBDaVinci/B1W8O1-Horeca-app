const prijsarray=[2,3,4,5,10]

var menuKaart=["fris","bier","wijn","bitterballen"]




	var totaalfris=0;
	var totaalbier=0;
	var totaalwijn=0;

	var bitter8=0;
	var bitter16=0;
	var schaal=0;

function vraag(argument) {

var ober=true;

	var bestel=prompt("Welke bestelling wilt u toevoegen?")

		if (bestel==menuKaart[3]) {
			var schaal=prompt("Wilt u het per 8 of per 16?")
			var hoeveelschaal=prompt("Hoeveel keer per "+schaal+" wilt u hebben?")
			if (schaal==8) {
				schaal+schaal
				bitter8=bitter8+Number(hoeveelschaal)
			}
			if (schaal==16) {
				schaal+schaal
				bitter16=bitter16+Number(hoeveelschaal)
			}
		}

		else if (bestel==menuKaart[0]) {
			totaalfris=prompt("Hoeveel flessen "+menuKaart[0]+" wilt u?")
			console.log(totaalfris)
		}

		else if (bestel==menuKaart[1]) {
			totaalbier=prompt("Hoeveel flessen "+menuKaart[1]+" wilt u?")
			console.log(totaalbier)
		}

		else if (bestel==menuKaart[2]) {
			totaalwijn=prompt("Hoeveel flessen "+menuKaart[2]+" wilt u?")
			console.log(totaalwijn)
		}

		if (bestel=='stop') {
			calculator()
			return false
		}

	
		vraag();
		


}
vraag();

function calculator(argument) {
	document.write("Flessen fris: "+totaalfris+". Frisprijs is "+totaalfris*prijsarray[0]+
		" euro</br>Flessen bier: "+totaalbier+". Bierprijs is "+totaalbier*prijsarray[1]+" euro<br>Flessen wijn: "+totaalwijn+
		". Wijnprijs is "+totaalwijn*prijsarray[2]+" euro</br>Hoeveel schalen van 8: "+bitter8+" . Bitterballen 8 is: "+bitter8*prijsarray[3]+
		" euro.</br>Bitterballen 16 is: "+bitter16*prijsarray[4]+" euro.")
}



