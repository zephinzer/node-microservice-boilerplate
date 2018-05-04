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

const publish = exec('npm publish --access public');
publish.stdout.on('data', (data) => {
  process.stdout.write(data);
});
publish.stderr.on('data', (data) => {
  process.stderr.write(data);
});
publish.on('exit', (exitCode) => {
  console.error(`"npm publish" exited with status code ${exitCode}`);
  if (exitCode == 0) {
    const versionBump = exec(`git stash && git add package.json && git commit --message='version bump to ${nextVersion}' && git stash pop`);
    versionBump.stdout.on('data', (data) => {
      process.stdout.write(data);
    });
    versionBump.stderr.on('data', (data) => {
      process.stderr.write(data);
    });
    versionBump.on('exit', (exitCode) => {
      console.error(`"git add" exited with status code ${exitCode}`);
    });
  }
});