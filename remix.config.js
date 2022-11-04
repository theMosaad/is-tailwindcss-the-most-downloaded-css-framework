/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	serverBuildTarget: process.env.NODE_ENV === 'development' ? 'node-cjs' : 'cloudflare-workers',
	serverBuildPath: process.env.NODE_ENV === 'development' ? 'build/index.js' : 'api/index.js',
	server: process.env.NODE_ENV === 'development' ? undefined : './server-prod.js',
	ignoredRouteFiles: ['**/.*'],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// publicPath: "/build/",
}
