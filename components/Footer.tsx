import Image from 'next/image'
import Instagram from './Instagram'

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="mx-auto px-8 grid max-w-7xl items-center gap-y-8 md:grid-cols-3 md:gap-y-0">
        <div className="flex justify-center md:justify-start">
          <a 
            href='https://www.instagram.com/jkbbth' 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold">JKKBTH</span>
          </a>
        </div>

        <div className="text-center text-[10px] text-gray-500 leading-relaxed space-y-1">
          <p>제이커바스 <span className="mx-1">|</span> OWNER 박준규 <span className="mx-1">|</span> TEL 010-4166-2687</p>
          <p>BUSINESS NUMBER 312-36-01459 <span className="mx-1">|</span> MAIL-ORDER LICENSE 간이과세자</p>
          <p>E-MAIL jkabbath@gmail.com</p>
          <p>ADDRESS 03619 서울특별시 서대문구 간호대로 25-7 (홍제동) 401호</p>
        </div>

        <div className="flex justify-center md:justify-end">
          <a 
            href='https://www.instagram.com/jkabbath' 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Instagram className="size-10" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
