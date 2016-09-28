var path = require('path');

module.exports = {
	entry: './src/modules/app.js',
	output: {
		path: './',
		filename: 'index.js'
	},
	//externals: {
  //},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: [ 'es2015' ]
				}
			},
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html'
            },
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: ['style', 'css', 'sass']
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
  		    {
                test: /\.(png|gif|jpg|jpeg|svg)$/,
                loader: 'file-loader'
            },
            {
    	        test: /\.ttf$/,
                loader: 'file-loader'
            }
		]
	}
}