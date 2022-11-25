# product-catalogue

A simple catalogue of products that can be accesses by rest api.

## Steps to Run the project locally:

1. Run > npm i
2. create .dev.env file.
3. Fill them with the following informations
   DATABASE_URL=
   PORT=
   APP_SECRET=
   DATABASE_HOST=
   DATABASE_USERNAME=
   DATABASE_PASSWORD=
4. Do Database migration:
   Run > npx sequelize db:migrate

5. Start server:
   Run > npm run dev
