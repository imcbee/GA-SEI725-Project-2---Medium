# General Assembly SEI725 Project 2: Reverse Engineer Medium

##### Table of Contents  
1. [Website Link](#websitelink)
2. [Project Description](#projectdescription)  
3. [Goals and Stretch Features](#goalsandstretchfeatures)  
4. [Wireframe](#wireframe)
5. [Example Pictures](#examplepictures)     
6. [Tech Stack](#techstack) 
7. [Coding Challenges](#codingchallenges)

---
### [Website Link](https://ga725-project2-medium.herokuapp.com/)<a name="websitelink"></a>
---

## Project Description:<a name="projectdescription"></a>
The purpose of this project is to reverse engineer a full-stack web application using Express, Mode.js, Mongoose and MongoDB.  Our team had selected the blogging website Medium because of our interest in blogs and the type of documents and relationships in our database.  For our web application, we have built capabilities for users to create an account with user authentication, to create blog posts and make reviews of other user's blog posts.

## Goals and Stretch Features:<a name="goalsandstretchfeatures"></a>

### Goals:
1. Build and reverse engineer a functional full-stack web application.
2. Have 3 key features within our site.
3. Design user flow and provide an improvement on design flow.
4. Minimum of 2 databases.
5. Full CRUD functionality.
6. Express app that renders HTML pages from EJS templates.
7. RESTful Routes designed with REST convention.
8. Use EJS to render objects from MongoDB.
9. Design and demonstrate dastabase document relationship(s) (one-to-many or many-to-many).
10. Style design with CSS flexbox, grid, bootstrap or other CSS framework.
11. Deploy on Heroku.

### Stretch Goals:
1. Establish User Authentication (user login/logout and registeration).
2. Allow users to have an avatar profile picture.
3. Create user privelges (i.e. edit, delete posts, comment and review article).
4. Establish an embedded model to measure likes on an article.
5. Measure article read time using a functional algorithm.
6. Create a home "Start Reading" button to allow a user to read a random article from the database.
7. Create a "Our Story" route to github repository.


## Wireframe:<a name="wireframe"></a>
This section describes the planning process and planning designs of how our web application.

### User Flow and Database Relationship
The picture below describes loosely how the user flow would be established.  This is not exact how the finally product is represented, but the planning phase of this project allowed us to plan ahead of and establish goals of our web application. The everday lay-user will start on the home page, which is the index page of the articles that the lay-user can browse and select an article to read.  Lay-user can read articles, but will not be able to create or comment on articles unless they register as a user.  Once logged-in, users can like, comment and review articles that they read.  User can also edit and delete their own 

![Screen Shot 2022-09-04 at 1 19 29 PM](https://user-images.githubusercontent.com/107007458/188325612-f557197b-59b2-4227-a665-28c6648c8b0e.png)

### Web Application Routes Wireframe
Describe the design of different route pages.
Include picture of wireframes below.

## Example Site Pictures:<a name="examplepictures"></a>
We will get pictures of the finished website and display here



## Tech Stack:<a name="techstack"></a>
### Vanilla HTML and CSS
HTML was used to structure and organize the containers, elements, forms, buttons and other tags on EJS files.  Partials were also made to simplify web page elements (i.e. navbar) and grant access to user privileges (i.e. comment section).

### JavaScript
JavaScript was used on EJS files to give funtionality on the index and show pages by displaying articles and comments.  It also gave functionality to our user stories like the random "Start Reading" button and the read time algorithm.

### Node.js and Express
Node.js was used as the back-end environment while Express was the framework to build our web application.

### Mongoose and MongoDB
MongoDB was used as our NoSQL database and database storage.  Mongoose served to connect the Node.js environment with MongoDB by translating and representing data relationships along with schema validation.

### Postman
Postman was used as a tool to make sure establish routes were functioning properly and that database documents were correctly relating to other database documents.



## Coding Challenges:<a name="codingchallenges"></a>
The best solution to grant user privileges was to display the EJS HTML elements if it meet a conditional.  In the instance of having the user being granted to edit and delete their own written article was difficult because of exactly knowing what the data type and how it was structured to be able to make the comparison.  The strategy was to be able to understand the data type through console-logging the data and matching the user's ID data type with the article's user ID property data.  This was not appparent at first because the article's user ID needed to be converted into a string before matching the user-in-session's ID.

Show Page: 
```javascript
<%if(typeof user !== 'undefined' && articles.user.toString() === user.id) { %>
        <%- include('./partials/editdelete') %>
<% }%>
```
Show Route in Articles Controller:
```javascript
router.get('/:id', async (req ,res, next) => {
    try{
        const foundArticle = await db.Articles.findById(req.params.id);
        const articleReview = await db.Reviews.find({articles: req.params.id});
        const userSession = await db.User.find(req.session.currentUser);
        
        if(req.session) {
            const session =req.session;
            const context = {
                articles: foundArticle, 
                id: foundArticle._id, 
                reviews: articleReview, 
                username: userSession, 
                routes: res.locals.routes,
                userId: foundArticle.user,
                session: session 
            };
            res.render('show.ejs', context);
        }else {
            const context = {
            articles: foundArticle, 
            id: foundArticle._id, 
            reviews: articleReview, 
            username: userSession, 
            routes: res.locals.routes,
            userId: foundArticle.user 
            };
            res.render('show.ejs', context);
        }
    }catch(err) {
        console.log(err);
        res.redirect('/404');
        return next();
    };
});
```

Please copy and paste desired code with back 3 ticks 
```javascript 
place code in here 
```


## Future Steps:
* Medium employs complex dynamic features when creating a blog post.  It would be a great goal to be able to make the create page more dynamic in adding text with DOM manipulation to make a more responsive page.
* Importing a picture from a local machine storage would be a better user experience or story if the user's desired picture was not readily available online.  This could be added on the article create route form.
* Adding the user's other social media on the blog post would be easily achieve in modifying the user's schema to accept a URL link of their socia media accounts (i.e. Linkedin, Twitter, Facebook).
* Allowing for sub-comments on the comment section for the author or other users to dialog with each other would increase interactivity.  This would require an embedded property for reviews schema that would take multiple comments.



## Support:
Please contact one of the following emails below for questions on support:  
imcbee@terpmail.umd.edu\
next email\
next email\

## Contributions:
### Ian McBee
* Backend Development and Front-End Development

### Nsikak Udoh

### Corey Lott

Thank you all GA instructors, GA fellows and friends for your help, advice and directions in this project!!