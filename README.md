# product-catalogue

A simple catalogue of products that can be accesses by rest api.

## Steps to Run the project locally:

1. Run > npm i
2. create .dev.env & .prod.env file.
3. Fill them with the following informations
   DATABASE_URL=
   PORT=
   APP_SECRET=
   DATABASE_HOST=
   DATABASE_USERNAME=
   DATABASE_PASSWORD=
4. Do Database migration:

   a. Add respective fields in the "database.json" file which is responsible for data migration.
   b. (Run the following commands to migrate table to DB)
   Run > db-migrate up
   => All the required table will be created in the database.

5. Start server:
   Run > npm run dev
