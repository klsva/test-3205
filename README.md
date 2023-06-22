## Тестовое задание "3205" - SPA + back-end API

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### Описание задания
Напишите приложение с одной страницей, на котором находится форма с двумя полями email (обязательное) и number (опциональное) и кнопка submit.
При нажатии на submit запрос уходит на бек, где нужно в JSON найти подходящих под поисковый запрос пользователей, показать результат поиска, либо ошибки валидации на фронте.

Условия:
* Нужно на беке добавить задержку обработки запроса в 5 секунд (имитация долгой обработки ответа). При повторном запросе с фронта, отменять прошлый запрос.
* Обязательная валидация полей email и number. Можно сделать либо на фронте либо на беке, будьте готовы объяснить выбранный подход.
* На фронте на поле number нужно добавить маску, чтобы номер отображался с дефисами каждые два знака. Например, 22-11-22, 83-03-47

Тех. требования:
* фронт react или vue (типизация на выбор)
* бек nodejs (типизация обязательна)

### Languages, Technologies, Tools:
* TS
* Node.js
* Express
* Joy
* React
* Mui
* Formik
* Yup
* Axios
* Vue 3

Все по ТЗ выполнено на клиенте React
На клиенте Vue - нет валидации и возможны проблемы с адаптивностью

### Quick start

```
$ git clone https://github.com/klsva/test-3205.git
$ cd test-3205
```
back-end part

```
$ cd server
$ npm install
$ npm run dev
```
Application will run at http://localhost:5000

front-end part React

```
$ cd client
$ npm install
$ npm start
```
Application will run at http://localhost:3000

front-end part Vue

```
$ cd client-vue
$ npm install
$ npm run serve
```
Application will run at http://localhost:8080

### Scripts
* npm run dev - start application in dev mode
* npm start - start application in dev mode React
* npm run serve - start application in dev mode Vue

### TODO:
* add tests
* add docs swagger/postman
* add concurrency
* add vue validation
* add vue styles
* check vue lint