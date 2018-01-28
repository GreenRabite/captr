# Wireframes

Wireframes are a important tool in the planning process allowing the designers and programmers alike to design and plan the page.

## Home Page

![Home Root Page](https://i.imgur.com/Be5TnyL.png)

NavBar (Conditional Show if Current User exists)
    * `SiteLogo`
    * `SearchBar`
        * `SearchBarIndex`
            * `SearchBarIndexItems`
    * `NewSession` Button (Sign In)
    * `NewUser` Button (Sign Up)

## Session Forms

![New Session](https://i.imgur.com/1rlVxak.png)


`NewSession` Page (Conditional. Will redirect to `PicturesIndex` if sign on already)
    * Clear modal on screen
    * Will redirect to here if no current user and they try to add `Photo` / `Album`
    * Logged in users cannot access this page

![New User](https://i.imgur.com/aIEmzWc.png)


`NewUser` Page (Conditional. Will redirect to `PicturesIndex` if sign on already)
    * Clear modal on screen
    * Logged in users cannot access this page

## Dashboard Profiles

![Dashboard/ PictureIndex](https://i.imgur.com/qU6TeW5.png)

The `PhotoIndexContainer` will house the `PhotoIndexList` and `PhotoIndexListItems`. This will be the page the logged in user will visit after they sign in. Will display three columns of various sizes (1/3 Grid System). Each of these columns will be a `PhotoIndexList` component. Will show photos from different users.

## Photos

![PictureShow Page](https://i.imgur.com/FA2TpEz.png)

This page will have both the `PhotoShowContainer` and `PictureShow` page shows the individual picture and will also house the `CommentShowContainer`. It will also houses the `Tags` each photo will have. `Users` will also be able to favorite their favorite `Photos`.

## Comments

![CommentShowContainer Page](https://i.imgur.com/BBE7lUZ.png)

When the `Users` scroll below the `PictureShow` page, they will see the `CommentShowContainer` which houses the `CommentShowList` and the `CommentShowListItems`. I am also planning to implement a `Favorite` button.

## Albums

![AlbumIndex Page](https://i.imgur.com/g7dFkQH.png)

Users can look at `Albums` located in the `AlbumIndex` page. This will contain the `AlbumIndexContainer` which will have the `AlbumIndexList` and the individual `AlbumIndexListItems`.

![AlbumShow Page](https://i.imgur.com/Gwg3SGs.png)

Clicking on a `Album` will lead to the `AlbumShow` page which will house the `PhotoList` whose `album_id` matches this one. Within the `PhotoList` will be the `PhotoListItems`.

![TagShow Page](https://i.imgur.com/At11Lzl.png)

Clicking on one of the `Tags` in the `PhotoShow` page will lead to the `TagShow` page which will house the `Photos` that have the same tag.

## Users

![UserShow Page](https://i.imgur.com/cXmFW8z.png)

`UserShow` page will have the `User` profile information. It will also house links that will link to the `Users` `Photos` and `Albums`. If the `currentUser` is the `UserShow`'s page, then they will also have the option to `Edit` the user. Otherwise, that button will not show up.

![UserShow Page](https://i.imgur.com/rAPulT7.png)

`Users` can add a new album from either the `AlbumIndex` page or from the `currentUser`'s profile. Launching the button will pop up a modal screen with text input for the User to upload their desired photos into ths album.

![UserShow Page](https://i.imgur.com/h7Gn5N3.png)

`Users` that press the `EditUser` button will be able to update their information (except their username). This will pop up a modal screen with a form that `Users` can edit the information.

![PhotoNew Page](https://i.imgur.com/pynaqnc.png)

`PhotoNew` is the form that pops up after a `User` wants to add a Photo to their album. Success of this will lead to the `PhotoShow` page.
