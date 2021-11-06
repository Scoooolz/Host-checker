<div align="center">
    <br />
        <p>
            <a href="https://www.npmjs.com/package/host-checker"><img src="https://nodei.co/npm/host-checker.png?downloads=true&downloadRank=true&stars=true" /></a>
        </p>
    <br />
    <p>
        <a href="https://www.npmjs.com/package/host-checker"><img src="https://img.shields.io/npm/v/host-checker.svg?maxAge=3600" alt="npm version" /></a>
        <a href="https://github.com/Scoooolz/host-checker"><img src="https://img.shields.io/github/license/Scoooolz/host-checker.svg?maxAge=3600" alt="npm downloads" /></a>
    </p>
</div>

# Host checker

You can check the user what the host he use!

## Installations

```npm
npm install host-checker@latest
```

## Screenshot
Note: The code of this is Screenshot is [this](https://github.com/Scoooolz/host-checker/tree/main/example.js)

Glitch:
![Glitch](https://scoooolz.github.io/raw/host-checker/media/Glitch.gif)

Replit:
![Replit](https://scoooolz.github.io/raw/host-checker/media/Replit.gif)

## Examples

```js
const { isGlitch, isGithub, isReplit } = require('host-checker');

if(isGlitch) {
    // Do something and only Glitch hosting can trigger this.
};

if(isGithub) {
    // Do something and only Github hosting can trigger this.
};

if(isReplit) {
    // Do something and only Replit hosting can trigger this.
};
```

## Contribution

Feel free to pull request for fix something or add more host.

\(Optional but recommended\) Please add [Prettier](https://prettier.io/) code formatter for neatness of this code!

## More
licenses : [MIT](https://github.com/Scoooolz/host-checker/tree/main/LICENSE.md)