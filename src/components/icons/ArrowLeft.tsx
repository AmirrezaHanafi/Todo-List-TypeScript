type ArrowLeftProps = {
  className?: string
}

export default function ArrowLeft({ className }: ArrowLeftProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 12l7-9v4.99L21 8v8H10v5z" />
    </svg>
  )
}
