"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        `Welcome to the  ${chalk.red("EarnKeeper.io NestJs Plugin")} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "pluginId",
        message:
          "Choose a unique id for your plugin, something like my-gamefi-plugin: ",
        default: "hello-world"
      },
      {
        type: "input",
        name: "pluginName",
        message:
          "Choose a display name for your plugin, something like My Gamefi Plugin: ",
        default: "Hello World"
      },
      {
        type: "confirm",
        name: "confirm",
        message: "Generate your plugin now?",
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const context = {
      pluginId: this.props.pluginId,
      pluginName: this.props.pluginName
    };

    this.fs.copyTpl(
      this.templatePath("normal/**/*"),
      this.destinationRoot(),
      context
    );

    this.fs.copyTpl(
      this.templatePath("normal/.*"),
      this.destinationRoot(),
      context
    );

    this.fs.copyTpl(
      this.templatePath("special/.*"),
      this.destinationRoot(),
      context
    );
  }

  install() {
    this.installDependencies({ npm: true, bower: false });
  }
};
