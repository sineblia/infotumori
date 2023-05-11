const dotenv = require('dotenv');

dotenv.config();

const { Client } = require('@elastic/elasticsearch')

const client = new Client({
  cloud: {
    id: 'infotumori:ZXUtd2VzdC0xLmF3cy5mb3VuZC5pbyQ0MjEzMGRhZjY1YmM0Zjc0OTEwZDliZDk3ZTQ0Njc2NyQwNTU5YjM3M2RkNWY0NDE2YWExZDhmNGE1MzM1ODQ5ZQ=='
  },
  auth: {
    username: 'infotumoriweb@gmail.com',
    password: '8g2nCg!BAUS!o'
  }
})