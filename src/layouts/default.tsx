const defaultLayout = ({ children }) => {
  return (
    <>
      <main className="flex flex-col items-center w-full h-full">
        {children}
      </main>
    </>
  )
}

export default defaultLayout
