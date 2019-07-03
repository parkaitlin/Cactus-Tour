## The Cactus Tour

![Home page](/public/imgs/cactusTour.png)

This project is a redesign of a web application I used during my golf career. The Cactus Tour is a women's professional golf tour based in Arizona, and is geared towards golfers striving to play on the LPGA Tour, which is one of the largest and most competitive women's golf tour in the world. 

I wanted to focus on functionalities for the player and an adminstrator as well as the redesign to improve the user experience. And as part of my process, I reached out to the tour director of the Cactus Tour and challenged myself to implement features and functionalities he wanted to see in the redesign.

### The Demo is deployed on Heroku:
[Cactus Tour](https://cactus-tour.herokuapp.com/)

The application has full CRUD functionality. A potential player can create an account, login/logout, edit their profile, and register for upcoming tournaments. In addition, I implemented an admin feature that allows an admin to add, edit, and cancel tournaments. 

  ###### Sample Player
  Email: sample@player.com
  password: player1
  
  ###### Sample Admin
  Email: sample@admin.com
  password: admin1

### Code Snippet
The snippet below is from the backend and it handles updating the user's information in the MongoDB database. When a user edits their profile, "this.state" is passed from the frontend to the backend. If the user did not edit some areas of their information we want the update function in the backend to ignore the unchanged properties.

```
    update: async(req, res)=>{
        const bodyArray = Object.entries(req.body)
        for(const [property, value] of bodyArray){
            if(value === ''){
                delete req.body[property]
            }
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if(req.body.password){
                updatedUser.password = updatedUser.hashPassword(req.body.password)
                updatedUser.save();
            }
            res.json({
                status: 200,
                user: updatedUser
            })
        } catch (error) {
            res.json({
                error: error
            })
        }
    }
```

### Tech & Frameworks
- React
- Node.js
- Express
- Mongo
- Mongoose
- JSX
- HTML5
- CSS3
- styled-components
- Heroku
- Trello
- Sketch

### Future Improvements:
- Populate data to resemble all of the features of the original website
- Create one route for past results where the user can toggle between specific years
- Style improvements for a smoother and improved user experience
- Admin feature to create another admin
- Changes to lessen loading time
- Allow players to upload a profile picture
- Add a leaderboard for a current tournament or the most recent tournament to the Home Page
