import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <a
          href="#"
          className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium"
        >
          <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="text-body">
            Here are the biggest technology acquisitions of 2025 so far, in reverse chronological order.
          </p>
        </a>
      </main>
    </div>
  )
}
