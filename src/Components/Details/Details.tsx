"use client";
import { useRouter } from "next/navigation";

const Details = () => {
    const router = useRouter();
  return (
    <div className='m-48'>
      <h1 className='text-2xl text-center mb-12'>Coming soon!!!</h1>
      <button onClick={() => router.push("/")} className="border w-28 sm:w-48 bg-black text-white py-2 px-3 cursor-pointer text-center rounded-md mx-auto block">Head back</button>
    </div>
  )
}

export default Details
