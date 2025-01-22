// Définition de variables
// const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
// const nom_boutique = "Les potions du maitre";
// let nombre_potions_stock = 40;
// let prix_potion = 2;
// let boutique_ouverte = true;

// Affichage conditionnel
// if (!boutique_ouverte) {
//   console.log(`La boutique ${nom_boutique} est fermée, revenez plus tard Aventurier ! 😴`);
// } else {
//   console.log(`Bienvenue dans la boutique ${nom_boutique} Aventurier ! 🎉`);
// }

// Affichage conditionnel avec switch
// let choix = prompt(`Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔
// 1. Le nom de la boutique
// 2. Le nom du Sorcier
// 3. Le prix d'un potion de soin
// 4. La quantité de potion de soin en stock`);
// switch (choix) {
//   case "1":
//     console.log(`Le nom de la boutique est ${nom_boutique}`);
//     break;
//   case "2":
//     console.log(`Le nom du sorcier est ${nom_sorcier} 🧙‍♂️`);
//     break;
//   case "3":
//     console.log(`Le prix d'une potion de soin est ${prix_potion} 🪙`);
//     break;
//   case "4":
//     console.log(`La quantité de potion de soin en stock est ${nombre_potions_stock}`);
//     break;
//   default:
//     console.log(`Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`);
// }

// Calcul du prix total d'une commande de potion 🪙
// let qté = prompt(`Combien de potion(s) désires-tu?`);
// console.log(`Prix de ${qté} potions de soins : ${prix_potion * qté} 🪙 mon cher Aventurier. 💸`);

// Bourse de l'Aventurier 💰
let bourse_aventurier = 6;
// if (prix_potion * qté <= bourse_aventurier && nombre_potions_stock - qté >= 0) {
//   nombre_potions_stock = nombre_potions_stock - qté;
// } else if (prix_potion * qté > bourse_aventurier) {
//   console.log("Désolé aventurier, tu n'a pas assez d'argent !");
// } else if (nombre_potions_stock - qté < 0) {
//   console.log("Désolé aventurier, je n'ai pas assez de potion !");
// }

// Liste des potions
const tableau_potions = ["Potion de soin", "Potion de magie", "Potion d'endurance"];
console.table(tableau_potions);

// Affichage des potions
console.log(tableau_potions[0]);
console.log(Array(tableau_potions).length);
for (let i = 0; i < tableau_potions.length; i++) {
  console.log(`Nous avons de la ${tableau_potions[i]} !`);
}

// Ajout d'une nouvelle potion
tableau_potions.push("Potion de faiblesse");
console.log(tableau_potions);

// Finaly, nope.
tableau_potions.pop("Potion de faiblesse");
console.log(tableau_potions);

// Rangeons les informations de la potion de soin dans un objet 🧹
let info_potion_soin = {
  nom: "Potion de soin",
  prix: 2,
  stock: 40,
};
console.log(info_potion_soin);

// Affichons les informations de la potion
console.log(info_potion_soin.nom);
console.log(info_potion_soin["prix"]);

// C'est l'heure de faire l'inventaire...
let info_potion_magie = {
  nom: "Potion de magie",
  prix: 2,
  stock: 20,
};
let info_potion_endurance = {
  nom: "Potion de endurance",
  prix: 3,
  stock: 10,
};
let info_potion_faiblesse = {
  nom: "Potion de faiblesse",
  prix: 6,
  stock: 15,
};
let inventaire = [info_potion_soin, info_potion_magie, info_potion_endurance, info_potion_faiblesse];
console.log(inventaire);

// Aventurier, regarde tout ce que je vends !

for (let i = 0; i < inventaire.length; i++) {
  console.log(`- Nom: ${inventaire[i].nom}`);
  console.log(`- Prix: ${inventaire[i].prix}`);
  console.log(`- En stock: ${inventaire[i].stock}`);
  console.log("========================================");
}
for (let i = 0; i < inventaire.length; i++) {
  for (key in inventaire[i]) {
    console.log(inventaire[i][key]);
  }
  console.log("========================================");
}
