const Bio = require('./../../../models/bio.model');

const BioController = {
	create
};

function create(bio, successCb, errorCb) {
	let newBio = new Bio({ title: bio.title, description: bio.description });
	newBio.save(function(err, newBio) {

		if (err) {
			const isValidationError = err.name === 'ValidationError';
			errorCb(isValidationError);
			return;
		};

		successCb();

	});
}

module.exports = BioController;
