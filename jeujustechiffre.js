(function (){
    var demo = window.confirm("Bienvenue sur mon jeu")
    console.log(demo)

    var aDevinez = Math.round(Math.random() * 50)
    var essai = window.prompt("Entrez votre chiffre")
    essai = parseInt(essai, 50)
    while(essai != aDevinez){
        if(essai > aDevinez){
        alert("Plus bas !")
        } else {
            alert("Plus haut !")
        }
        essai = window.prompt("Retentez votre chance")}
}) ()
alert("Bravo !")