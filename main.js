let delay = -0.4
function createCard(date, day, game) {
   delay += 0.4
   return `
      <div class="card" style="animation-delay: ${delay}s">
         <h2>${date} <span>${day}</span></h2>
         <ul>
            ${game}
         </ul>
      </div>
   `
}

function createGame(op1, op2, group, team1, result, team2) {
   return `
      <li>
         <p>Grupo ${group}</p>
         <div class="game">
            <img style="opacity: ${op1}" src="./assets/icon-${team1}.svg" alt="Bandeira ${team1}">
            <strong>${result}</strong>
            <img style="opacity: ${op2}" src="./assets/icon-${team2}.svg" alt="Bandeira ${team2}">
         </div>
      </li>
   `
}

function createStageH2(text) {
   delay += 0.4
   return `
      <div class="stage" style="animation-delay: ${delay}s">
         <h2>${text}</h2>
      </div>
   `
}

function createDivider() {
   delay += 0.4
   return `
      <div class="divider" style="animation-delay: ${delay}s"></div>
   `
}

document.querySelector("#cards").innerHTML = 
   createDivider() +
   createStageH2("Fase de Grupos") +
   createCard("20/11", "domingo", createGame(1, 1, "A", "qatar", "13:00", "ecuador")) +
   createCard("21/11", "segunda", createGame(1, 1, "B", "england", "10:00", "iran") + createGame(1, 1, "A", "senegal", "13:00", "netherlands") + createGame(1, 1, "B", "usa", "16:00", "wales")) +
   createCard("22/11", "terça", createGame(1, 1, "C", "argentina", "07:00", "saudiarabia") + createGame(1, 1, "D", "denmark", "10:00", "tunisia") + createGame(1, 1, "C", "mexico", "13:00", "poland") + createGame(1, 1, "D", "france", "16:00", "australia")) +
   createCard("23/11", "quarta", createGame(1, 1, "F", "morroco", "07:00", "croatia") + createGame(1, 1, "E", "germany", "10:00", "japan") + createGame(1, 1, "E", "spain", "13:00", "costarica") + createGame(1, 1, "F", "belgium", "16:00", "canada")) +
   createCard("24/11", "quinta", createGame(1, 1, "G", "switzerland", "07:00", "cameroon") + createGame(1, 1, "H", "uruguai", "10:00", "southkorea") + createGame(1, 1, "H", "portugal", "13:00", "ghana") +createGame(1, 1, "G", "brazil", "16:00", "serbia")) +
   createCard("25/11", "sexta", createGame(1, 1, "B", "wales", "07:00", "iran") + createGame(1, 1, "A", "qatar", "10:00", "senegal") + createGame(1, 1, "A", "netherlands", "13:00", "ecuador") + createGame(1, 1, "B", "england", "16:00", "usa")) +
   createCard("26/11", "sábado", createGame(1, 1, "D", "tunisia", "07:00", "australia") + createGame(1, 1, "C", "poland", "10:00", "saudiarabia") + createGame(1, 1, "D", "france", "13:00", "denmark") + createGame(1, 1, "C", "argentina", "16:00", "mexico")) +
   createCard("27/11", "domingo", createGame(1, 1, "E", "japan", "07:00", "costarica") + createGame(1, 1, "F", "belgium", "10:00", "morroco") + createGame(1, 1, "F", "croatia", "13:00", "canada") + createGame(1, 1, "E", "spain", "16:00", "germany")) +
   createCard("28/11", "segunda", createGame(1, 1, "G", "cameroon", "07:00", "serbia") + createGame(1, 1, "H", "southkorea", "10:00", "ghana") + createGame(1, 1, "G", "brazil", "13:00", "switzerland") + createGame(1, 1, "H", "portugal", "16:00", "uruguai")) +
   createCard("29/11", "terça", createGame(1, 1, "A", "ecuador", "12:00", "senegal") + createGame(1, 1, "A", "netherlands", "12:00", "qatar") + createGame(1, 1, "B", "iran", "16:00", "usa") + createGame(1, 1, "B", "wales", "16:00", "england")) +
   createCard("30/11", "quarta", createGame(1, 1, "D", "tunisia", "12:00", "france") + createGame(1, 1, "D", "australia", "12:00", "denmark") + createGame(1, 1, "C", "poland", "16:00", "argentina") + createGame(1, 1, "C", "saudiarabia", "16:00", "mexico")) + 
   createCard("01/12", "quinta", createGame(1, 1, "F", "croatia", "12:00", "belgium") + createGame(1, 1, "F", "canada", "12:00", "morroco") + createGame(1, 1, "E", "japan", "16:00", "spain") + createGame(1, 1, "E", "costarica", "16:00", "germany")) +
   createCard("02/12", "sexta", createGame(1, 1, "H", "southkorea", "12:00", "portugal") + createGame(1, 1, "H", "ghana", "12:00", "uruguai") + createGame(1, 1, "F", "serbia", "16:00", "switzerland") + createGame(1, 1, "F", "brazil", "16:00", "cameroon"))
   // createDivider() +
   // createStageH2("Oitavas de Final")