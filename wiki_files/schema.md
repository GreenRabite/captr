# Database Schema

## `users`

| Column Name      | Data Type | Comments                  |
|:----------------:|:---------:| :------------------------:|
| `id`             | Integer   | not null, primary key     |
| `username`       | String    | not null, indexed, unique |
| `email`          | String    | not null, indexed, unique |
| `profile_img`    | String    | not null                  |
| `password_digest`| String    | not null                  |
| `session_token`  | String    | not null, indexed, unique |
| `created_at`     | Datetime  | not null                  |
| `updated_at`     | Datetime  | not null                  |

## `albums`

| Column Name      | Data Type | Comments                      |
|:----------------:|:---------:| :----------------------------:|
| `id`             | Integer   | not null, primary key         |
| `title`          | String    | not null                      |
| `description`    | Text      | optional                      |
| `owner_id`       | Integer   | not null, foreign key, indexed|
| `created_at`     | Datetime  | not null                      |
| `updated_at`     | Datetime  | not null                      |

## `photos`

| Column Name      | Data Type | Comments                      |
|:----------------:|:---------:| :----------------------------:|
| `id`             | Integer   | not null, primary key         |
| `title`          | String    | not null                      |
| `description`    | Text      | optional                      |
| `owner_id`       | Integer   | not null, foreign key, indexed|
| `created_at`     | Datetime  | not null                      |
| `updated_at`     | Datetime  | not null                      |

## `albums_photos`

| Column Name      | Data Type | Comments                      |
|:----------------:|:---------:| :----------------------------:|
| `id`             | Integer   | not null, primary key         |
| `album_id`       | Integer   | not null, foreign key         |
| `photo_id`       | Integer   | not null, foreign key         |
| `created_at`     | Datetime  | not null                      |
| `updated_at`     | Datetime  | not null                      |

* index on [:album_id, :photo_id], unique: true

## `comments`

| Column Name      | Data Type | Comments                      |
|:----------------:|:---------:| :----------------------------:|
| `id`             | Integer   | not null, primary key         |
| `body`           | String    | not null                      |
| `user_id`        | Integer   | not null, foreign key, indexed|
| `photo_id`       | Integer   | not null, foreign key, indexed|
| `created_at`     | Datetime  | not null                      |
| `updated_at`     | Datetime  | not null                      |

## `tags`

| Column Name      | Data Type | Comments                      |
|:----------------:|:---------:| :----------------------------:|
| `id`             | Integer   | not null, primary key         |
| `name`           | String    | not null                      |
| `created_at`     | Datetime  | not null                      |
| `updated_at`     | Datetime  | not null                      |
