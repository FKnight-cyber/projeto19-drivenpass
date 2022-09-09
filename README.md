# projeto19-DrivenPass
A Typescript designed project to manage records, you can store informations about your credentials, cards, safe notes and wifi networks.


<p align="center">
  <img  src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f512.svg">
</p>
<h1 align="center">
  DrivenPass
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-316192?style=for-the-badge&logo=prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/React-316192?style=for-the-badge&logo=react&logoColor=white" height="30px"/>
  
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

DrivenPass is a full-stack application, it simulates an API that manages records of an user.

</br>

## Features

-   User sign-up and sign-in
-   Create Credentials / Cards / Safenotes / Wifis records.
-   View Credentials / Cards / Safenotes / Wifis records.
-   View specific Credential / Card / Safenote / Wifi record.
-   Delete specific Credential / Card / Safenote / Wifi record.

</br>

## API Reference

### User Sign Up

```https://ryan-drivenpass.herokuapp.com
POST /sign-up
```

#### Request:

| Body         | Type     | Description                  |
| :------------| :------- | :----------------------------|
| `email`      | `string` | **Required**. user email     |
| `password`   | `string` | **Required**. user password  |

#### Response:

```json
{
  "message": "created"
}
```
`Password length: 10`

#

### User Sign In

```https://ryan-drivenpass.herokuapp.com
POST /sign-in
```

#### Request:

| Body         | Type     | Description                  |
| :------------| :------- | :----------------------------|
| `email`      | `string` | **Required**. user email     |
| `password`   | `string` | **Required**. user password  |

#### Response:

```json
{
  "token": "random_token_string"
}
```

#

### Create a credential record

```https://ryan-drivenpass.herokuapp.com
POST /categories/credentials/create
```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `x-access-token` | `string`| **Required**. authentication token | 

####

| Body        | Type     | Description                              |
| :-----------| :------- | :--------------------------------------- |
| `url`       | `string` | **Required**. url of credential record   |
| `username`  | `string` | **Required**. name associated to record  |
| `password`  | `string` | **Required**. credential password        |
| `title`     | `string` | **Required**. record title               |

####

</br>

#### Response:

```json
{
  "message": "created!"
}
```
`Can't create credentials with same title`

#

### View credentials

```https://ryan-drivenpass.herokuapp.com
GET /credentials
```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `x-access-token` | `string`| **Required**. authentication token |

#### Response:

```json
[
  {
    "url": "https://google.com.br",
    "username": "fulano de tal",
    "password": "1234",
    "title": "Site 2"
  },
  ...
]
```
#

### View credential by id

```https://ryan-drivenpass.herokuapp.com
GET /credentials/:id
```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `x-access-token` | `string`| **Required**. authentication token |

####

| Params  | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Required**. credential id |

#### Response:

```json
  {
    "url": "https://google.com.br",
    "username": "fulano de tal",
    "password": "1234",
    "title": "Site 2"
  }
```
#

### Delete credential by id

```https://ryan-drivenpass.herokuapp.com/
DELETE credentials/delete/:id
```

#### Request:

|    Params    |   Type   | Description                  |
| :----------  | :--------| :--------------------------- |
| `id`         | `integer`| **Required**. credential Id  | 

####

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `x-access-token` | `string`| **Required**. authentication token |

#### Response:

```json
  {
    "message": "Credential removed!"
  }
```
#

### Create a card record

```https://ryan-drivenpass.herokuapp.com
POST /categories/cards/create
```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `x-access-token` | `string`| **Required**. authentication token | 

####

| Body              | Type      | Description                       |
| :---------------- | :-------- | :-------------------------------- |
| `number`          | `string`  | **Required**. card number         |
| `name`            | `string`  | **Required**. card holder name    |
| `securityCode`    | `string`  | **Required**. card cvc            |
| `isVirtual`       | `boolean` | **Required**. card is virtual?    |
| `password`        | `string`  | **Required**. card password       |
| `expirationDate`  | `string`  | **Required**. card valid date     |
| `title`           | `string`  | **Required**. record title        |
| `type`            | `string`  | **Required**. card type           |

`Number length: 16`
`securityCode max-length: 4`
`expirationDate length: 5 format(MM/YY)`
`Valid types: [debit,credit,credit and debit]`
`Can't create cards with same title`

####

</br>

#### Response:

```json
{
  "message": "created!"
}
```
#

### View cards

```https://ryan-drivenpass.herokuapp.com
GET /cards
```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `x-access-token` | `string`| **Required**. authentication token |

#### Response:

```json
[
  {
    "number": "1111222233334444",
    "name": "Gol D. Roger",
    "securityCode": "777",
    "expirationDate": "12/22",
    "isVirtual": false,
    "password": "1234",
    "title": "Cartão do Rei dos Piratas",
    "type":"debit"
  },
  ...
]
```
#

### View credential by id

```https://ryan-drivenpass.herokuapp.com
GET /cards/:id
```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `x-access-token` | `string`| **Required**. authentication token |

####

| Params  | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Required**. credential id |

#### Response:

```json
  {
    "number": "1111222233334444",
    "name": "Gol D. Roger",
    "securityCode": "777",
    "expirationDate": "12/22",
    "isVirtual": false,
    "password": "1234",
    "title": "Cartão do Rei dos Piratas",
    "type":"debit"
  }
```
#

### Delete credential by id

```https://ryan-drivenpass.herokuapp.com/
DELETE cards/delete/:id
```

#### Request:

|    Params    |   Type   | Description                  |
| :----------  | :--------| :--------------------------- |
| `id`         | `integer`| **Required**. credential Id  | 

####

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `x-access-token` | `string`| **Required**. authentication token |

#### Response:

```json
  {
    "message": "Card removed!"
  }
```
#

### Create a card record

```https://ryan-drivenpass.herokuapp.com
POST /categories/cards/create
```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `x-access-token` | `string`| **Required**. authentication token | 

####

| Body              | Type      | Description                       |
| :---------------- | :-------- | :-------------------------------- |
| `number`          | `string`  | **Required**. card number         |
| `name`            | `string`  | **Required**. card holder name    |
| `securityCode`    | `string`  | **Required**. card cvc            |
| `isVirtual`       | `boolean` | **Required**. card is virtual?    |
| `password`        | `string`  | **Required**. card password       |
| `expirationDate`  | `string`  | **Required**. card valid date     |
| `title`           | `string`  | **Required**. record title        |
| `type`            | `string`  | **Required**. card type           |

`Number length: 16`
`securityCode max-length: 4`
`expirationDate length: 5 format(MM/YY)`
`Valid types: [debit,credit,credit and debit]`
`Can't create cards with same title`

####

</br>

#### Response:

```json
{
  "message": "created!"
}
```
#

### View cards

```https://ryan-drivenpass.herokuapp.com
GET /cards
```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `x-access-token` | `string`| **Required**. authentication token |

#### Response:

```json
[
  {
    "number": "1111222233334444",
    "name": "Gol D. Roger",
    "securityCode": "777",
    "expirationDate": "12/22",
    "isVirtual": false,
    "password": "1234",
    "title": "Cartão do Rei dos Piratas",
    "type":"debit"
  },
  ...
]
```
#

### View credential by id

```https://ryan-drivenpass.herokuapp.com
GET /cards/:id
```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `x-access-token` | `string`| **Required**. authentication token |

####

| Params  | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Required**. credential id |

#### Response:

```json
  {
    "number": "1111222233334444",
    "name": "Gol D. Roger",
    "securityCode": "777",
    "expirationDate": "12/22",
    "isVirtual": false,
    "password": "1234",
    "title": "Cartão do Rei dos Piratas",
    "type":"debit"
  }
```
#

### Delete credential by id

```https://ryan-drivenpass.herokuapp.com/
DELETE cards/delete/:id
```

#### Request:

|    Params    |   Type   | Description                  |
| :----------  | :--------| :--------------------------- |
| `id`         | `integer`| **Required**. credential Id  | 

####

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `x-access-token` | `string`| **Required**. authentication token |

#### Response:

```json
  {
    "message": "Card removed!"
  }
```
#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/FKnight-cyber/projeto18-valex
```

Go to the project directory

```bash
  cd projeto18-valex/
```

Install dependencies

```bash
  npm install
```

Create database

```bash
  cd src/db/dbConfig
```
```bash
  bash ./create-database
```
```bash
  cd ../../..
```

Start the server

```bash
  npm run start
```

</br>

## Lessons Learned

In this project I learned a lot about how to structure an API with TypeScript

</br>

## Acknowledgements

-   [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

</br>

## Authors

-   Ryan Nicholas is a student at Driven Education and is putting effort into it to become a Dev.
<br/>

#
