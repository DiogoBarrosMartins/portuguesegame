import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";

import Link from "next/link";
import { buttonVariants } from "../components/ui/button";
import { ArrowRightIcon } from "lucide-react";
export default function Home() {
  return (
  <div className="bg-slate-50" >
    <section>
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="absolute w-28 left-0 -top-20 hidden lg:block"> <div className='absolute inset-x-0 bottom-0 z[-100] bg-gradient-to-t via-slate-50/01 from-slate-50 h-6' />
              <img src="users/user.png" className="w-full"/>
            </div>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
  Master the <span className="bg-green-600 px-2 text-white">Portuguese</span> language
  with this <span className="bg-red-600 px-2 text-yellow-300">exciting</span> game!
</h1>
<p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
  Immerse yourself in this innovative <span className="font-semibold">word-like word crawler</span> word game, and experience a new way to learn Portuguese!
</p>

<ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
  <div className="space-y-2">
    <li className="flex gap-1.5 items-center text-left">
      <Check className="h-5 w-5 shrink-0 text-green-600"/>
      Top-notch emojis! hehe
    </li>
    <li className="flex gap-1.5 items-center text-left">
      <Check className="h-5 w-5 shrink-0 text-green-600"/>
      Guaranteed engagement in just 5 seconds.
    </li>
    <li className="flex gap-1.5 items-center text-left">
      <Check className="h-5 w-5 shrink-0 text-green-600"/>
      Combining creativity with quality to deliver a cool game
    </li>
  </div>
</ul>

    <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
      <div className="flex -space-x-4">
        <img 
            className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" 
            src="/users/user-1.png/" 
            alt="user image"
        />
        <img 
          className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" 
          src="/users/user-2.png/" 
          alt="user image"
        />
        <img 
          className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" 
          src="/users/user-3.png/" 
          alt="user image"
        />
        <img 
          className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" 
          src="/users/user-4.jpg/" 
          alt="user image"
        />
        <img 
          className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100" 
          src="/users/user-5.jpg/" 
          alt="user image"
        />
      </div>
              <div className="flex flex-col justify-between items-center sm:items-start">
                <div className="flex gap-0.5">
                  <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                  <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                  <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                  <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                  <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                </div>

                
              </div>
             
            </div><Link 
                                        href='/game' 
                                        className={buttonVariants({
                                        size: 'lg', 
                                        className:'items-center gap-1 mt-5',
                                    })}>
                                    Play the game
                                    <ArrowRightIcon className="ml-1.5 h-15 w-5"/> 
                                    </Link>
                                    
                                    
          </div> 
          
        </div>
        
    
       
   
      </MaxWidthWrapper>
    </section>
  </div>
  );
}
