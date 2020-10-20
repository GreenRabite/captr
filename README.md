# ![captr](http://res.cloudinary.com/greenrabite/image/upload/v1518198941/Screenshot_from_2018-02-09_09-55-08.png)

[captr live](http://captr.herokuapp.com)

captr is a full-stack web application modeled after Flickr. It was developed with a Ruby on Rails backend, PostgreSQL relational database, and a React.js/Redux architecture frontend. The backend API endpoints are based on REST principles and form the backbone of this web application CRUD functionality. This project was designed and built within a two week timeframe although planned improvements will be added over time.

[captr](http://captr.herokuapp.com) is a web application that will allow users of all ages to view and share their photos with the world. Captr will allow users to upload their own photos, create albums, and even explore photos uploaded by other users.

## Features and Implementation

+ User accounts with authentication
+ Users can comment on all pictures
+ Quick and fast photo uploading
+ Store and organize your photos in albums
+ Users can edit/update their own photos/albums
+ Users can explore the community and look at other users photos
+ Users can save their favorite photos for further use

## Technologies

+ React.js
+ Redux
+ Ruby on Rails
+ PostgreSQL
+ jBuilder
+ jQuery
+ SCSS
+ Cloudinary

### Photos
  Photos are the meat and potatoes of the application and the main media consumable from the user.

#### Uploading Photos

Users can add photos to albums they own with the `Add Photo` button. Users can upload any number of photos to an album they own. Once the images have been uploaded, a submit form is rendered so that users can add a title and description to their photos.

![UploadExample](https://github.com/GreenRabite/captr/raw/documentation/repo_assets/new-picture.gif)

#### Adding Photos to Albums

When viewing their own album, users can upload a new photo to the album only if are the owners of the album. If they are not, the upload button does not appear. The user can also update and delete their photos/albums only if they are the owners. This was done with a join association between `albums` and `photos` in a `joins table` called `album_photos`.

![Can Only Edit/Update Your Own Photos/Albums](https://media.giphy.com/media/26wkEGu3pGkxLuo36/giphy.gif)

### Albums

Albums belong to a user and can hold many photos. Any registered user can create a new album.  Users can only upload/edit/ and delete photos in their own `album`. `photo` is associated with `album` as a `dependent: destroy`


![AlbumsView](https://media.giphy.com/media/l0DAGvpjsOm9DF2yQ/giphy.gif)

### Comments

Comments belong to a `user` and a `photo`. The comments are a users way to express their feelings on a particular photo. Comments can only be delete by the `user` who created it. Other users will not see the 'X' icon which will delete the comment onClick.


![CommentViews](https://media.giphy.com/media/l3dj31OVWeRV5LUxG/giphy.gif)

## Future Improvements

#### Infinite Scroll
Infinite scrolling on the main Photo Index page would allow the user to  digest more information without the need to do a hard re-render.

#### Tags Inputted By The User
Having tags given by the user will allow users to more easily organize photos.

#### Search
A search bar will be added so that users can search for photos by tags.
