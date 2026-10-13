let button = document.getElementById("auswerten");

button.addEventListener("click", function(){

    let punkte = 0;

    let antwort1 = document.querySelector('input[name="frage1"]:checked');
    let antwort2 = document.querySelector('input[name="frage2"]:checked');
    let antwort3 = document.querySelector('input[name="frage3"]:checked');
    let antwort4 = document.querySelector('input[name="frage4"]:checked');

    let ergebnis = document.getElementById("ergebnis");

    let korrektur1 = document.getElementById("korrektur1");
    let korrektur2 = document.getElementById("korrektur2");
    let korrektur3 = document.getElementById("korrektur3");
    let korrektur4 = document.getElementById("korrektur4");

    if(antwort1 == null || antwort2 == null || antwort3 == null || antwort4 == null){
        ergebnis.textContent = "Bitte beantworten Sie alle Fragen.";
        ergebnis.style.color = "red";
        return;
    }

    if(antwort1.value == "richtig"){
        punkte = punkte + 1;
        korrektur1.innerHTML = "✅ Richtig!";
    }
    else{
        korrektur1.innerHTML = "❌ Falsch! Richtige Antwort: 1930";
    }

    if(antwort2.value == "richtig"){
        punkte = punkte + 1;
        korrektur2.innerHTML = "✅ Richtig!";
    }
    else{
        korrektur2.innerHTML = "❌ Falsch! Richtige Antwort: Frankreich";
    }

    if(antwort3.value == "richtig"){
        punkte = punkte + 1;
        korrektur3.innerHTML = "✅ Richtig!";
    }
    else{
        korrektur3.innerHTML = "❌ Falsch! Richtige Antwort: Deutschland";
    }

    if(antwort4.value == "richtig"){
        punkte = punkte + 1;
        korrektur4.innerHTML = "✅ Richtig!";
    }
    else{
        korrektur4.innerHTML = "❌ Falsch! Richtige Antwort: USA, Kanada und Mexiko";
    }

    ergebnis.textContent = punkte + "/4 Punkte!!!";
    ergebnis.style.color = "darkblue";

});

let neuSpielen = document.getElementById("neuSpielen");

neuSpielen.addEventListener("click", function(){
    location.reload();
});