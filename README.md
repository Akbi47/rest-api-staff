Usage
ES Modules in Node
We us ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

Env Variables
Create a .env file in then root and add the following

NODE_ENV = development
PORT = 3000
DB_PORT = 3306
DB_HOST = localhost
DB_USER = root
DB_PASS = ""
MYSQL_DB = employee

Install Dependencies
npm install
Run

# Run server

npm start

sample of data
{
"firstname": "stephens",
"lastname": "watt",
"password": "abc123",
"gender": "male",
"phone": "190887890",
"email": "ak47@hcmus",
"role": "leader",
"groupid": 0
}
{
"firstname": "lena",
"lastname": "watt",
"password": "abc456",
"gender": "female",
"phone": "908867890",
"email": "ak36@hcmus",
"role": "developer",
"groupid": 0
}
{
"groupid": "t1",
"part": "technical"
}
