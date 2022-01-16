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
      this.templatePath("root/**/*"),
      this.destinationRoot(),
      context,
      {},
      { globOptions: { dot: true } }
    );

    this.fs.copyTpl(
      this.templatePath("gitignore"),
      this.destinationPath(".gitignore"),
      context
    );
  }

  install() {
    this.installDependencies({ npm: true, bower: false });
  }
};
