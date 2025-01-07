"use client"
import { useState } from "react"

const AccordionItem = ({ header, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full p-4 text-left hover:bg-slate-100 ${
          isOpen ? "bg-slate-200" : ""
        }`}
      >
        <span>{header}</span>
        <img
          className={`ml-auto transition-transform duration-700 ease-out w-8 h-8 ${
            isOpen ? "rotate-180" : ""
          }`}
          src="/icon_down.png"
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4">
          <p>{content}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default AccordionItem