const nom_boutique = "Les potions du maitre";
let nombre_potions_stock = 40;
let prix_potion = 2;
let boutique_ouverte = true;

if (!boutique_ouverte) {
  console.log(`La boutique ${nom_boutique} est fermée, revenez plus tard Aventurier ! 😴`);
} else {
  console.log(`Bienvenue dans la boutique ${nom_boutique} Aventurier ! 🎉`);
}

let choix = prompt(`Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔
1. Le nom de la boutique
2. Le nom du Sorcier
3. Le prix d'un potion de soin
4. La quantité d'une potion de soin`);
switch (choix) {
  case 1:
  case 2:
  case 3:
  case 4:
}
