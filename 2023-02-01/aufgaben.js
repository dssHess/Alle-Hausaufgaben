/* Aufgaben JavaScript:


1. Schreiben Sie ein JavaScript-Programm, 
um den Flächeninhalt eines Dreiecks zu ermitteln, 
dessen drei Seitenlängen a, b, c sind.
*/
let sl_a = 300;
let sl_b = 400;
let sl_c = 500;
let sl_s = (sl_a+sl_b+sl_c)/2
let hc = 2/sl_c*Math.sqrt(sl_s*(sl_s-sl_a)*(sl_s-sl_b)*(sl_s-sl_c))
let flaeche = sl_c * hc * 0.5
console.log("Aufgabe 1")
console.log("--------------------------------------------")
console.log("Seite A: "+sl_a+" cm")
console.log("Seite B: "+sl_b+" cm")
console.log("Seite C: "+sl_c+" cm")
console.log("Höhe  C: "+hc+" cm")
console.log("Fläche: "+flaeche+" cm²")
console.log("--------------------------------------------")
console.log(" ")

/*
3. Schreiben Sie ein JavaScript-Programm, 
um die Differenz zwischen einer gegebenen Zahl und 13 zu erhalten, 
wenn die Zahl größer als 13 ist, geben Sie die doppelte absolute Differenz zurück.
*/
console.log("Aufgabe 3")
console.log("--------------------------------------------")
function unterschiedZu13(nummer) {
  if (nummer <= 13) {
    return 13 - nummer;
  } else {
    return 2 * (nummer - 13);
  }
}
let meinenummer = 25
console.log(unterschiedZu13(meinenummer))
console.log("--------------------------------------------")
console.log(" ")


/*
4. Schreiben Sie ein JavaScript-Programm, 
um zu prüfen, ob zwei gegebene Integer-Werte im Bereich 50..99 (einschließlich) liegen. 
Geben Sie wahr zurück, wenn einer von ihnen in dem genannten Bereich liegt.
*/
console.log("Aufgabe 4")
console.log("--------------------------------------------")
function bereichstest(num1, num2) {
  console.log("Nummer1:"+num1+" Nummer2: "+num2)
  return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}
let num1 = 49
let num2 = 100
console.log(bereichstest(num1,num2))
num1 = 50
console.log(bereichstest(num1,num2))
num2 = 99
console.log(bereichstest(num1,num2))
num1 = 49
console.log(bereichstest(num1,num2))
console.log("--------------------------------------------")
console.log(" ")

/*
5. Schreiben Sie ein JavaScript-Programm, um jedes n-te Element in einem gegebenen Array zu erhalten.
*/
console.log("Aufgabe 5")
console.log("--------------------------------------------")
function elementauswahl(array, n) {
  const result = [];
  for (let i = n - 1; i < array.length; i += n) {
    result.push(array[i]);
  }
  return result;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n = 3;
console.log("Das Array: "+array)
console.log("Die Auswahl, jedes "+n+" Element")

console.log(elementauswahl(array, n));
console.log("--------------------------------------------")
console.log(" ")

/*
6. Schreiben Sie ein JavaScript-Programm, um herauszufinden, 
ob ein Wort ein Palindrom ist, oder nicht. (z. B. Madam, Anna, Otto)
Das Programm konvertiert das gegebene Wort in Kleinbuchstaben, 
entfernt alle nicht-alphanumerischen Zeichen und vergleicht es dann 
mit seiner umgekehrten Version. Wenn sie gleich sind, ist das Wort ein Palindrom.
*/
console.log("Aufgabe 6")
console.log("--------------------------------------------")
function palindrom(wort) {
  wort = wort.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  const rueckwerts = wort.split("").reverse().join("");
  return wort === rueckwerts;
}
wort1="racecar"
console.log("Ist das Wort "+wort1+" ein Palindrom ?");
console.log(palindrom(wort1));
wort1="Hallo"
console.log("Ist das Wort "+wort1+" ein Palindrom ?");
console.log(palindrom(wort1));


console.log("--------------------------------------------")
console.log(" ")
/*

7. Schreiben Sie eine JavaScript-Funktion, 
die alle Kombinationen eines Strings generiert. 
*/
console.log("Aufgabe 7")
console.log("--------------------------------------------")
function generateCombinations(str) {
  let combinations = [];

  function generate(combination, remaining) {
    if (remaining === "") {
      combinations.push(combination);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      generate(combination + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
    }
  }

  console.log(generate(wortr, wort7));
  return combinations;
}
wort7="Art"
wortr=""
console.log(wort7)
console.log(wortr)
console.log(generateCombinations(wortr,wort7))
console.log("--------------------------------------------")
console.log(" ")
/*

8. Schreiben Sie ein JavaScript-Programm, 
um die nicht eindeutigen Werte in einem Array herauszufiltern. 
(Beispiel-Array: [1, 2, 2, 3, 4, 4, 5]).
*/
console.log("Aufgabe 8")
console.log("--------------------------------------------")
console.log("--------------------------------------------")
console.log(" ")
/*

9. Schreiben Sie eine JavaScript-Funktion, 
um das erste Element eines Arrays abzurufen. 
Das Übergeben eines Parameters "n" gibt die ersten "n" Elemente des Arrays zurück. 
*/
console.log("Aufgabe 9")
console.log("--------------------------------------------")
console.log("--------------------------------------------")
console.log(" ")
/*


Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]

/*
10. Schreiben Sie ein JavaScript-Programm, um ein Array zu mischen. 
*/
console.log("Aufgabe 10")
console.log("--------------------------------------------")
console.log("--------------------------------------------")
console.log(" ")
/*
Öffnen
*/

/*
2. Schreiben Sie ein JavaScript-Programm, 
um den String "Techstarter" periodisch alle 2 Sekunden 
auf die Konsole anzuzeigen.
*/
console.log("Aufgabe 2")
console.log("--------------------------------------------")
let durchlaufzeit = 1;
let durchlaufzaehler = setInterval(sekundenanzeige, 1000);
function sekundenanzeige() {
    console.log("Techstarter "+durchlaufzeit)
    durchlaufzeit=durchlaufzeit+1;
    if ( durchlaufzeit > 10 ) {
		clearInterval(durchlaufzaehler);
	}
}
