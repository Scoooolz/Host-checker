const { isGlitch, isReplit, isGithub } = require('host-checker')

if (isGlitch) {
  console.log('This user is using Glitch.')
} else {
  console.log('This user is NOT using Glitch.')
}

if (isReplit) {
  console.log('This user is using Replit.')
} else {
  console.log('This user is NOT using Replit.')
}

if(isGithub) {
  console.log('This user is using Github')
} else {
  console.log('This user is NOT using Github')
}