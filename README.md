![Protozoa Landing Logo](https://user-images.githubusercontent.com/74211139/106198415-dbf9b400-6168-11eb-844a-5b76c5bdebc5.png)

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)
- [Linkedin Profile](#Linkedin-Profile)
<br>

## Overview

**Protozoa Records** is an ecommerce application focusing on the purchase of vinyl music records. This application is a modern take on the well-known Los Angeles record shop Amoeba Music's website focusing on responsive design and user experience. Users will be able to view a list of records, purchase records, register to the website, log-in, and sign-out. Users designated as Staff will be able to create new vinyl records, edit their data, and delete them.    


<br>

## MVP

### Server (Back-End)
- _Ruby on Rails server_
- _RESTful JSON endpoints_
- _Database with 3 tables:_
  -_User_
  -_Reviews_
  -_Vinyl_
- _At least 1 association between tables:_
  -_Users to Vinyl, many-to-many_ 
- _Usage of Rails to interact with database and build models_
- _Implement controllers for full CRUD_

### Client (Front-End)
- _React application_
- _At least 8 components_
- _Purely React for DOM manipulation_
- _Data consumption from Rails API and rendered in components_
- _Usage of React Router_
- _Styled with Flexbox and/or Grid_
- _Full CRUD_

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _useState, useParams, useEffect._ |
|   React Router   | _Link, Router, useHistory._ |
|   React Scroll   | _smooth scroll, scrolltotop, Link_ |
|     Ruby on Rails      | _bcrypt, cors, puma, pry._ |


<br>

#### Wireframes

![Wireframes](https://user-images.githubusercontent.com/74211139/106251883-63c3da80-61ca-11eb-93f2-8a1c546f97df.png)

#### Component Tree

![Protozoa Records Component Tree ](https://user-images.githubusercontent.com/74211139/106238940-a24f9a00-61b6-11eb-858e-b9ff6c1ae40f.png)

#### Component Breakdown

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Nav.jsx
      |__ Footer.jsx
      |__ Layout.jsx
      |__ Vinyl.jsx
      |__ Review.jsx
      |__ Location.jsx
|__ containers/
      |__ VinylContainer.jsx
      |__ ReviewsContainer.jsx
|__ screens/
      |__ Landing.jsx
      |__ VinylList.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ About.jsx
      |__ VinylDetail.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ reviews.js
      |__ vinyl.js
|__ utils/
      |__ filter.js
     

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Image Files in Assets    |    L     |     5 hrs      |     x hrs     |    x hrs    |
| Creating back-end controllers    |    H    |     2 hrs      |     x hrs     |    x hrs    |
| Creating back-end routes    |    H     |     2 hrs      |     x hrs     |    x hrs    |
| Creating back-end models    |    H     |     2 hrs      |     x hrs     |    x hrs    |
| Creating back-end seed data    |    H     |     2 hrs      |     x hrs     |    x hrs    |
| Setting up dependencies  |    H     |     1 hrs      |     x hrs     |    x hrs    |
| Write functions for API calls for Vinyl |    H     |     3 hrs      |     x hrs     |     TBD     |
| Write functions for API calls for User |    H     |    3 hrs    |   x hrs   |  TBD   |
| Build Nav Component |    H     |     2 hrs      |     x hrs     |     TBD     |
| Build Footer Component |    H     |     2 hrs      |     x hrs     |     TBD     |
| Build Layout Component |    H     |     3 hrs      |     x hrs     |     TBD     |
| Build Vinyl Component |    H     |     3 hrs      |     x hrs     |     TBD     |
| Build Review Component |    L     |     5 hrs      |     x hrs     |     TBD     |
| Build Location Component |    H     |     2 hrs      |     x hrs     |     TBD     |
| Create and route vinyl container |    H     |     1 hrs      |     x hrs     |     TBD     |
| Create and route review container |    L     |     1 hrs      |     x hrs     |     TBD     |
| Create and route Landing screen |    H     |     1 hrs      |     x hrs     |     TBD     |
| Create and route VinylList screen |    H     |     1 hrs      |     x hrs     |     TBD     |
| Create and route VinylDetail screen |    H     |     1 hrs      |     x hrs     |     TBD     |
| Create and route Login screen |    H     |     1 hrs      |     x hrs     |     TBD     |
| Create and route Register screen |    H     |     1 hrs      |     x hrs     |     TBD     |
| Create and route About screen |    L     |     2 hrs      |     x hrs     |     TBD     |
| Write functions for filtering VinylList in utils |    L     |     3 hrs      |     x hrs     |     TBD     |
| Route App.js |    H     |     2 hrs      |     x hrs     |     TBD     |
| Front-end debugging |   H   |   5 hrs   |   x hrs   |   TBD   |
| Back-end debugging |   H   |   5 hrs   |   x hrs   |   TBD   |
| TOTAL               |    -     |     61 hrs      |     x hrs     |     TBD     |

<br>

#### ERD Model

![ERD for Protozoa Records](https://user-images.githubusercontent.com/74211139/106291680-cafc8180-6200-11eb-906d-0acf355ca153.png)

<br>

***

## Post-MVP

-_Star ratings with review submission_
-_Working shopping bag component with checkout screen_
-_More genres with respective vinyl records_

***

## Code Showcase


## Code Issues & Resolutions


## Linkedin Profile

[Mitchel's Linkedin](https://www.linkedin.com/in/mitchel-noble/)

