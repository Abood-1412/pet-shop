# RESTful Routes: Pet Adoption App

## User Routes (Authentication)
| HTTP Method | Route       | Description                     | Access       |
|------------|------------|---------------------------------|-------------|
| GET        | /signup     | Show signup form                | Guest       |
| POST       | /signup     | Create new user                 | Guest       |
| GET        | /login      | Show login form                 | Guest       |
| POST       | /login      | Authenticate user               | Guest       |
| POST       | /logout     | Logout user                     | Authenticated |
| GET        | /users/:id  | View user profile (optional)    | Authenticated |

## Pet Routes (CRUD)
| HTTP Method | Route              | Description                               | Access       |
|------------|------------------|-------------------------------------------|-------------|
| GET        | /pets             | List all pets                              | Public      |
| GET        | /pets/new         | Show form to create a new pet             | Authenticated |
| POST       | /pets             | Create a new pet                           | Authenticated |
| GET        | /pets/:id         | View details of a single pet              | Public      |
| GET        | /pets/:id/edit    | Show form to edit an existing pet         | Authenticated (Owner only) |
| PUT/PATCH  | /pets/:id         | Update an existing pet                     | Authenticated (Owner only) |
| DELETE     | /pets/:id         | Delete a pet                               | Authenticated (Owner only) |
| GET        | /users/:id/pets   | View all pets created by a specific user  | Public / Authenticated |
