const Container = ({children, className}) => {
  return (
    <section className={`w-full max-w-full px-6 md:px-12  lg:px-[80px] mx-auto ${className}`} >{children}</section>
  )
}

export default Container

// lg:max-w-[calc(100%-80px)]