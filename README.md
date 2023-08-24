#  Melon Memory
 ![responsive-media](screenshots/am-i-responsive.png)

# Introduction
This project is a classic memory game with a watermelon theme, where you click one card to reveal a character and you must choose another card to reveal the same character, if its not the same character you must restart and try to remember where those characters are to match the same two characters. When two characters are a match they will stay is position until all characters have been paired, with the final amount pairs being 8, revealing a time and the amount of moves it took to complete the game.

# Design
The goal of the game was to create and appealing and fun interactive game that the user can restart and play as many times as they wish. The game was designed with young users in mind targeting young children to adolescents, an emphasis on how fast and how few moves you can do the game was used to target older children, adding a competitive element to game. The timer counts up for as long is necessary so younger players don't have the added pressure of finishing the game under a set time. 

## Colors 
The color palette i chose for this project was obviously going to be based around watermelon colors, with an emphasis on contrast and brightness to intrigue a younger user to play the game. This was my initial color scheme.

![color-palette](screenshots/color-palette.png)

## Fonts
The font chosen for the game was essential to the look and feel of the game, whilst searching i came across Rammetto One, i feel this font gave the game a very playful feel and would be attractive to a younger audience, with that in mind i made use of it throughout the game, to maintain the identity of the game.

## Wireframes 

Balsamiq wireframes was used to create initial project development and ideas, you can see them here: [wireframes](assets/documentation/wireframes) 

## User Story

* The user should see a grid style game that have back facing cards, with a front facing image revealed once clicked.
* The user should be able to see how the game is played by clicking on the how to play button, with a modal popping up to explain the game. 
* The user should only be able to click on two cards at a time.
* The user should see when a pair is matched the cards lock into place, keeping the cards facing up.
* The user should expect the timer to begin once the game is started.
* The user should expect the amount of moves they make to be logged once the game is started.
* The user should get a win message when the game is completed.
* The user should be able to reset the game during play of the game.
* The user should be able to close all modals by clicking on the X button



# Features
## Existing Features

### Background

* The background was vital to setting the right tone for the game, i wanted something that was fun, dynamic and quite eye catching. I felt this background gave a playful feel to the game and set the style and character for the rest of the game.

<p align="center" >
<img src="assets/images/background.webp" width="90%">
</p>

### Game Grid

* The game grid is a simple 4x4 grid with 16 cards, I wanted to keep it simple for easy use and accessibility. Keeping it as a 4x4 grid also allows it to be more efficient when being reduced in size for smaller screens.

<p align="center" >
<img src="screenshots/desktop-main.png" width="90%">
</p>

### Cards
#### Card Characters
* The cards when clicked on reveal a character in the form of a watermelon, in keeping with the theme. They each have an individual signature so they're easily identifiable and not too hard to see which two characters match. They're also fun and target my user.
<p align="center">
<img src="assets/images/angry-watermelon.webp" width="20.3%"> 
<img src="assets/images/basketball-watermelon.webp" width="20%"> 
<img src="assets/images/crying-watermelon.webp" width="19.9%"> 
<img src="assets/images/devil-watermelon.webp" width="20.8%"> 
<img src="assets/images/money-watermelon.webp" width="20.3%"> 
<img src="assets/images/photographer-watermelon.webp" width="20.3%"> 
<img src="assets/images/scuba-watermelon.webp" width="19.7%"> 
<img src="assets/images/superhero-watermelon.webp" width="20.3%"> 
</p>

#### Back card.

* A simple watermelon picture was used for the back of the card, which is then flipped when the user clicks on it to reveal a character, they must click another card to match, otherwise they return to the original position, if they match, they will stay locked in position. The cards have a thick black border so its easy to differentiate between cards and to contrast against the color theme.

<p align="center">
<img src="screenshots/backcard-styling.png" width="20.3%"> 
</p>

### Header and Game Score
 * The header was styled using the font Rommatto One font, and is light shade of pink to tie in with the watermelon theme, it also has a thick black border to contrast against the background colors as to not blend in with the background and stand out as much as possible.

 * The same style rules from the header were applied to the timer and and moves counter, but with a more subtle border. When the game is started the timer wil begin to count up. The moves counter will begin to count the amount of moves you have made after each failed attempt to match two cards, it will be counted once the second card has been flipped. 
<p align="center">
<img src="screenshots/header.png" width="90%"> 
</p>

### Buttons
* The buttons are designed in theme with the rest of the game, utilizing the same colors and typography. The how to play button once clicked will bring up a modal explaining how the game is played. The reset button will give users the chance to reset the game during play so if they feel they can't beat their score during the game they have the chance to reset it automatically to start again. The buttons also glow a green color when hovered over to signify they're active to the user. 
 <p align="center">
<img src="screenshots/buttons.png" width="90%"> 
</p>

### Modals 

#### How To Play Modal
* Both modals are identical in design, with the only difference being the text. They are designed to be simple and easy to follow for the user with simple easy to follow instructions and game score feedback. The same typography was kept for the modals as the rest of the game as it was bold and easy to follow and read. To close the modal theres an active X button. When hovered over the mouse will turn into a hand cursor to signify activity. The cursor is intentionally placed directly beneath the text for easy access and to quickly close it.
<p align="center">
<img src="screenshots/how-to-play-modal.png" width="90%"> 
</p>

#### Win Modal
<p align="center">
<img src="screenshots/win-modal.png" width="90%"> 
</p>


# Future Features

* I would like to add a leaderboard feature, so the user can add their name and scores to beat their best scores.
* I would like to give users the option to increase the difficulty of the game, by having a time limit to complete the game and increasing the speed in which the cards are flipped. 

<br>
<br>




# Manual Testing

## Lighthouse Testing
I used google chrome in incognito mode for lighthouse testing, i formatted all pictures to webp format to reduce loading time.

## Mobile Test.
<img src="assets/documentation/lighthouse/mobile-lighthouse-score.png" width=50% height=50%>

## Desktop Test.
<img src="assets/documentation/lighthouse/desktop-lighthouse-score.png" width=50% height=50%> 

# Validator Testing

## Css Validator

<img src="assets/documentation/validation/css-validator.png" width=50% height=50%> 

## Html validator
<img src="assets/documentation/validation/html-validator.png" width=50% height=50%> 

## Jshint validator
<img src="assets/documentation/validation/jshint-validation.png" width=50% height=50%> 

### All validation tests passed with no errors being found.

# Browser Compatibility
The website was tested on the following browsers:

|Browser  |Main Screenshot  |How To Play Screenshot    |Win Modal Screenshot   |Assessment   |   
|---      |---                                                           |---|---|---|
| Chrome  | <img src="screenshots/chrome.png"> | <img src="screenshots/chrome-htp.png"> | <img src="screenshots/chrome-wm.png">  |  Some slight differential between modal positions |
| Microsoft Edge  | <img src="screenshots/microsoft-edge.png">  | <img src="screenshots/microsoft-edge-htp.png">    |  <img src="screenshots/microsoft-edge-wm.png">   |  Works as expected   |
| Firefox  | <img src="screenshots/firefox.png">    | <img src="screenshots/firefox-htp.png">   | <img src="screenshots/firefox-wm.png">   |  Works as expected   | 
| Opera  | <img src="screenshots/opera.png">  | <img src="screenshots/opera-htp.png">| <img src="screenshots/opera-wm.png">   |  Works as expected   |
| Safari  | <img src="screenshots/safari.png">   | <img src="screenshots/safari-htp.png">   | <img src="screenshots/safari-wm.png">   | Works as expected  |

# Responsive Design
|Device  | Screenshot  | Screenshot    | Screenshot   | Assessment  |   
|---      |---|---|---|---| 
|Galaxy fold  | <img src="screenshots/glaxy-fold-main.png" width="93%">  |  <img src="screenshots/galaxy-fold-htp.png">  |  <img src="screenshots/galaxy-fold-wm.png" width="98%"> |   |   
|Ipad air  | <img src="screenshots/ipad-air.png" width="94%">   |  <img src="screenshots/ipad-air-htp.png">  |  <img src="screenshots/ipad-air-wm.png" >  |   |   
| Nesthub max | <img src="screenshots/nesthub-max.png" width="93%">  | <img src="screenshots/nesthub-max-htp.png">   | <img src="screenshots/nesthub-max-wm.png">   |   
|Samsung galaxy s8 | <img src="screenshots/samsung-galaxy-s8.png" width="96.5%">   | <img src="screenshots/samsung-galaxy-s8-htp.png" width="105%">   | <img src="screenshots/samsung-galaxy-s8-wm.png" width="98%" >   |   |   
|Surface pro  | <img src="screenshots/surface-pro-7.png" width="93%">   | <img src="screenshots/surface-pro-7-htp.png" width="97%">   | <img src="screenshots/surface-pro-7-wm.png">  |   |   
|Desktop dev/tools  | <img src="screenshots/desktop-main.png">   | <img src="screenshots/desktop-htp.png">   | <img src="screenshots/desktop-wm.png">   |   |   

# User Story Testing
| User story  | Screenshot  |
|---|---|
| The user should see a grid style game, with a 4x4 grid with 16 back facing cards. No issues found | <img src="screenshots/grid.png" width="80%">   |
| As a user i would like to understand the rules and objectives of the game, to initiate game play as soon as possible. No issues found  | <img src="screenshots/nesthub-max-htp.png" width="80%">  |
| The user should only be able to click on two cards at a time to find a matching pair. Once a pair is matched it should lock in place. No issues found  | <img src="screenshots/matched-pair.png" width="80%">  |
| The timer should activate when the user flips the first card. |  <img src="screenshots/timer-active.png" width="80%"> |
| The user should see the amount of moves they've made, with each failed attempt at matching a pair logged. No issues found. | <img src="screenshots/moves-counter-val.png" width="80%">  |
| The timer and moves counter should stop when the game is finished for the user, with the pop up win modal instantly appearing to show them their score. No issues found.  | <img src="screenshots/nesthub-max-wm.png" width="80%">  |
| The user should have the option to reset the game during game play. This will restart the game and put all the cards back in random positions. No issues found.  | <img src="screenshots/timer-active.png" width="80%">  |

* The user should be able to close all modals with the X button. On completion of the game, the win modal will pop-pop and can be closed easily. The same applies to how to play modal. No issues found.

* Once the game is finished, the game should automatically reset, with 16 cards being reset back into random position and facing backwards. No issues found.

# Bugs
| Bugs/Fix  | Screenshot |
|---|---|
| Bug found when i encountered issues regarding button position as i wanted it to be positioned directly beneath the grid, but they were situated over the far left. To fix this i add "text-align: center" to the "body" in css and this aligned the buttons directly beneath the grid.| <img src="screenshots/button-allignment.png" width="90%">|
| Bug found when i had issues regarding grid alignment, as there was a column gap between the first column and the three columns after. This was fixed by adding "grid-column: 1 / -1;" to "game-score-container." | <img src="screenshots/gridalignment.png" width="90%">   |
| Bug found when an issue appeared where none of the cards were situated in a random order, when the game was first initiated, but would randomize once the game was reset or finished. This was fixed by setting "shuffle();" as a variable so it can be called.|  <img src="screenshots/shuffle-function.png" width="90%">  |

* Bug found with the how to play modal not displaying when clicked. This was fixed by calling "modal-btn" and not "htp-modal" in my event listener.  


# Deployment
The website was deployed using github, these are the steps i followed.
* Login to github.
* click on settings tab placed above the green code button.
* On the left scroll to find "Pages" which will open up a new section.
* Go to source and select master branch.
* Once master branch has been selected, the page will give you a link indicating a successful deployment.
The link to the live website is here: 


If you wish to clone the repository these are the steps to take:
* Go to github repository.
* Go to the code button located next to the gitpod button and click.
* Select if you want to clone with https, SSH or Github CLI. 
* Click button beside url to copy to clipboard
* Open with github desktop, and follow the prompts to complete the clone. 
* Alternatively you can open Git Bash and change the current working directory, to where you want a cloned directory.
* Type git clone in the terminal, paste the URL you copied earlier, and press “enter” to create your local clone.

If you want to fork the repository you can click the fork button located towards the top right of
 # Languages Used
 * HTML (Html was used for basic site structure)
 * CSS  (CSS was used for for styling and web)
 * js (JavaScript was used for interactive content)

 # Websites & tools
 * [Wireframes](https://balsamiq.com/) (for wireframes and initial development ideas)
 * [Coolors](https://coolors.co/) (for color palette inspiration)
 * [Google Fonts](https://fonts.google.com/) (to choose the right fonts for my project)
 * [GitHub](https://github.com/) (to store my repository)
 * [Gitpod](https://www.gitpod.io/) (to build my project and write code)
 * [Git](https://git-scm.com/) (for version control)
 * [freeconvert](https://www.freeconvert.com/)(to convert my png pictures to webp)
 * [W3C](https://validator.w3.org/) (Used to validate all my code)
 * [Jshint](https://Jshint.com) (Used to analyze javascript code)
 * [freepik](https://freepik.com)(Used for game characters and background image)
 * [tablesgenerator](https://tablesgenerator.com) (used to generate markdown tables)
 
 

## Credits

* [WC3](https://www.w3.org/) used to help with code issues.
* [Stack Overflow](https://stackoverflow.com) Used throughout project to troubleshoot.
* [Youtube](https://youtube.com) used for javascript tutorials.
* [Slack](https://slack.com) Used to reference and compare with other people's work and community support. 



## Acknowledgements

I'd like to thank my mentor Mitko Bacharov for guiding me in the right direction, and pointing out all the bugs that i needed fixing. The online tutor team were also of great support in helping me de-bug some issues.












 


   


[def]: screenshots/color-palette.png