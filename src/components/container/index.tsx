export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto px-3 w-full">
      {children}
    </div>
  )
}