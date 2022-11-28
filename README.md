# product-catalogue

A simple catalogue of products that can be accesses by rest api.

## Postman Documentation

[postman documentation] (https://documenter.getpostman.com/view/19777887/2s8YswRBd6)

# Steps to Run the project locally:

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


# PROJECT FRAMEWORK / STRUCTURE JUSTIFICATION:

1. I have followed the 3 layer structure. i.e. Api Layer, Service Layer, Repository Layer.
2. Advantages of above structure:
  a. This provides the “separation of concerns” principle.
  b. Dividing the project into 3 layers allows me to test each layer separately hence decreasing the debugging speed.
  c. We can test each layer separately hence improve readability & development speed & deployment.
  d. This makes the code modular hence easy to maintain & easier for a new engineer in the team.
3. The 3 layers responsible for the following:
  a. Api Layer – This layer defines the API routes. The route handler functions let you deconstruct the request object, collect the necessary data pieces, and pass them on to the service layer for further processing.
  b. Service layer – This layer is responsible for executing the business logic. It includes classes and methods that follow S.O.L.I.D programming principles, perform singular responsibilities, and are reusable. The layer also decouples the processing logic from the defining point of routes.
  c. Repository Layer. – Responsible for handling the database, this layer fetches from, writes to, and updates the database. It also defines SQL queries, database connections, models, ORMs, etc.

# BEST CODING PRACTICES:

1. Defining different error types with proper status codes:
2. There are different types of errors that arise in any of the 3 layers, so defining the error types helps to track errors gracefully.
3. Error types include: NotFoundError, APIError, ValidationError, AuthorizationError, AppError.
4. All the above errors are extended from base error class Error.
5. Error codes: 
 a. 404 - Not Found
 b. 200 - OK
 c. 400 - Bad Request
 d. 422 - Invalid Api Input
 e. 500 - Internal server Error
6. Handling Error Separately:
  a. I have handled errors in one place only i.e. express-app file.
  b. This makes code much cleaner & easier while developing new features & debugging.
7. Database Migration: This helps in keeping track  of the database changes while different teams working on the same project.
8. Using ORM for database interaction: 
  a. Makes the coding process easier & much cleaner.
  b. This prevents any type of sql injection as ORM parses all input before executing any query.
9. Handling Api Inputs in separate middlewares:
  a. This prevents any malicious inputs to endpoints.
  b. Also separates the validation of user input from handling in between any layer.
