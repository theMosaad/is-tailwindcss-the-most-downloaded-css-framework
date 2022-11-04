import * as build from '@remix-run/dev/server-build'
import { createRequestHandler } from '@remix-run/server-runtime'

// export default createRequestHandler(build, process.env.NODE_ENV);
// force "development" mode to show complete error log on the cleint
export default createRequestHandler(build, 'development')

export const config = {
	runtime: 'experimental-edge',
}
