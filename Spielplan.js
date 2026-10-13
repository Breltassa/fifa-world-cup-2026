const button = document.getElementById("checkanswer");
const result =  document.getElementById("result");
const azteca = document.getElementById("azteca");

button.addEventListener("click", function(){
  
     if(azteca.checked)
     {
        result.textContent="✅Richtig!";
        result.className = "correct";
     }
     else{
          result.textContent="❌Leider, ist ihre Antwort falsch falsch! Die richtige Antwort ist: Estadio Azteca.";
          result.className = "wrong";
     }
});

const phaseCards = document.querySelectorAll(".card");
const phaseInfo = document.getElementById("phase-info");

phaseCards.forEach(function(card){

    card.addEventListener("click", function(){

        const phase =
        card.querySelector(".Group").textContent;

        if(123 === "123"){

            phaseInfo.innerHTML = `
            <h3>⚽ Gruppenphase</h3>
            <p>48 Teams spielen in 12 Gruppen.</p>
            <p>🏆 Die besten Teams qualifizieren sich für die K.-o.-Runde.</p>
            `;
        }

        else if(phase === "Sechzehntelfinale"){

            phaseInfo.innerHTML = `
            <h3>⚽ Sechzehntelfinale</h3>
            <p>32 Teams treten im direkten Duell gegeneinander an.</p>
            <p>🏆 Die Sieger erreichen das Achtelfinale.</p>
            `;
        }

        else if(phase === "Achtelfinale"){

            phaseInfo.innerHTML = `
            <h3>⚽ Achtelfinale</h3>
            <p>16 Teams kämpfen um den Einzug ins Viertelfinale.</p>
            <p>🏆 Nur die besten 8 Mannschaften bleiben im Turnier.</p>
            `;
        }

        else if(phase === "Viertelfinale"){

            phaseInfo.innerHTML = `
            <h3>⚽ Viertelfinale</h3>
            <p>Die besten 8 Teams treffen aufeinander.</p>
            <p>🏆 Die Sieger ziehen ins Halbfinale ein.</p>
            `;
        }

        else if(phase === "Halbfinale"){

            phaseInfo.innerHTML = `
            <h3>⚽ Halbfinale</h3>
            <p>Nur noch 4 Teams kämpfen um den WM-Titel.</p>
            <p>🏆 Die Gewinner erreichen das Finale.</p>
            `;
        }

        else if(phase === "Spiel um Platz 3"){

            phaseInfo.innerHTML = `
            <h3>🥉 Spiel um Platz 3</h3>
            <p>Die Verlierer der Halbfinals treffen aufeinander.</p>
            <p>🏆 Der Sieger erhält die Bronzemedaille.</p>
            `;
        }

        else if(phase === "Finale"){

            phaseInfo.innerHTML = `
            <h3>🏆 Finale</h3>
            <p>Die beiden besten Teams stehen sich gegenüber.</p>
            <p>🌎 Der Gewinner wird FIFA-Weltmeister 2026.</p>
            `;
        }

    });

});


const stadiumCards = document.querySelectorAll(".stadium-card");

stadiumCards.forEach(function(card){

    card.addEventListener("click", function(){

        card.classList.toggle("active");

    });

});
