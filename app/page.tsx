'use client'
import Image from "next/image";
import { useState } from "react";

interface resType {
  id: number,
  title: string,
  description: string,
  price: number
}

export default function Home() {
  const [item, setItem] = useState<resType | null>(null)
  const [show, setShow] = useState(false)

  async function getDat() {
    try {
      if (!item) {
        const res = await fetch('https://dummyjson.com/products/1')
        const data = await res.json()
        setItem(data)
      }
      setShow(!show)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex min-h-[100vh] justify-center">
     <div className="flex flex-col bg-red-400 justify-center items-center">
     <button onClick={getDat}>fetch it</button>
      {show && <Image alt="piggie" src='/Mainpage-priscilla-du-preez-unsplash.jpg' width={500} height={500}/>}
      {show && <div className="text-center">
        {item?.id}<br />
        {item?.title}<br />
        {item?.description}<br />
        {item?.price}
      </div>}
     </div>
    </div>
  );
}
