const case1 = document.getElementById('case-1');
const case2 = document.getElementById('case-2');
const case3 = document.getElementById('case-3');
const case4 = document.getElementById('case-4');
const case5 = document.getElementById('case-5');
const case6 = document.getElementById('case-6');
const case7 = document.getElementById('case-7');
const case8 = document.getElementById('case-8');
const case9 = document.getElementById('case-9');

case1.addEventListener('click',maFonction );
case2.addEventListener('click',maFonction );
case3.addEventListener('click',maFonction );
case4.addEventListener('click',maFonction);
case5.addEventListener('click',maFonction );
case6.addEventListener('click',maFonction);
case7.addEventListener('click',maFonction);
case8.addEventListener('click',maFonction);
case9.addEventListener('click',maFonction);

let i = 1;
const lettre = ["X","O"];
let numeroJoueur = 0;
let joueurGagnant = 0;
let gagne = false;

function maFonction(e) {
    let x = e.target.textContent;
    if ( (x.length == 0) && (!gagne) ) {
        e.target.textContent = lettre[i%2];
        numeroJoueur = 1 + i%2;
        joueurGagnant = numeroJoueur - 1;
        joueurGagnant2 = joueurGagnant + 2;
        document.getElementById("tour").innerHTML="Au tour du joueur : "+ numeroJoueur;
    



        let C1 = document.getElementById('case-1').textContent;
        let C2 = document.getElementById('case-2').textContent;
        let C3 = document.getElementById('case-3').textContent;
        let C4 = document.getElementById('case-4').textContent;
        let C5 = document.getElementById('case-5').textContent;
        let C6 = document.getElementById('case-6').textContent;
        let C7 = document.getElementById('case-7').textContent;
        let C8 = document.getElementById('case-8').textContent;
        let C9 = document.getElementById('case-9').textContent;

        if ((C1 == "X") && (C2 == "X") && (C3 == "X")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant2 + " gagne la partie !";
        }

        if ((C4 == "X") && (C5 == "X") && (C6 == "X")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant2 + " gagne la partie !";
        }

        if ((C7 == "X") && (C8 == "X") && (C9 == "X")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant2 + " gagne la partie !";
        }

        if ((C1 == "X") && (C4 == "X") && (C7 == "X")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant2 + " gagne la partie !";
        }

        if ((C2 == "X") && (C5 == "X") && (C8 == "X")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant2 + " gagne la partie !";
        }

        if ((C3 == "X") && (C6 == "X") && (C9 == "X")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant2 + " gagne la partie !";
        }

        if ((C1 == "X") && (C5 == "X") && (C9 == "X")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant2 + " gagne la partie !";
        }

        if ((C3 == "X") && (C5 == "X") && (C7 == "X")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant2 + " gagne la partie !";
        }


        if ((C1 == "O") && (C2 == "O") && (C3 == "O")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant + " gagne la partie !";
        }

        if ((C4 == "O") && (C5 == "O") && (C6 == "O")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant + " gagne la partie !";
        }

        if ((C7 == "O") && (C8 == "O") && (C9 == "O")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant + " gagne la partie !";
        }

        if ((C1 == "O") && (C4 == "O") && (C7 == "O")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant + " gagne la partie !";
        }

        if ((C2 == "O") && (C5 == "O") && (C8 == "O")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant + " gagne la partie !";
        }

        if ((C3 == "O") && (C6 == "O") && (C9 == "O")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant + " gagne la partie !";
        }

        if ((C1 == "O") && (C5 == "O") && (C9 == "O")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant + " gagne la partie !";
        }

        if ((C3 == "O") && (C5 == "O") && (C7 == "O")) {
            gagne = true;
            document.getElementById("tour").innerHTML="Le joueur  "+ joueurGagnant + " gagne la partie !";
        }

        if (i == 9) {
            document.getElementById("tour").innerHTML="Match nul !";
        }
        i++ 
    }
}
