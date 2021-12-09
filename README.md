#WeeklyChallenge 03 - simulating countdown timer
In this challenge, you are going to implement simple countdown timer with these features:
- Duration (inp-duration) can be set in seconds and decrement time (inp-decrement) in milliseconds; 1 second = 1000 milliseconds
- Start button (btn-start) can be pressed and actual remaining time (remaining-time) is displayed and updated based on the decrement time
- Reset button (btn-reset) can be pressed at any time, especially when timer has ended.
What to do when page is loaded:
- focus on duration (the cursor is located in the input)
- remove text of remaining time
What to do when start button is pressed:
- check that both inputs are filled (have some value)
- if no: focus on the first unfilled input
- if yes:
  1) make both inputs (duration and decrement) and start button disabled so value can't be changed while timer is running and so timer has to be reseted at first
  2) start timer and show actual remaining time in seconds formatted to three decimal places (like 5.100 or 6.900)
What to do when timer has just ended (zero time remains):
- Style the text (0.000) of remaining time to be darkred
What to do when reset button is pressed:
- destroy timer
- make both inputs and start button enabled
- style text of remaining time to be in original color
- remove text of remaining time
- focus on duration
Don't forget to deal with situation when duration is not divisible by decrement time (like duration = 2 and decrement = 300 where 2000 / 300 = 6 with rest 200).
Fork template at: https://codepen.io/OndrejPlaner/pen/xxXbzeK
For a little help go at: https://bit.ly/3piJc99
For previous challenge (02) go at: https://www.facebook.com/groups/1605550896386197/permalink/3098672310407374/
Good luck!
-------------------------------------------------------------------------
Organization
- Every Monday in the morning, the assignment is published as a post #WeeklyChallenge [0-9].
- Every Friday in the evening, MY solution is published as a comment to that post
Rules
1) Your solution has to be published using services like GitHub, codepen or JsFiddle so we can easily discuss and give feedback.
2) Your solution MUST NOT use external JavaScript and CSS libraries.
3) Try to solve the challenge at first on your own, then get inspired by others.

<style>
 body{
     background-color: black;
     width: 100%;
     height: 100vh;
     display: flex;
     flex-direction: column;
     margin: 0;
     padding: 0;
     /*justify-content: space-around;
     align-items: center;*/
 }
 
 *{
     color: white;
     font: 1.1rem 900;
     font-family: 'Arial Black';
     font-style: italic;
 }
</style>