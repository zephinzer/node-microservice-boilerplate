#!/usr/bin/env node
const {exec} = require('child_process');
const {writeFileSync} = require('fs');
const path = require('path');

const semver = require('semver');

const packageJson = require('../../package.json');
const {version} = packageJson;
const nextVersion = semver.inc(version, 'patch');
writeFileSync(
  path.join(__dirname, '../../package.json'),
  JSON.stringify(
    Object.assign(packageJson, {version: nextVersion}),
    null,
    2
  )
);

console.info(`publishing ${packageJson.name}@${nextVersion} to NPM...`);
const publish = exec('npm publish --access public');
publish.stdout.on('data', (data) => {
  process.stdout.write(data);
});
publish.stderr.on('data', (data) => {
  process.stderr.write(data);
});
publish.on('exit', (exitCode) => {
  console.info(`"npm publish" exited with status code ${exitCode}.`);
});