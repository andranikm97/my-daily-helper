# Development plan

## Back-end (**BE**):

1) [x] Server
2) [x] Request logger
3) [x] Routes
4) [x] Controllers
   1) [x] Get all tasks
   2) [x] Post a task 
   3) [x] Delete a task
5) Schema and Model
   1) [x] Task schema
   2) [ ] Event schema
   3) [ ] Note schema
   4) [ ] Though schema
6) [x] Not found
7) [ ] Connect to FE

## Front-end (**FE**):

*Start with mobile!*

1) Try to envision what your app will look like with *Balsamic*
2) [x] Create a general structure (no worries about styling just yet)
   1) [x] Title
   2) [x] Submission form 
   3) [x] Container of information 
3) [x] Create a task structure generator
4) [x] Connect task form with POST request to server
5) [x] Connect task displayer with GET request to server
6) [ ] Connect task with delete request to server
7) [ ] Apply some styling to code
   1) [ ] Drop-in menu
   2) [ ] Dropdown menus for different fields (tasks, events, reminders)
   3) [x] Fix full-screen overflow cutoff
8) [ ] Make a choice
   1) [ ] Create new schema types, as outlined in 5) of BE
   2) [ ] Filter data relative only to today's date
   3) [ ] Implement ability to scroll through days

Features to implement:
1) Make tasks that can be set as persistent, meaning they will not only work for the day but as long as they are not completed. Other tasks should probably be accounted to the day? Right?


## General:

If content with BE and FE, several leaps to make:
* [ ] Deploy to Heroku
* [ ] Refactor FE to React
* [ ] How to make adaptive CSS