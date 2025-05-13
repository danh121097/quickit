#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const fs = require('fs');
const packageJson = require('../package.json');

// Define the CLI program
program
  .name('quickit')
  .description('A CLI tool for creating quick projects templates!')
  .version(packageJson.version);

// Add the create command
program
  .command('create [projectName]')
  .description('Create a new project')
  .option('-t, --template <template>', 'Specify template to use')
  .option(
    '-p, --package-manager <manager>',
    'Specify package manager (npm or yarn)'
  )
  .action((projectName, options) => {
    // Run the create script with arguments
    require('./create')(projectName, options);
  });

// Default command (for backward compatibility)
if (
  process.argv.length === 2 ||
  (process.argv.length === 3 && !process.argv[2].startsWith('-'))
) {
  require('./create')();
} else {
  program.parse(process.argv);
}
