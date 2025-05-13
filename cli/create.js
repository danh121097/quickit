#!/usr/bin/env node

// Using CommonJS for better compatibility with Node.js
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const { execSync } = require('child_process');

// Get the root directory and load config
const rootDir = path.join(__dirname, '..');
const config = require('./config.json');

/**
 * Check if yarn is installed
 * @returns {boolean} true if yarn is installed
 */
function isYarnAvailable() {
  try {
    execSync('yarn --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * CLI tool to create a new project based on the selected template
 * @param {string} [providedProjectName] - Project name from CLI arguments
 * @param {Object} [options] - CLI options
 */
async function main(providedProjectName, options = {}) {
  console.log(chalk.blue('========================================'));
  console.log(chalk.blue('   Quick Start Project With CLI Tools'));
  console.log(chalk.blue('========================================'));
  console.log('');

  try {
    const hasYarn = isYarnAvailable();
    const questions = [];

    // Get template choices from config
    const templateChoices = config.templates.map((template) => ({
      name: `${template.name} - ${template.description}`,
      value: template.name
    }));

    // Only ask for template if not provided via options
    if (!options.template) {
      questions.push({
        type: 'list',
        name: 'template',
        message: 'Select Project Template:',
        choices: templateChoices
      });
    }

    // Only ask for project name if not provided as argument
    if (!providedProjectName) {
      questions.push({
        type: 'input',
        name: 'projectName',
        message: 'Enter folder name for your new project:',
        validate: (input) => {
          if (!input) {
            return 'Project name is required';
          }
          return true;
        }
      });
    }

    // Only ask for package manager if not provided via options
    if (!options.packageManager) {
      questions.push({
        type: 'list',
        name: 'packageManager',
        message: 'Select package manager:',
        choices: hasYarn ? ['npm', 'yarn'] : ['npm'],
        default: 'npm'
      });
    }

    // If we have questions, prompt the user
    const answers =
      questions.length > 0 ? await inquirer.prompt(questions) : {};

    // Combine CLI arguments with prompt answers
    const template = options.template || answers.template;
    const projectName = providedProjectName || answers.projectName;
    const packageManager =
      options.packageManager || answers.packageManager || 'npm';

    // Validate we have all required values
    if (!template && !answers.template) {
      console.error(chalk.red('Template selection is required.'));
      process.exit(1);
    }

    if (!projectName) {
      console.error(chalk.red('Project name is required.'));
      process.exit(1);
    }

    // Get template config from the selected template
    const templateConfig = config.templates.find((t) => t.name === template);
    if (!templateConfig) {
      console.error(
        chalk.red(`Template configuration for "${template}" not found!`)
      );
      process.exit(1);
    }

    // Resolve the template path from config
    const templatePath = path.resolve(
      path.join(__dirname, templateConfig.path)
    );
    const targetPath = path.join(process.cwd(), projectName);

    // Check if template exists
    if (!fs.existsSync(templatePath)) {
      console.error(
        chalk.red(`Template "${template}" not found at ${templatePath}!`)
      );
      process.exit(1);
    }

    // Check if target directory already exists
    if (fs.existsSync(targetPath)) {
      const { overwrite } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'overwrite',
          message: `Directory "${projectName}" already exists. Overwrite?`,
          default: false
        }
      ]);

      if (!overwrite) {
        console.log(chalk.yellow('Project creation cancelled.'));
        process.exit(0);
      } else {
        await fs.remove(targetPath);
      }
    }

    // Copy template to target directory
    console.log(
      chalk.green(`Creating new project from "${template}" template...`)
    );
    await fs.copy(templatePath, targetPath);

    // The package.json update section has been removed

    // Determine installation command based on package manager
    const installCmd = packageManager === 'yarn' ? 'yarn' : 'npm install';
    const runCmd = packageManager === 'yarn' ? 'yarn dev' : 'npm run dev';

    console.log('');
    console.log(chalk.green('✅ Project created successfully!'));
    console.log('');
    console.log(`To get started:`);
    console.log(chalk.cyan(`  cd ${projectName}`));
    console.log(chalk.cyan(`  ${installCmd}`));
    console.log(chalk.cyan(`  ${runCmd}`));
    console.log('');

    // Option to install dependencies right away
    const { installNow } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'installNow',
        message: `Would you like to install dependencies now?`,
        default: false
      }
    ]);

    if (installNow) {
      console.log(
        chalk.green(`Installing dependencies using ${packageManager}...`)
      );
      try {
        process.chdir(targetPath);
        execSync(installCmd, { stdio: 'inherit' });
        console.log(chalk.green('✅ Dependencies installed successfully!'));
        console.log('');
        console.log(`To start development:`);
        console.log(chalk.cyan(`  cd ${projectName}`));
        console.log(chalk.cyan(`  ${runCmd}`));
      } catch (err) {
        console.error(
          chalk.red(
            'Error installing dependencies. You can install them manually.'
          )
        );
      }
    }
  } catch (err) {
    console.error(chalk.red('Error creating project:'), err);
    process.exit(1);
  }
}

// Export the module function so it can be called with arguments
module.exports = main;

// Run directly if this file is the entry point
if (require.main === module) {
  main();
}
