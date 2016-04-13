let reviewServiceFactory = function($meteor){//inject service in there like that: (UserService)

	let userReviewGym = function (gymId, content, callback) {
		$meteor.call("userReviewGym", gymId, content).then(function (result) {
			callback(false, result);
		}, function (err) {
			callback(err);
		})
	};
	let userRatingGym = function (gymId, rate, callback) {
		$meteor.call("userRatingGym", gymId, rate).then(function (result) {
			callback(false, result);
		}, function (err) {
			callback(err);
		})
	};

	return { userReviewGym, userRatingGym  };
};

reviewServiceFactory.$inject = ['$meteor']; //inject service in there like that: ['UserService']
export default reviewServiceFactory; 