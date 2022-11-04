import { RemixServer } from '@remix-run/react'
import type { EntryContext } from '@remix-run/server-runtime'
import { renderToString } from 'react-dom/server'

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext
) {
	const markup = renderToString(
		<RemixServer
			context={remixContext}
			url={request.url}
		/>
	)

	responseHeaders.set('Content-Type', 'text/html')

	responseHeaders.set('Cache-Control', 's-maxage=60')

	return new Response('<!DOCTYPE html>' + markup, {
		headers: responseHeaders,
		status: responseStatusCode,
	})
}
