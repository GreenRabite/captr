# ![Captr](http://res.cloudinary.com/greenrabite/image/upload/v1518198941/Screenshot_from_2018-02-09_09-55-08.png)

[Captr](http://captr.herokuapp.com) is a web application inspired by Flickr that will allow users of all ages to view and share their own photos. Captr will allow users to upload their own photos, create albums, and explore photos uploaded by other users.

## Features

+ User accounts with authentication
+ Users can comment on all pictures
+ Quick and fast photo uploading
+ Store and organize your photos in albums
+ Users can edit/update their own photos/albums
+ Users can explore the community and look at other users photos

## Technologies

+ React.js
+ Redux
+ Ruby on Rails
+ PostgreSQL
+ jQuery
+ SCSS
+ Cloudinary


#### Uploading Photos

Users can upload any number of photos to an album. Once the images have been uploaded, a submit form is rendered so that users can add a title and description to their photos.

![UploadExample](https://media.giphy.com/media/3o6nV08RL4xbace1vG/giphy.gif)

#### Adding Photos to Albums

When viewing their own album, users can upload a new photo to their album if they are the owners of the album. If they are not, the upload button does not appear. The user can also update and delete their photos/albums only if they are the owners.  

![Can Only Edit/Update Your Own Photos/Albums](https://media.giphy.com/media/26wkEGu3pGkxLuo36/giphy.gif)


## Future Improvements

#### Infinite Scroll
Infinite scrolling on the main Photo Index page would allow the user to  digest more information without the need to do a hard re-render. 

#### Search
A search bar will be added so that users can search for photos by tags.
