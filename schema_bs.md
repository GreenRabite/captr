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
* user_id - presence/index
* album_id - presence/index
* title - presence/ search
