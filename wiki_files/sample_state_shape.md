# Sample State

This page is a snapshot of what we may expect the store state to be at any given time. This state tree has been scrubbed and normalized to keep our application logic simple.

```
{
  entities: {
    users: {
      1: {
        id: 1,
        username: 'Rabite',
        email: 'andywluo@gmail.com',
        profile_image_url: 'profile_01.jpg',
        photos: [1, 5, 8],
        albums: [1, 4],
        followers: [2, 7, 9, 18, 25]
      },
      9: {
        id: 9,
        username: 'TastieRainbow',
        email: 'tandywane@gmail.com',
        profile_image_url: 'profile_09.jpg',
        photos: [13, 14, 17],
        albums: [9],
        followers: [1, 6]
      }
    },
    photos: {
      5: {
        id: 5,
        img_url: 'picture_05.jpg',
        title: 'Horseshoe Bend',
        description: 'A quick shot from our trip to Arizona',
        owner_id: 1,
        album_id: 1,
        comments: [3, 6, 9],
        tags: [4, 5],
        favorited: [1, 2, 9, 11, 17]
        }
      },
    albums: {
      1: {
        id: 2,
        owner_id: 1,
        title: 'Antelope Canyon Dreams',
        description: 'Fulfilling a life long dream',
        photos: [3, 4, 5, 7]
      }
    },
    comments: {
      4: {
        id: 4,
        body: 'Awesome picture!!',
        user_id: 1,
        photo_id: 5,
        album_id: 1
      }
    },
    tags: {
      5: {
        id: 5,
        title: 'landscape'
      }
      27: {
        id: 27,
        title: 'portrait'
      }
    }
    ui: {
      loading: true/false,
      sorting: binary,
      searchTerm: "Corgis"
    },
    errors: {
      login: ["Incorrect username/password combination"],
      photoForm: ["Title/Description can't be blank!", "No photo selected!"],
      albumForm: ["Title/Body can't be blank!"],
      commentForm: ["Body can't be blank!"]
    },
    session: {
      id: 1,
      username: 'Rabite',
      current_user: true
    }
  }
}
```
