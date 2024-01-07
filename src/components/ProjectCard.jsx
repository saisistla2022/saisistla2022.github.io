import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
export default function ProjectCard(props) {
    const [collapsed, setCollapsed] = useState(true)

    function handleView() {
        window.location = props.link
    }

    return (
        <>
            <div className={`flex bg-slate-900 rounded-lg overflow-hidden w-[90%]`} onClick={() => setCollapsed(!collapsed)}>
                <div className={`${collapsed ? 'hover:bg-white hover:bg-opacity-5' : ''}  h-full w-full p-5 flex flex-col`}>
                <div className="flex flex-row items-center justify-between">
                     <p className="text-xl md:text-2xl font-semibold items-start">{props.title}</p>
                    <div className="items-end justify-end">
                        {collapsed ? <ChevronDownIcon className="h-5 w-5"/> : <ChevronUpIcon className="h-5 w-5"/>}
                    </div>
                </div>
                    <div className={`${collapsed ? 'hidden' : 'pt-4 text-md'}`}>
                        <p>{props.description}</p>
                        <div className="flex flex-row items-center justify-end pt-4">
                            <button className="bg-slate-950 hover:bg-slate-950/50 hover:font-bold rounded-md p-2 px-4 font-medium" onClick={handleView}>→</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}