import Link from 'next/link'

export default function Home() {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Link
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        href="/use-online-status"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          useOnlineStatus{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Show online status
        </p>
      </Link>
    </div>
  )
}
