Schema

1) User
* username - unique/presence/index
* email - unique/presence/index
* fname - presence
* lname - presence
* session_token - unique/presence/index
* passwordHash
* password - mini6, allow_nil (not saved in db)
* city - presence (inclusion? drop down?)
* state -
* country - presence

2) Photos
* photo_id - primary key
* user_id - presence/index (foreign key)
* album_id - presence/index (foreign key)
* title - presence/ search
* alt - presence (background only? )
* caption - presence (background only?)
* views - presence (background only)
* fave count  - count from favorites table???
* cover photo id - presence/index

3) Albums
* album_id - primary key
* owner_id - (user_id & foreign key) presence/index
* date - date uploaded (use timestamps)
* cover_picture_id - (is needed??) has one
