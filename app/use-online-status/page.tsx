'use client'

import { useOnlineStatus } from './hook'

export default function Page() {
  const isOnline = useOnlineStatus()

  return (
    <div className="text-center">
      <h2 className="mb-3 text-2xl font-semibold">Status</h2>
      <p className="text-lg">{isOnline ? '✅ Online' : '❌ Offline'}</p>
      <section className="mt-8">
        <h3 className="mb-3 text-xl">How to use</h3>
        <ol className="mb-3 list-decimal text-left max-w-xs">
          <li>Open the browser tools</li>
          <li>Select the network tab</li>
          <li>If the network status is not set to &quot;Offline&quot;, then you should see an online status</li>
          <li>Set the network status to &quot;Offline&quot; and note the status indicator</li>
        </ol>
      </section>
    </div>
  )
}
