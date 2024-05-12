const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

app.use(cors());

const usersData = [
  {
    userId: 1,
    username: "admin",
    postCount: 10,
    registrationDate: "2023-01-01",
    achievements: ["10+ posts ", "Old user ", "Moderator "],
  },
  {
    userId: 2,
    username: "plex",
    postCount: 3,
    registrationDate: "2023-02-15",
    achievements: ["3+ posts ", "Moderator "],
  },
  {
    userId: 3,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 4,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 5,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 6,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 7,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 8,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 9,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 10,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 11,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 12,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 13,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 14,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 15,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 16,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 17,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 18,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 19,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 20,
    username: "xd",
    postCount: 10,
    registrationDate: "2023-04-17",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 21,
    username: "sunnyGirl",
    postCount: 25,
    registrationDate: "2023-02-05",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 22,
    username: "CrimsonTiger",
    postCount: 3,
    registrationDate: "2023-06-11",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 23,
    username: "SilverDragon",
    postCount: 17,
    registrationDate: "2023-09-28",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 24,
    username: "ElectricEcho",
    postCount: 8,
    registrationDate: "2023-11-15",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 25,
    username: "MysticShadow",
    postCount: 12,
    registrationDate: "2023-07-02",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 26,
    username: "FrostyNinja",
    postCount: 6,
    registrationDate: "2023-04-30",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 27,
    username: "WhisperingWind",
    postCount: 19,
    registrationDate: "2023-01-19",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 28,
    username: "EternalFlame",
    postCount: 14,
    registrationDate: "2023-08-07",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 29,
    username: "MidnightRose",
    postCount: 5,
    registrationDate: "2023-10-22",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 30,
    username: "SapphireSky",
    postCount: 9,
    registrationDate: "2023-05-14",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 31,
    username: "DreamingStar",
    postCount: 11,
    registrationDate: "2023-03-08",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 32,
    username: "CrimsonWhisper",
    postCount: 7,
    registrationDate: "2023-12-03",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 33,
    username: "ShadowKnight",
    postCount: 13,
    registrationDate: "2023-06-25",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 34,
    username: "AzureDreamer",
    postCount: 4,
    registrationDate: "2023-09-11",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 35,
    username: "CrystalWitch",
    postCount: 16,
    registrationDate: "2023-02-22",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 36,
    username: "FrostBlossom",
    postCount: 10,
    registrationDate: "2023-11-07",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 37,
    username: "MysticalPhoenix",
    postCount: 21,
    registrationDate: "2023-07-15",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 38,
    username: "EtherealSpirit",
    postCount: 2,
    registrationDate: "2023-10-30",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 39,
    username: "GoldenSerpent",
    postCount: 18,
    registrationDate: "2023-01-05",
    achievements: ["10+ posts ", "Donator "],
  },
  {
    userId: 40,
    username: "WhisperingWillow",
    postCount: 15,
    registrationDate: "2023-08-20",
    achievements: ["10+ posts ", "Donator "],
  },
];

app.get("/users", (req, res) => {
  const offset = Number(req.query.offset) || 0;
  const limit = Number(req.query.limit) || 20;

  const paginatedUsers = usersData.slice(offset, offset + limit);

  res.status(200).json(paginatedUsers);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
