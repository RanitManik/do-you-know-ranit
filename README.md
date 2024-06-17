# Do You Know Ranit?

A fun and interactive CLI quiz game to test your knowledge about Ranit Manik. This game challenges players with
questions about Ranit's background, skills, and social media presence. Get all the questions right, or face the
consequences!

## Table of Contents

- [Features](#features)
- [Installation](#installation)
    - [Global Installation](#global-installation)
    - [Using npx](#using-npx)
- [How to Play](#how-to-play)
- [Example](#example)
- [Development](#development)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgement](#acknowledgement)

## Features

- Animated rainbow title using `chalk-animation`
- Beautiful console messages with `chalk`
- Smooth gradient text with `gradient-string`
- Interactive questions using `inquirer`
- Engaging spinner animations with `nanospinner`
- ASCII art congratulations with `figlet`

## Installation

### Global Installation

To install and run the game globally, use:

```sh
npm install -g do-you-know-ranit
do-you-know-ranit
```

### Using npx

To run the game without installing globally, use `npx`:

```sh
npx do-you-know-ranit
```

## How to Play

1. The game will start with a welcome message and instructions.
2. You will be asked to enter your name.
3. Answer each question correctly to proceed to the next one.
4. If you answer any question incorrectly, the game will end.
5. Answer all questions correctly to win the game.

## Example

```sh
$ do-you-know-ranit
```

Upon running the above command, you will see the animated title followed by a series of questions. Here's a sample
interaction:

```
Do You Know RANIT?

HOW TO PLAY
I am a process on your computer.
If you get any question wrong I will be killed
So get all the questions right...

What is your name? (Player)

Where is Ranit currently pursuing his higher education?
1) College of Engineering & Management, Kolaghat
2) IIT Kharagpur
3) NIT Durgapur
4) Jadavpur University

Nice work [Player]. That's a legit answer
...
Congrats , [Player] !
You know Ranit well!
```

## Development

To run the game locally without installing globally:

1. Clone the repository:

```sh
git clone https://github.com/RanitManik/do-you-know-ranit.git
```

2. Navigate to the project directory and install dependencies:

```sh
cd do-you-know-ranit
npm install
```

3. Run the game:

```sh
node index.js
```

## Dependencies

- [chalk](https://www.npmjs.com/package/chalk): Terminal string styling.
- [inquirer](https://www.npmjs.com/package/inquirer): Interactive command line prompts.
- [gradient-string](https://www.npmjs.com/package/gradient-string): Beautiful gradient strings.
- [chalk-animation](https://www.npmjs.com/package/chalk-animation): Animations for the terminal.
- [figlet](https://www.npmjs.com/package/figlet): Create ASCII art from text.
- [nanospinner](https://www.npmjs.com/package/nanospinner): Minimal and elegant terminal spinners.

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would
like to change.

## License

This project is licensed under the **[MIT License](LICENSE)**.

## Contact

<table>
  <tr>
    <th></th>
    <th>Social Media</th>
    <th>Username</th>
    <th>Link</th>
  </tr>
  <tr>
    <td><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" width="20" /></td>
    <td>Email</td>
    <td><code>ranitmanik.dev@gmail.com</code></td>
    <td><a href="mailto:ranitmanik.dev@gmail.com" target="_blank">Email</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" width="20" /></td>
    <td>LinkedIn</td>
    <td><code>Ranit Manik</code></td>
    <td><a href="https://www.linkedin.com/in/ranit-manik/" target="_blank">LinkedIn</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width="20" /></td>
    <td>Instagram</td>
    <td><code>ranit_manik_</code></td>
    <td><a href="https://www.instagram.com/ranit_manik_/" target="_blank">Instagram</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" width="20" /></td>
    <td>Facebook</td>
    <td><code>RanitKumarManik</code></td>
    <td><a href="https://www.facebook.com/RanitKumarManik/" target="_blank">Facebook</a></td>
</tr>
</table>

## Acknowledgement

- Inspired by [fireship.io](https://www.youtube.com/@Fireship)'s video series.
