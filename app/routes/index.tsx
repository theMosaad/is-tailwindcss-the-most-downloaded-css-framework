import { useLoaderData } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/server-runtime'
import { json } from '@remix-run/server-runtime'
import { getPackageDownloads } from 'query-registry'

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	if (!data) {
		return {}
	}

	const { tailwindcssDownloads, bootstrapDownloads } = data

	return {
		'twitter:image':
			tailwindcssDownloads.downloads > bootstrapDownloads.downloads
				? 'https://istailwindcssthemostdownloadedcssframework.com/yes.png'
				: 'https://istailwindcssthemostdownloadedcssframework.com/no.png',
		'twitter:image:alt':
			tailwindcssDownloads.downloads > bootstrapDownloads.downloads ? 'Yes' : 'No',
	}
}

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
		<main className="flex h-full flex-col">
			<div className="mx-auto mt-16 px-4 sm:mt-24">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
						Is Tailwind CSS the most downloaded CSS framework?
					</h1>
					<p
						className={`mt-6 text-center text-5xl font-black uppercase lg:text-9xl ${
							isTailwindcssDownloadsMoreThanBootstrapDownloads ? 'text-green-600' : 'text-red-600'
						}`}
					>
						{isTailwindcssDownloadsMoreThanBootstrapDownloads ? 'Yes' : 'No'}
					</p>
				</div>
			</div>
			<div className="mt-16 px-4 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h2>
							<span className="text-xl font-semibold text-gray-900">Npm downloads</span>{' '}
							<span className="text-sm tabular-nums text-gray-900">
								({tailwindcssDownloads.start} - {tailwindcssDownloads.end})
							</span>
						</h2>
					</div>
				</div>
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
								<table className="min-w-full divide-y divide-gray-300">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
											>
												Rank
											</th>
											<th
												scope="col"
												className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
											>
												Name
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Weekly Downloads
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										{[
											{
												name: tailwindcssDownloads.package,
												weeklyDownloads: tailwindcssDownloads.downloads,
											},
											{
												name: bootstrapDownloads.package,
												weeklyDownloads: bootstrapDownloads.downloads,
											},
										]
											.sort((a, b) => b.weeklyDownloads - a.weeklyDownloads)
											.map((framwork, index) => (
												<tr key={framwork.name}>
													<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
														{index + 1}
													</td>
													<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
														{framwork.name}
													</td>
													<td className="whitespace-nowrap px-3 py-4 text-sm tabular-nums text-gray-900">
														{framwork.weeklyDownloads.toLocaleString('en-US')}
													</td>
												</tr>
											))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-auto px-4 pt-16 sm:px-6 lg:px-8">
				<footer className="flex flex-col items-center justify-between gap-10 border-t border-slate-400/20 py-6 sm:flex-row lg:py-10">
					<div className="flex gap-6">
						<p className="text-[0.8125rem] leading-6 text-slate-900">
							By{' '}
							<a
								href="https://twitter.com/theMosaad"
								className="font-semibold"
							>
								@theMosaad
							</a>
						</p>
						<p className="text-[0.8125rem] leading-6 text-slate-900">
							View{' '}
							<a
								href="https://github.com/theMosaad/is-tailwindcss-the-most-downloaded-css-framework"
								className="font-semibold"
							>
								Source code
							</a>
						</p>
					</div>
					<a
						className="-my-1 -mx-1.5 flex items-center gap-3 rounded-lg py-1 px-1.5 text-[0.8125rem] font-semibold leading-6 text-slate-900 transition hover:bg-slate-900/[0.03]"
						href="https://twitter.com/intent/tweet?text=Check%20out%20the%20most%20downloaded%20CSS%20framework%20by%20%40theMosaad&amp;url=https%3A%2F%2Fwww.istailwindcssthemostdownloadedcssframework.com"
					>
						<svg
							viewBox="0 0 20 20"
							aria-hidden="true"
							className="h-5 w-5 fill-slate-400"
						>
							<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
						</svg>
						<span>Share on Twitter</span>
					</a>
				</footer>
			</div>
		</main>
	)
}
