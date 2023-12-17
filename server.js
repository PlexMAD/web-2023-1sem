const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

app.use(cors());

// Пример данных о пользователях (вместо этого вы можете использовать базу данных)
const usersData = [
  {
    userId: 1,
    username: 'admin',
    postCount: 10,
    registrationDate: '2023-01-01',
    achievements: ['10+ posts ', 'Old user ', 'Moderator ']
  },
  {
    userId: 2,
    username: 'plex',
    postCount: 3,
    registrationDate: '2023-02-15',
    achievements: ['3+ posts ', 'Moderator ']
  },
  {
    userId: 3,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 4,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 5,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 6,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 7,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 8,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 9,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 10,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 11,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 12,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 13,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 14,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 15,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 16,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 17,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 18,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 19,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },
  {
    userId: 20,
    username: 'xd',
    postCount: 10,
    registrationDate: '2023-04-17',
    achievements: ['10+ posts ', 'Donator ']
  },

  
];

app.get('/users', (req, res) => {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 20;
    
  
    const paginatedUsers = usersData.slice(offset, offset + limit);
  
    res.status(200).json(paginatedUsers);
  });
  

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });