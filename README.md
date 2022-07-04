<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/d-g-ivanov/tableFilthor">
    <img src="https://github.com/d-g-ivanov/learn-react/blob/main/assets/logo.png" alt="Learn React Logo" width="126">
  </a>

  <h3 align="center">Table Filthor</h3>

  <p align="center">
    Some react projects I did along the way.
    <!-- <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br /> -->
    <br />
    <a href="https://github.com/d-g-ivanov/learn-react/issues">Report Bug</a>
    ·
    <a href="https://github.com/d-g-ivanov/learn-react/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-repo">About The Repo</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#projects">Projects</a></li>
  </ol>
</details>



<!-- ABOUT THE Repo -->
## About The Repo

I wanted to make it easier to showcase my React learnings - all in one place.


<!-- GETTING STARTED -->
## Getting Started

Check the details of each project below, or download the source files from the respective folder.


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- LICENSE -->
## Projects

<details>
  <summary>Simple form</summary>
  
  ### Demo (codesandbox)
  <a href="https://codesandbox.io/s/condescending-stonebraker-kzytf">Code</a>   |   <a href="https://kzytf.csb.app/">Preview</a>
  
  ### Learnings
  Using useContext and useReducer
  Creating custom hooks

  ### Details
  Make a submission form with the following fields:		
    - First Name
    - Last Name
    - Email
    
  The fields should have colored borders that will change to a random color (the same for all fields, at the same time) on losing focus.

  There should be a submit button.
    
  Submission:	
    - The info should be sent to an endpoint (mocked). If the name has less than 5 characters the submission should fail.
    - The submit button should turn green if the response is 200. 
    - The button should turn red if the submission fails.

  Note: ignore the backend folder.

  Design is by choice, not pre-given.

</details>

<br>

<details>
  <summary>User list and their posts</summary>
  
  ### Demo (codesandbox)
  <a href="https://codesandbox.io/s/silly-sound-4w63x">Code</a>   |   <a href="https://4w63x.csb.app/">Preview</a>

  ### Learnings
  Create React collapsible component (reusable)
  Practise React useContext and useReducer
  Working with external APIs

  ### Details
  From https://jsonplaceholder.typicode.com/ call:

  /users - returns 10 users with user details

  /posts/:id - returns the posts of a given user

  At page load, call the API and visualize the 10 users as follows:
  - use a vertical list in the form of sections. Sections should be collapsible.
  - each section should have any user image and visualize user details in controlled input fields.
  - fields "name", "username", "email", "address.street", "address.suite", "address.city", "phone", "website" should be editable.
  - when submitted, display all fields via "alert".
  - add a "Get user's posts" button that fetches the posts for a given user (add the posts to the already existing user's profile in the store).
  - display the posts below the user details.

  Design is by choice, not pre-given.

</details>

<br>

<details>
  <summary>Photo Albums</summary>
  
  ### Demo (codesandbox)
  <a href="https://codesandbox.io/s/flamboyant-hooks-jbmvpg">Code</a>   |   <a href="https://jbmvpg.csb.app/">Preview</a>

  ### Learnings
  Practice useContext and useReducer. Make it look close to what Redux does and how ti works. (tried using redux, but cold not make it work with codesandbox)
  Turn a sync reducer to async using localStorage.
  Add scroll to top in React.
  Data post-processing after receiving from API.

  ### Details
  Use endpoint https://jsonplaceholder.typicode.com/photos to fetch set of images.
  Order the images in albums and visualize the albums as clickable cards.
  When an album is selected, display all the images in the given album.
  Add a Favourites album by default. Users can mark photos to add to that album.
  Photos in Favourites should persist after page reload.

  Design is by choice, not pre-given.

</details>

<br>

<details>
  <summary>User input validation and tracking</summary>
  
  ### Demo (codesandbox)
  <a href="https://codesandbox.io/s/compassionate-robinson-rhvqts">Code</a>   |   <a href="https://rhvqts.csb.app/">Preview</a>

  ### Learnings
  Experimented with different folder structure
  Creating reusable business-logic-only components

  ### Details
  Allow users to add work experience sections and fill them out.

  Text fields should be editable and support keyboard shortcuts for bold (ctrl/cmd+b), italics (ctrl/cmd+i) and underline (ctrl/cmd+u).

  Imagine there is an endpoint that validates user input and makes suggestion to improve their content.

  Mock the service as follows, required only for description field:
  - if user enters the phrase "I've done many projects", service should return following result, where message is a suggestion and range is whihc part of the user input the message affects:

  ``[
    {
      "range": [10,23],
      "message": "This is vague. Instead of “Managed projects for many clients”, say “Managed projects for 10 clients including BlueBank.”"
    },
    {
      "range": [0,23],
      "message": "Include a valuable metric if possible. For example: \"Increased revenue by 20% within one month.\"."
    }
  ]``

  - highlight in red the ranges where improvement can be made.
  - when hovering over the highlight, display a tooltip for the given message.

  Track the following:
  1. If user viewed the suggested correction
  2. If user changed their texts after viewing the suggestion
  3. If the suggestion was ignored


  Designs were pre-given but I am not at liberty to share. Done 1 to 1 with requirements.

</details>

<br>

<details>
  <summary>Github issues tracker</summary>
  
  ### Demo (codesandbox)
  <a href="https://codesandbox.io/s/hopeful-voice-1vfb0">Code</a>   |   <a href="https://1vfb0.csb.app/">Preview</a>

  ### Learnings
  "Infinite scroll"-type pagination 
  Using useContext and useReducer
  Create custom hooks
  Using external APIs
  Persistent store

  ### Details
  Build a web application that gives information about the open issues in a given repository. 
  When a user enters the GitHub Username and the repository name into the field on the Home/Main page of this application, the following is what should happen:
  a.	The page will show the full list of the open issues for the given repository. 
  b.	Each item in the list will:
  i)	Show the title of the issue
  ii)	Show the assignee of the issue
  iii)	Show the assignee Profile Avatar
  iv)	When clicking on an issue title, display/navigate to the comments of it
  c.	When you reload the browser the inputs should hold the Username and repo name and have to display the repo as well.
  i)	You can use any method you want to do the task

  Design is by choice, not pre-given.

</details>
