module.exports = {
	//devtool:"source-map",
	entry:__dirname + "/main.js",
	output:{
		path:__dirname + "/public",
		filename:"bundle.js"
	},
	module:{
		loaders:[{
			test:/\.js$/,
			loader:"babel-loader"
		},{
			test:/\.html$/,
			loader:"html-loader"
		},{
			test:/\.css$/,
			loader:"style-loader!css-loader"
		},{
			test:/\.vue$/,
			loader:"vue-loader"
		},{
			test:/\.(jpg|jpeg|png|gif|bmp)$/,
			loader:"url-loader"
		}]
	},
	devServer:{
		contentBase:"./public",
		inline:true,
		port:54321
	},
	resolve:{
		alias:{
			vue:"vue/dist/vue.js"
		}
	},
	plugins:[
		//new webpack.optimize.UglifyJsPlugin()
	]
}
