# Requirements
- mysql >= v5.7
- Node >= v14.0
- npm/npx

# How to run 
```
$ #import setup.sql into mysql database
$ mysql -u username -p password db_name < /path/to/setup.sql
$ git clone https://github.com/olamide226/signal-challenge
$ cd signal-challenge
$ npm install
$ #set DB creds @ src/db/index.ts 
$ npm run build # run build for production
$ npx mocha tests/default.test.js --exit # Run tests
$ npm start # run server
```