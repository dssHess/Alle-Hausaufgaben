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
2. Schreiben Sie ein JavaScript-Programm, 
um den String 'Techstarter' periodisch alle 2 Sekunden 
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

/*
3. Schreiben Sie ein JavaScript-Programm, um die Differenz zwischen einer gegebenen Zahl und 13 zu erhalten, wenn die Zahl größer als 13 ist, geben Sie die doppelte absolute Differenz zurück.
4. Schreiben Sie ein JavaScript-Programm, um zu prüfen, ob zwei gegebene Integer-Werte im Bereich 50..99 (einschließlich) liegen. Geben Sie wahr zurück, wenn einer von ihnen in dem genannten Bereich liegt.
5. Schreiben Sie ein JavaScript-Programm, um jedes n-te Element in einem gegebenen Array zu erhalten.
6. Schreiben Sie ein JavaScript-Programm, um herauszufinden, ob ein Wort ein Palindrom ist, oder nicht. (z. B. Madam, Anna, Otto)
7. Schreiben Sie eine JavaScript-Funktion, die alle Kombinationen eines Strings generiert. Example string: 'dog'; Expected Output: d,o,do,g,dg,og,dog. 
8. Schreiben Sie ein JavaScript-Programm, um die nicht eindeutigen Werte in einem Array herauszufiltern. (Beispiel-Array: [1, 2, 2, 3, 4, 4, 5]).
9. Schreiben Sie eine JavaScript-Funktion, um das erste Element eines Arrays abzurufen. Das Übergeben eines Parameters 'n' gibt die ersten 'n' Elemente des Arrays zurück. 

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

10. Schreiben Sie ein JavaScript-Programm, um ein Array zu mischen. 

Öffnen
*/