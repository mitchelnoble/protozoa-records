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

<br>

## Overview

**Protozoa Records** is an ecommerce application focusing on the purchase of vinyl music records. This application is a modern take on the well-known Los Angeles record shop Amoeba Music's website focusing on responsive design and user experience. Users will be able to view a list of records, purchase records, register to the website, log-in, and sign-out. Users designated as Staff will be able to create new vinyl records, edit their data, and delete them.    


<br>

## MVP

_**Protozoa Records** MVP The application will feature full CRUD on both the React front-end and Ruby on Rails back-end._

<br>

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

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _useState, useParams, useEffect._ |
|   React Router   | _Link, Smooth Scroll, Router, useHistory._ |
|     Ruby on Rails      | _bcrypt, cors, puma, pry._ |


<br>

#### Wireframes

![Protozoa Records - Landing](https://user-images.githubusercontent.com/74211139/106242610-d201a080-61bc-11eb-954e-86b1eefa2e1a.png)

#### Component Tree

![Protozoa Records Component Tree ](https://user-images.githubusercontent.com/74211139/106238940-a24f9a00-61b6-11eb-858e-b9ff6c1ae40f.png)

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Layout.jsx
      |__ Vinyl.jsx
|__ container/
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
