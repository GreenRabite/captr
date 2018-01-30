# Routes

Below are the routes used in **captr**.

## API Endpoints

### `users`

| Method        | URI Pattern     | Comments     |
|:-------------:|:---------------:| :-----------:|
| POST          | `/api/users `   | Sign Up      |
| GET           | `/api/users/:id`| User#Show    |
| PATCH         | `/api/users/:id`| User#Update  |

### `session`

| Method        | URI Pattern     | Comments     |
|:-------------:|:---------------:| :-----------:|
| POST          | `/api/session`  | Log In       |
| DELETE        | `/api/session ` | Log Out      |

### `photos`

| Method        | URI Pattern        | Comments     |
|:-------------:|:------------------:| :-----------:|
| GET           | `/api/photos `     | Photo#Index  |
| GET           | `/api/photos/:id`  | Photo#Show   |
| POST          | `/api/photos `     | Photo#New    |
| PATCH         | `/api/photos/:id ` | Photo#Update |
| DELETE        | `/api/photos/:id`  | Photo#Destroy|

### `albums`

| Method        | URI Pattern        | Comments     |
|:-------------:|:------------------:| :-----------:|
| GET           | `/api/albums`      | Album#Index  |
| GET           | `/api/albums/:id`  | Album#Show   |
| POST          | `/api/albums`      | Album#New    |
| PATCH         | `/api/albums/:id`  | Album#Update |
| DELETE        | `/api/albums/:id ` | Album#Destroy|

### `comments`

| Method        | URI Pattern        | Comments       |
|:-------------:|:------------------:| :-------------:|
| POST          | `/api/comments `   | Comment#New    |
| DELETE        | `/api/comments/:id`| Comment#Destroy|
| PATCH         | `/api/comments/:id`| Comment#Update |

### `tags`

| Method        | URI Pattern        | Comments       |
|:-------------:|:------------------:| :-------------:|
| GET           | `/api/tags/:id `   | Tags#Show      |
| POST          | `/api/tags `       | Tags#New       |

## Frontend Routes
| URL Pattern             | Comments                      |
|:------------------------|:------------------------------|
| `/`                     | Splash (if no current  user)  |
| `/signup`               | Sign Up (if no current user)  |
| `/login`                | Sign In (if no current user)  |
| `/home`                 | Home Page with PhotosIndex    |
| `/users/:user_id`       | Users Profile/Photos          |
| `/users/:user_id/edit`  | Users Edit (if Current User)  |
| `/photos/:photoId`      | Photo Show Page               |
| `/photos/:photoId/edit` | Photo Update Page             |
| `/albums/ `             | Album Index Page              |
| `/albums/new`           | Album New Page                |
| `/albums/:albumId`      | Album Show Page/ Add Photos   |
| `/albums/:albumId/edit` | Album Edit Page               |
| `/tags/:tagId`          | Tag Show Page                 |
