const pots = [

{ id:"Π15", batch:"Άδειο", producer:"-", title:"-", description:"-" },
{ id:"Π16", batch:"Άδειο", producer:"-", title:"-", description:"-" },
{ id:"Π17", batch:"Άδειο", producer:"-", title:"-", description:"-" },
{ id:"Π18", batch:"Άδειο", producer:"-", title:"-", description:"-" },
{ id:"Π19", batch:"Άδειο", producer:"-", title:"-", description:"-" },
{ id:"Π20", batch:"#250220", producer:"Κώστας Ντάνος", title:"Ανθισμένο Ξυνιστέρι, Μάνα 2025", description:"(χωρίς περιγραφή)" },
{ id:"Π14", batch:"#240214", producer:"Κώστας Ντάνος", title:"Ανθισμένο Ξυνιστέρι, Μάνα 2024", description:"(χωρίς περιγραφή)" },

{ id:"Π08", batch:"Άδειο", producer:"-", title:"-", description:"-" },
{ id:"Π09", batch:"Άδειο", producer:"-", title:"-", description:"-" },
{ id:"Π10", batch:"#260310", producer:"Κωνσταντίνα Νικολάου", title:"Λευκό 2026", description:"(χωρίς περιγραφή)" },
{ id:"Π11", batch:"#260311", producer:"Κωνσταντίνα Νικολάου", title:"Ερυθρό 2026", description:"(χωρίς περιγραφή)" },
{ id:"Π12", batch:"#260212", producer:"Κώστας Ντάνος", title:"Ξυνιστέρι 2026", description:"(χωρίς περιγραφή)" },
{ id:"Π13", batch:"Άδειο", producer:"-", title:"-", description:"-" },

{ id:"Π01", batch:"Άδειο", producer:"-", title:"-", description:"-" },
{ id:"Π02", batch:"#260102", producer:"Οινοποιείο Ρεβέκκα", title:"Μικροπαρτίδες 2026", description:"(χωρίς περιγραφή)" },
{ id:"Π03", batch:"#260103", producer:"Οινοποιείο Ρεβέκκα", title:"Μικροπαρτίδες 2026", description:"(χωρίς περιγραφή)" },
{ id:"Π04", batch:"#250116", producer:"Οινοποιείο Ρεβέκκα", title:"Μικροπαρτίδες 2025", description:"(χωρίς περιγραφή)" },
{ id:"Π05", batch:"#260205", producer:"Κώστας Ντάνος", title:"Ξυνιστέρι 2026", description:"(χωρίς περιγραφή)" },
{ id:"Π06", batch:"Άδειο", producer:"-", title:"-", description:"-" },
{ id:"Π07", batch:"#260207", producer:"Κώστας Ντάνος", title:"Ανθισμένο Ξυνιστέρι, Μάνα 2026", description:"(χωρίς περιγραφή)" }

];

const shed = document.getElementById("shed");
const info = document.getElementById("info");

const positions = {

    "Π01":[1,1],
    "Π02":[1,2],
    "Π03":[1,3],
    "Π04":[1,4],
    "Π05":[1,5],
    "Π06":[1,6],
    "Π07":[1,7],

    "Π08":[2,1],
    "Π09":[2,2],
    "Π10":[2,3],
    "Π11":[2,4],
    "Π12":[2,5],
    "Π13":[2,6],
    "Π14":[2,7],

    "Π15":[3,1],
    "Π16":[3,2],
    "Π17":[3,3],
    "Π18":[3,4],
    "Π19":[3,5],
    "Π20":[3,6]

};

pots.forEach((potData) => {

    const pot = document.createElement("div");

    pot.className = "pot";

    pot.innerHTML = potData.id.replace("Π","");

    pot.style.gridColumn = positions[potData.id][0];
    pot.style.gridRow = positions[potData.id][1];

    if (potData.batch === "Άδειο") {
        pot.classList.add("empty");
    }

    pot.onclick = function () {

        document.querySelectorAll(".pot").forEach(p => p.classList.remove("active"));

        pot.classList.add("active");

        info.innerHTML = `

            <div class="batch">
                ${potData.batch}
            </div>

            <div class="producer">
                ${potData.producer}
            </div>

            <div class="title">
                ${potData.title}
            </div>

            <div class="description">
                ${potData.description}
            </div>
        `;
    };

    shed.appendChild(pot);

});
