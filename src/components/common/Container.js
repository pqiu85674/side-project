function Container({ children ,className}) {
  return <div className={`w-fall p-20 md:px-20 lg:px-40 m-auto ${className}`}>{children}</div>;
}

export default Container;
