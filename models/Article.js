const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
  {
  	author: { type: String, required: true },
  	title: { type: String, required: true },
  	text: {type: String, required: true },
	publishDate: {type: Date, required: true },
	image: { type: String },
	// reviews: { 
	// 	type: mongoose.Types.ObjectId, 
	// 	ref: 'Review' 
	// },  //! with a many to many, you would have to create another model having an article belonging to a review
	user: { 
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	},{ timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;