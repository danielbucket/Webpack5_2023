const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '',
	},
	
	mode: 'none',

	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				type: 'asset',
				parser : {
					dataUrlCondition: {
						maxSize: 3 * 1024 // 3kb
					},
				},
			},
			{
				test: /\.txt/,
				type: 'asset/source',
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader'
				],
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/env' ],
						plugins: [ '@babel/plugin-proposal-class-properties' ],
					},
				},
			},
			{
				test: /\.hbs$/,
				use: [
					'handlebars-loader'
				],
			},
		],
	},
		plugins: [
			new TerserPlugin(),
			new MiniCssExtractPlugin({
				filename: 'styles.[contenthash].css',
			}),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				title: 'Yolo, mafk!',
				template: 'src/index.hbs',
				description: 'Some description'
			}),
		],
};