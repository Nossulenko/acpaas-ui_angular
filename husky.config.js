module.exports = {
	"hooks": {
		// "pre-commit": "lerna run agenda",
		"commit-msg": "./node_modules/.bin/commitlint ---edit $HUSKY_GIT_PARAMS",
	},
};
