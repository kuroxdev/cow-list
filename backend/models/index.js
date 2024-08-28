const sequelize = require("../config/dbConfig.js");
const user = require("./UserModel.js");
const cow = require("./CowModel.js");

// const cows = [
//   {
//     Name: "Buttercup",
//     Description:
//       "a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.",
//   },
//   {
//     Name: "Daisy",
//     Description:
//       "a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties.",
//   },
//   {
//     Name: "Milkshake",
//     Description:
//       "a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.",
//   },
//   { Name: "Bessie", Description: "a person's best or closest friend." },
//   {
//     Name: "MooDonna",
//     Description: "	archaic : lady -- used as a form of respectful address.",
//   },
//   {
//     Name: "MooLawn",
//     Description:
//       "a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history.",
//   },
// ];
// cow.bulkCreate(cows).then(() => console.log("=========> added cows"));

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("All models were synchronized successfully.");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing models:", error);
//   });
