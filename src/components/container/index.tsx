export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto px-3 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
      {children}
    </div>
  )
}