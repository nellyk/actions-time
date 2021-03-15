const { context, GitHub } = require('@actions/github');
const core = require('@actions/core');



try {
const githubToken = core.getInput('GITHUB_TOKEN');
const octokit = new GitHub(githubToken);
if (context.eventName === 'pull_request') {
    if (context.payload.pull_request === null) {
        core.setFailed('No pull request found.');
        return;
      }

  const nameToGreet = core.getInput('who-to-greet');
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  const time =  (addDays(new Date(),3)).toDateString();
  const body = `Hello ${nameToGreet}! thank you for your Pull request. We aim to review this pull request before ${time} `
  const checkStatus = octokit.issues.createComment({
    ...context.repo,
    issue_number: context.payload.issue.number,
    body,
  });
  core.setOutput("time",time);

}
  
} catch (error) {
  core.setFailed(error.message);
}