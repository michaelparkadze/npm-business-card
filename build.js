"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("           Michael Parkadze 👋"),
  handle: chalk.white("michaelparkadze"),
  shorthandle: chalk.white("michaelparkadze"),
  work: chalk.white("Senior Software Developer at Team Cymru Israel"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("michaelparkadze"),
  github: chalk.gray("https://github.com/") + chalk.green("michaelparkadze"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.blue("michaelparkadze"),
  web: chalk.cyan("https://michaelparkadze.com"),
  stackoverflow: chalk.cyan(
    "https://stackoverflow.com/users/13043884/michael-parkadze"
  ),
  npx: chalk.red("npx") + " " + chalk.white("michaelparkadze"),
  labelWork: chalk.white.bold("    Work:"),
  labelStackOverflow: chalk.white.bold("stackoverflow:"),
  labelnpm: chalk.white.bold("     npm:"),
  labelGitHub: chalk.white.bold("  GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelWeb: chalk.white.bold("     Web:"),
  labelCard: chalk.white.bold("    Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelStackOverflow}  ${data.stackoverflow}`;
// const mastodoning = `${data.labelMastodon}  ${data.mastodon}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  // twittering +
  // newline + // data.labelTwitter + data.twitter
  // mastodoning +
  // newline + // data.labelTwitter + data.twitter
  // npming +
  // newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
