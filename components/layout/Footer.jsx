const Footer = ({ children }) => {
  return (
    <footer className="flex flex-col items-center py-[30px] xs:py-[50px]">
      <span className="xs:text-base">© 2023 Created by CJY</span>
      <div className="opacity-50">
        <span className="text-[11px] lg:text-sm">{`Next.js v13.2.1 / React.js v18.2.0 / tailwindcss v3.1.8`}</span>
      </div>
    </footer>
  )
}

export default Footer
