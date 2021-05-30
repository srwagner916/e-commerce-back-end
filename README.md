
# E-Commerce Back End
![License Badge](https://img.shields.io/badge/license-MIT-green)
## Description
This project is the back end code for an e-commerce store. It includes the creation of a MySQL database for a store and all of the CRUD operations involved in that.  The user can create new products, categories, and tags. Other functionality includes the ability to get all products, categories and tags from the database.  It can also update and delete those tables as well. The database is connected to the routes using Express and synced with Sequelize.
## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [License](#License)
  * [Contact](#Questions)
## Installation
To install this project you must clone the code onto your machine. You will also need to enter your MySQL credentials into the /config/connection.js file. Then you will need to install the dependencies. Navigate to the root directory of the project and run the command 'npm install'. The packages this project uses are Express, MySQL2, and Sequelize. It also uses Dotenv to secure environmental variables. To create the database, in the MySQL shell run the command 'source db/schema.sql'. To seed the database run the command 'npm run seed'
## Usage
All of the routes can be tested in Insomnia.  [Please view the walkthrough video that is linked to see a demonstration of all the routes.](https://drive.google.com/file/d/1PGfFIr2dr1ahwh_qB_j6zcpogzAHT0aw/view)
## Contribution
This is for an assignment. I don't expect any contribution.

## License
MIT License

Copyright (c) 2021, Shay Wagner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Questions
GitHub: srwagner916<br>
Email: <srwagner916@gmail.com>
