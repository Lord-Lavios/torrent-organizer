module.exports = {
	"extends": ["eslint:recommended"],
	"env": { "node": true },
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 8,
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true
		},
		"sourceType": "module"
	},
	"globals": {
		"Promise": true
	},
	"rules": {
		"indent": [
			"error",
			"tab",
			{"SwitchCase": 1}
		],
		"linebreak-style": [
			"off",
			"windows"
		],
		"semi": [
			"error",
			"always"
		],
		"arrow-spacing": ["error", { "before": true, "after": true }],
		"eqeqeq": ["error", "smart"],
		"quote-props": "off",
		"comma-dangle": ["error", "never"],
		"no-console": 0
	}
};
