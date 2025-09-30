# ERD: Pet Adoption Web App

## User Table

| Column Name | Data Type | Key | Description |
|-------------|-----------|-----|-------------|
| username        | STRING   |     | Name of the user |
| password    | STRING   |     | User's hashed password |


## Pet Table

| Column Name | Data Type | Key | Description |
|-------------|-----------|-----|-------------|
| name        | STRING   |     | Name of the pet |
| type        | STRING   |     | Type of pet (dog, cat, etc.) |
| age         | INT       |     | Age of the pet |
| description | TEXT      |     | Description of the pet |
| image_url   | STRING   |     | URL to the pet's image |

## Relationships

- **User (1) → Pet (Many)**: A registered user can create multiple pets.
- **Admin role**: Can manage all pets and users (handled in app logic).
