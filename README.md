# General Assembly SEI725 Project 2: Reverse Engineer Medium
---

```javascript

                      ___           ___           ___                       ___           ___     
                     /\__\         /\  \         /\  \          ___        /\__\         /\__\    
                    /::|  |       /::\  \       /::\  \        /\  \      /:/  /        /::|  |   
                   /:|:|  |      /:/\:\  \     /:/\:\  \       \:\  \    /:/  /        /:|:|  |   
                  /:/|:|__|__   /::\~\:\  \   /:/  \:\__\      /::\__\  /:/  /  ___   /:/|:|__|__ 
                 /:/ |::::\__\ /:/\:\ \:\__\ /:/__/ \:|__|  __/:/\/__/ /:/__/  /\__\ /:/ |::::\__\
                 \/__/~~/:/  / \:\~\:\ \/__/ \:\  \ /:/  / /\/:/  /    \:\  \ /:/  / \/__/~~/:/  /
                       /:/  /   \:\ \:\__\    \:\  /:/  /  \::/__/      \:\  /:/  /        /:/  / 
                      /:/  /     \:\ \/__/     \:\/:/  /    \:\__\       \:\/:/  /        /:/  /  
                     /:/  /       \:\__\        \::/__/      \/__/        \::/  /        /:/  /   
                     \/__/         \/__/         ~~                        \/__/         \/__/    


```
---
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
The purpose of this project is to reverse engineer a full-stack web application using Express, Mode.js, Mongoose and MongoDB with our current understanding of Front-End development.  Our team had selected the blogging website Medium because of our interest in blogs and the type of documents and relationships in our database.  For our web application, we have built capabilities for users to create an account with user authentication, to create blog posts and make reviews of other user's blog posts.

## Goals and Stretch Features:<a name="goalsandstretchfeatures"></a>

### MVP Goals:
1. Build and reverse engineer a functional full-stack web application.
2. Have 3 key features within our site.
3. Design user flow and provide an improvement on design flow.
4. Minimum of 2 databases.
5. Full CRUD functionality.
6. Express app that renders HTML pages from EJS templates.
7. RESTful Routes designed with REST convention.
8. Use EJS to render objects from MongoDB.
9. Design and demonstrate database document relationship(s) (one-to-many or many-to-many).
10. Style design with CSS flexbox, grid, bootstrap or other CSS framework.
11. Deploy on Heroku.

### Stretch Goals Achieved:
1. Establish User Authentication (user login/logout and registration).
2. Allow users to have an avatar profile picture.
3. Create user privileges (i.e. edit, delete posts, comment, review article and user related posts).
4. Establish an embedded model to measure likes on an article.
5. Measure article read time using a functional algorithm.
6. Create a home "Start Reading" button to allow a user to read a random article from the database.
7. Create a "Our Story" route to github repository.
8. Use media queries to ensure pages render nicely in different screen sizes.


## Wireframe:<a name="wireframe"></a>
This section describes the planning process and planning designs of how our web application.

### User Flow and Database Relationship
The picture below describes loosely how the user flow would be established.  This is not exact how the finally product is represented, but the planning phase of this project allowed us to plan ahead of and establish goals of our web application. The everday lay-user will start on the home page, which is the index page of the articles that the lay-user can browse and select an article to read.  Lay-user can read articles, but will not be able to create or comment on articles unless they register as a user.  Once logged-in, users can like, comment and review articles that they read.  User can also edit and delete their own articles and comments.

![Screen Shot 2022-09-04 at 1 19 29 PM](https://user-images.githubusercontent.com/107007458/188325612-f557197b-59b2-4227-a665-28c6648c8b0e.png)

### Web Application Routes Wireframe
The pictures below are wireframes of what the index page (or home page) and show page for the lay-user and if the user were logged in.  The aesthetics of Medium was what captured to us to set a goal to hone in our user interface and experience.  We wanted to have the hoome page display all of the articles for users to see and interact with the article title to read more.  The show page for the selected article would display the body of content and a comments section of other users to interact with the article author.  

![Home_page](https://user-images.githubusercontent.com/107007458/188521457-04f52618-d641-4420-9e4d-9f46d6cc8166.jpeg)

![User_post_-_Stretch_goals](https://user-images.githubusercontent.com/107007458/188521540-dd211491-29a0-4022-8037-31e74fb91e80.png)

![Single_article_page](https://user-images.githubusercontent.com/107007458/188527931-c693f26b-5b11-4bc7-97b2-ce4fbba577a8.jpeg)


## Example Site Pictures:<a name="examplepictures"></a>
![Screen Shot 2022-09-05 at 9 38 56 PM](https://user-images.githubusercontent.com/107007458/188529000-9f31c12e-c917-4043-b6fc-4382295188c5.png)

![Screen Shot 2022-09-05 at 9 40 03 PM](https://user-images.githubusercontent.com/107007458/188529096-14ed3283-2588-4111-b3c9-671cbfb85eb3.png)

![Screen Shot 2022-09-05 at 9 40 38 PM](https://user-images.githubusercontent.com/107007458/188529141-a1696963-1f30-42bc-b8e1-0e70ca4357cf.png)

![Screen Shot 2022-09-05 at 9 41 12 PM](https://user-images.githubusercontent.com/107007458/188529208-c309d4e5-b0be-4f62-92e7-ec54c866e241.png)

## Tech Stack:<a name="techstack"></a>
### Vanilla HTML, CSS
HTML was used to structure and organize the containers, elements, forms, buttons and other tags on EJS files.  Partials were also made to simplify web page elements (i.e. navbar) and grant access to user privileges (i.e. comment section).

### JavaScript and EJS
JavaScript was used on EJS files to give functionality on the index and show pages by displaying articles and comments.  It also gave functionality to our user stories like the random "Start Reading" button and the read time algorithm.

### Node.js and Express
Node.js was used as the back-end environment while Express was the framework to build our web application.

### Mongoose and MongoDB
MongoDB was used as our NoSQL database and database storage.  Mongoose served to connect the Node.js environment with MongoDB by translating and representing data relationships along with schema validation.

### Postman
Postman was used as a tool to make sure establish routes were functioning properly and that database documents were correctly relating to other database documents.


## Coding Challenges:<a name="codingchallenges"></a>
The best solution to grant user privileges was to display the EJS HTML elements if it meet a conditional.  In the instance of having the user being granted to edit and delete their own written article was difficult because of exactly knowing what the data type and how it was structured to be able to make the comparison.  The strategy was to be able to understand the data type through console-logging the data and matching the user's ID data type with the article's user ID property data.  This was not appparent at first because the article's user ID needed to be converted into a string before matching the user-in-session's ID.  (-Ian McBee)

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
The Start Reading button will pick an article at random and allow any user or non-user to immediately start reading. Great for those who are not picky and just want some good content.  (-Corey Lott)\
\
Index Page: 
```javascript
<div class="btn btn-regualar"><a class="reading-start" href="/<%= articles[Math.floor(Math.random() * articles.length)]._id%>">Start Reading</a></div>
```

Displaying the index page with all of the articles with the neccessary information to draw readers in was challenging. A forEach method containing the EJA elements were used to display the proper information for readers.  (-Nsikak Udoh)\
\
Index Page:
```javascript 
<section class="container">
        <div class="">

            <h2 class="title">All Articles</h2>
        </div>
        <div class="postGrids three-col">
            <% articles.forEach((element, idx) => {  %> 
                
            <div class="grid">
                <div class="count"><%= idx +1 %></div>
                <div class="postItem">
                    <div class="authorMeta">
                        <img src="<%= element.image%>" alt="Author Image" class="authorImage">
                        <span class="authorName"><%= element.author %> </span>
                    </div>

                    <div class="postTitle">
                        <a href="<%= element._id %> "><%=element.title %> </a>
                    </div>
                    <div class="postMeta"><span class="date"><%= (new Date(element.publishDate)).toLocaleDateString('en-US') %> </span>▪ <%= wordCount(element.text) %> min read</div>
                </div>
            </div>
            <% }); %> 
        </div>
    </section> 
```

## Future Steps:
* Medium employs complex dynamic features when creating a blog post.  It would be a great goal to be able to make the create page more dynamic in adding text with DOM manipulation to make a more responsive page.
* Importing a picture from a local machine storage would be a better user experience or story if the user's desired picture was not readily available online.  This could be added on the article create route form.
* Adding the user's other social media on the blog post would be easily achieve in modifying the user's schema to accept a URL link of their socia media accounts (i.e. Linkedin, Twitter, Facebook).
* Allowing for sub-comments on the comment section for the author or other users to dialog with each other would increase interactivity.  This would require an embedded property for reviews schema that would take multiple comments.
* Resize article images to fixed height and width.
* Complete the stretch goal of making all pages responsive using media query.
* Refactor code to be dry and efficient.


## Support:
Please contact one of the following emails below for questions for support:  
imcbee@terpmail.umd.edu\
Lottc0527@gmail.com\
nsikak@sparknerds.io

## Contributions:
### Ian McBee
* Backend Development Lead and Front-End Development

### Nsikak Udoh
*  Design Lead, Front-End Development and some Back-End Development

### Corey Lott
* Front-End Development and some Back-End Development

---
## Thank you all GA instructors, GA fellows and friends for your help, advice and directions in this project!!

