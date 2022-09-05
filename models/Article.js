const mongoose = require('mongoose');

// Schema for the Articles with export
const articleSchema = new mongoose.Schema(
  {
  	author: { type: String, required: true },

  	title: { type: String, required: true },

  	text: {type: String, required: true },
	  publishDate: {type: Date, required: true},
	  image: { type: String },

	user: { 
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	vote: {
		type: Number, default: 0
	}
},{ timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;