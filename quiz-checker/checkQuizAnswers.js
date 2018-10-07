#!/usr/local/bin/node

// Requires bluebird and nodegit
const Git = require('nodegit')
const fs = require('fs')
const path = require('path')
const Promise = require('bluebird')

// Promisify fs
Promise.promisifyAll(fs)

// const formatTestResults = require('./formatTestResults')
const students = require('./branches')
const correction = require('./answers')
const {questions} = require('./questions')

// Extends String.prototype to get colored strings
'no0.blk30.red31.grn32.ylw33.blu34.mgt35.cyn36.wht37'
  .split('.')
  .map(str => str.split(/([0-9]+)$/))
  .forEach(([ name, value ]) => {
    String.prototype[name]       = function () { return `\u001b[${value}m${this}\u001b[0m` }
    String.prototype[`_${name}`] = function () { return `\u001b[${value};1m${this}\u001b[0m` }
  })

// Small utility functions
const readAnswers = () => fs.readFileAsync(path.resolve(__dirname, '../answers.txt'))
  .then(buf => buf.toString())

const getAnswerLines = answersText => answersText.split(/\r?\n/)
  .filter(line => !! line)

const parseAnswerLine = answerLine => {
  const matches = answerLine.match(/Q\.(\d+)\:\s*(.*)/)
  if(matches.length < 3) {
    console.error(`problem with line ${answerLine}`);
    throw new Error(`problem with line ${answerLine}`);
  }
  return matches[2].split(',').map(ans => ans.trim())
}

const parseAnswerLines = lines => lines.map(parseAnswerLine)

// const checkAnswerLineText = (index, numCorrect, correct, incorrect, missing, score) => {
//   const correctStr = `Correct: ${correct} (${correct.length}/${numCorrect})`.grn()
//   const incorrectStr = `Incorrect: ${incorrect} (${incorrect.length})`.red();
//   const missingStr = `Missing: ${missing} (${missing.length})`.cyn();
//   const scoreStr = `Score: ${score}`.wht();
//   let result = `\nQ.${question}
//   ${correctStr}\n`
//   if (incorrect.length) {
//     result += `  ${incorrectStr}\n`
//   }
//   if (missing.length) {
//     result += `  ${missingStr}\n`
//   }
//   return result + `  ${scoreStr}\n`;
// }
const getAnswersStatus = (answers, correctAnswers, index) => {
  const { reponses } = questions[index]
  const answersWithStatus = []
  return reponses.map(({ position, nom}) => {
    let status = 'neutral'
    if (correctAnswers.includes(position)) {
      status = answers.includes(position) ? 'correct' : 'missing'
    }
    else if (answers.includes(position) && !correctAnswers.includes(position)) {
      status = 'incorrect'
    }
    return { nom, status }
  })
}

const checkAnswerLine = (answers, index) => {
  const answerDescriptor = correction[index];
  const { question: questionText } = questions[index]
  const { correctAnswers } = answerDescriptor;
  const numCorrect = correctAnswers.length;
  const correct = answers.filter(ans => correctAnswers.includes(ans));
  const incorrect = answers.filter(ans => !correctAnswers.includes(ans));
  const missing = correctAnswers.filter(corr => ! answers.includes(corr));
  const score = (correct.length / numCorrect).toFixed(2);
  const statuses = getAnswersStatus(answers, correctAnswers, index)
  return {
    questionText,
    correct: correct.length,
    incorrect: incorrect.length,
    missing: missing.length,
    statuses,
    score
  }
}

const checkAnswerLines = lines => lines.map(checkAnswerLine)

const checkAnswers = branchName => () => readAnswers()
  .then(getAnswerLines)
  .then(parseAnswerLines)
  .then(checkAnswerLines)
  .catch(err => {
    console.error(err);
    throw new Error(`[branch ${branchName}] ${err.message}`);
  })

const getCurrentBranch = () => Git.Repository.open(".")
  .then(repo => repo.getCurrentBranch())
  .then(ref => ref.name().split('/').pop())

const checkoutBranch = branchName => Git.Repository.open(".")
  .then(repo => repo.getBranch(`refs/heads/${branchName}`)
  .then(ref => repo.checkoutRef(ref))
)

const runAllBranches = () =>
  Promise.reduce(students, ({ done, failed }, branchName) => {
    // console.log(`\nRunning tests on branch ${branchName}`)
    return checkoutBranch(branchName)
    .then(checkAnswers(branchName))
    .then(tests => ({ done: done.concat([{ branchName, tests }]), failed }))
    .catch(err => ({ done, failed: failed.concat({
      branchName, errMessage: err.message
    }) }))
  }, { done: [], failed: [] })


getCurrentBranch()
.then(currentBranch => runAllBranches()
  .then(results => checkoutBranch(currentBranch)
    .then(() => {
      results.done.forEach(r => console.log(r.branchName.grn()))
      results.failed.forEach(r => console.log(r.branchName.red(), r.errMessage))
      const json = JSON.stringify(results.done, null, 2)
      return fs.writeFileAsync(path.resolve(__dirname, '../quiz-view-results/src/results.json'), json)
    })
    .then(() => {
      console.log('done')
      process.exit()
    })
  )
)
  .catch(console.error)
