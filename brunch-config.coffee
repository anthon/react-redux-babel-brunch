exports.config =

	modules:
		autoRequire:
			'js/app.js': ['scripts/index']

	conventions:
		ignored: [
			/[\\/]_/,
			/\-test.js$/
		]

	files:
		javascripts:
			joinTo:
				'js/app.js': /^(app\/scripts|node_modules)/
				# 'js/vendor.js': /^node_modules/

		stylesheets:
			joinTo:
				'css/main.css': /^app\/styles/

	paths:
		public: '../../public'

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