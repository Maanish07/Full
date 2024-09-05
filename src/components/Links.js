import React from 'react'
import { Link } from 'react-router-dom'


export const Links = () => {
  return (
    <>
    <div className="mt-10 mb-10 gap-2 laptop:mt-12 flex flex-wrap mob:flex-nowrap">
              <Link
               to = "https://github.com/Maanish07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-l font-bold tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer"
              >
                Github
              </Link>

              <Link
                to="https://www.linkedin.com/in/manish-kumar-48b3a7217/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-l font-bold tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer"
              >
                LinkedIn
              </Link>

              <Link
                to="https://leetcode.com/u/Mannu_story07/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-l font-bold tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer"
              >
                LeetCode
              </Link>

              <Link
                to="https://your-blog-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-l font-bold tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer"
              >
                Blog
              </Link>

              <Link
                to="mailto:manishkr88089@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-l font-bold tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer"
              >
                Email
              </Link>
            </div>
    </>
    
  )
}
