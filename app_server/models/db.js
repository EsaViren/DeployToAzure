const mongoose = require('mongoose');

const dbURI = 'mongodb://esadb:esadbpassu@ds012188.mlab.com:12188/esa';

mongoose.connect(dbURI);

require('./appSchemas');