import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/server-runtime'
import { getPackageDownloads } from 'query-registry'

export const loader = async () => {
	const [tailwindcssDownloads, bootstrapDownloads] = await Promise.all([
		getPackageDownloads({ name: 'tailwindcss' }),
		getPackageDownloads({ name: 'bootstrap' }),
	])
	return json({ tailwindcssDownloads, bootstrapDownloads })
}

export default function Index() {
	const { tailwindcssDownloads, bootstrapDownloads } = useLoaderData<typeof loader>()
	const isTailwindcssDownloadsMoreThanBootstrapDownloads =
		tailwindcssDownloads.downloads > bootstrapDownloads.downloads

	return (
		<main className="">
			<div className="flex aspect-[2/1] w-full items-center justify-center">
				<p
					className={`mt-6 text-center text-5xl font-black uppercase lg:text-[22rem] ${
						isTailwindcssDownloadsMoreThanBootstrapDownloads ? 'text-green-600' : 'text-red-600'
					}`}
				>
					{isTailwindcssDownloadsMoreThanBootstrapDownloads ? 'Yes' : 'No'}
				</p>
			</div>
		</main>
	)
}
