const rules = {
	"bio": {
		"description": {
			required: true,
			type: "array",
			minLength: 1,
			maxLength: 3,
			children: {
				type: "string",
				minLength: 100,
				maxLength: 350
			}
		},
		"title": {
			required: true,
			type: "string",
			minLength: 4,
			maxLength: 10
		}
	}
};

module.exports = Object.freeze(rules);
