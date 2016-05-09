exports.config =

	conventions:
		ignored: [
			/[\\/]_/,
			/\-test.js$/
		]

	files:
		javascripts:
			joinTo:
				'js/app.js': /^(app|node_modules)/
				# 'js/vendor.js': /^node_modules/

		stylesheets:
			joinTo:
				'css/main.css': /^app\/styles/

	paths:
		public: 'client'

	sourceMaps: false

	server:
		port: 1234

	plugins:
		babel:
			presets: ['es2015','react','stage-0']
			pattern: /\.(js|jsx)$/
		autoReload:
			enabled:
				css: on
				js: on
				assets: on
		stylus:
			includeCss: true

	overrides:
		production:
			optimize: false
			sourceMaps: false
			paths:
				public: 'client-production'
			plugins:
				autoReload:
					enabled: false