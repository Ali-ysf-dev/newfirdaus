import { useId, useState } from 'react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function CleverReachSignupForm({
  action,
  content,
  className,
  target = '_blank',
}) {
  const inputId = useId()
  const errorId = `${inputId}-error`
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    const nextEmail = email.trim()

    if (!nextEmail) {
      event.preventDefault()
      setError(content.requiredError)
      return
    }

    if (!EMAIL_PATTERN.test(nextEmail)) {
      event.preventDefault()
      setError(content.invalidError)
      return
    }

    setError('')
  }

  return (
    <form
      action={action}
      method="post"
      target={target}
      noValidate
      onSubmit={handleSubmit}
      className={cn(
        'relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/3 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl',
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_90%_at_0%_0%,rgba(252,211,77,0.16),transparent_45%),radial-gradient(80%_80%_at_100%_100%,rgba(255,255,255,0.08),transparent_40%)]"
      />

      <div className="relative p-5 sm:p-6">
        {(content.title || content.description) && (
          <div className="mb-5 space-y-2">
            {content.title && (
              <h3 className="font-heading text-xl font-medium tracking-tight text-stone-50 sm:text-2xl">
                {content.title}
              </h3>
            )}
            {content.description && (
              <p className="max-w-xl text-sm leading-6 text-stone-300/90 sm:text-base">
                {content.description}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <label
              htmlFor={inputId}
              className="mb-2 block text-[11px] font-medium uppercase tracking-[0.24em] text-stone-300"
            >
              {content.emailLabel}
            </label>

            <div className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-stone-400"
              >
                @
              </span>
              <input
                id={inputId}
                name="email"
                type="email"
                value={email}
                placeholder={content.emailPlaceholder}
                autoComplete="email"
                inputMode="email"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (error) setError('')
                }}
                className={cn(
                  'h-14 w-full rounded-2xl border bg-stone-950/80 pl-10 pr-4 text-base text-stone-50 outline-none ring-0 transition-[border-color,background-color,box-shadow] placeholder:text-stone-500',
                  error
                    ? 'border-red-400/80 focus:border-red-300 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.12)]'
                    : 'border-white/10 focus:border-amber-200/70 focus:bg-stone-950 focus:shadow-[0_0_0_4px_rgba(252,211,77,0.10)]'
                )}
              />
            </div>
          </div>

          <button
            type="submit"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-14 rounded-2xl bg-stone-50 px-6 text-stone-950 shadow-[0_14px_30px_rgba(255,255,255,0.08)] transition-all hover:-translate-y-0.5 hover:bg-stone-200 sm:min-w-[170px]'
            )}
          >
            {content.submitLabel}
          </button>
        </div>

        {error && (
          <p id={errorId} role="alert" className="mt-3 text-sm text-red-300">
            {error}
          </p>
        )}
      </div>
    </form>
  )
}

export { CleverReachSignupForm }
