import { useState } from 'react'
import { EnvelopeIcon, DocumentTextIcon } from "@heroicons/react/24/outline"

export default function ContactCard(props) {
    const [isHovering, setIsHovering] = useState(false)
    const Icon = props.icon

    function handleHover(){
        setIsHovering(!isHovering)
    }

    function handleClick(){
        window.location = props.link
    }

    return (
        <>
            <div className="bg-white bg-opacity-5 p-4 px-5 min-w-full md:min-w-0 rounded-lg flex" onMouseEnter={handleHover} onMouseLeave={handleHover}  onClick={handleClick}>
                <div className="flex flex-row items-center justify-begin gap-6">
                    {
                        props.type === "email" ?
                        <EnvelopeIcon className="h-8 w-8"/> :
                        props.type === "resume" ?
                        <DocumentTextIcon className="h-8 w-8"/> :
                        props.type === "github" ?
                        <img src={process.env.PUBLIC_URL + "github.svg"} className="h-8 w-8"/> :
                        props.type === "linkedin" ? 
                        <img src={process.env.PUBLIC_URL + "linkedIn.svg"} className="h-8 w-8"/> : 
                        <></>
                    }
                    <div className="flex flex-col">
                        <p className="text-gray-300 font-bold md:text-lg">{props.title}</p>
                        <p className="font-medium md:text-lg">{props.subtext}</p>
                    </div>
                    <p className={`${isHovering ? '' : 'invisible'} text-white font-bold`}>→</p>
                </div>
            </div>
        </>
    )
}