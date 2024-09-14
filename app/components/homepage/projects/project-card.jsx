// @flow strict

"use client";

import * as React from 'react';
import Image from 'next/image';
import placeholder from '/public/png/placeholder.png';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full overflow-hidden">
      
      {/* Content Section */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>

      {/* Image Section */}
      <div className="relative">
        <Image
          src={project.image ? project.image.src : placeholder.src}
          alt={project.name}
          width={1080}
          height={720}
          className="w-full h-48 lg:h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-bold">{project.name}</p>
        </div>
      </div>
      
      {/* Project Details Section */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>

          <div className="ml-4 lg:ml-8">
  <button
    className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
    onClick={() => window.open(project.demo, '_blank')}
  >
    View Demo/GitHub
  </button>
</div>
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">,</span>
          </div>
          
  


          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools:</span>
            <span className="text-gray-400">[</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-gray-400">, </span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">],</span>
          </div>
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="text-gray-400">{'};'}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
