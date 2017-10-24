const WebsiteContent = require('./../../mongo_models/korte-website.model');

const websiteController = {
	getSiteContent: function(successCb, errorCb) {
		WebsiteContent.findOne(function(err, res) {
			if (err) {
				errorCb();
				return
			};

			successCb(res._doc);
		})
	}
}

module.exports = websiteController;
