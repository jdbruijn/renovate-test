const branchName = 'github-renovate';

module.exports = {
    branchPrefix: `${branchName}/`,
    dependencyDashboardTitle: 'Dependency Dashboard self-hosted',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    logLevel: 'debug',
    onboarding: true,
    onboardingBranch: `${branchName}/configure`,
    platform: 'github',
    dryRun: false,
    username: 'jdbruijn',
    repositories: [
        'jdbruijn/homebrew-caboodle',
    ],
};

