module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [0],
    'type-enum': [
      2,
      'always',
      ['chore', 'feat', 'fix', 'test', 'docs', 'refactor', 'revert', 'release'],
    ],
  },
};
