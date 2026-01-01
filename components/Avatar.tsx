import React, { useState } from 'react';

const Avatar: React.FC<{ className?: string }> = ({ className }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`
        rounded-full flex items-center justify-center 
        bg-light-bg dark:bg-dark-card 
        border-2 border-transparent 
        bg-clip-padding 
        relative 
        before:content-[''] 
        before:absolute 
        before:inset-0 
        before:z-[-1] 
        before:m-[-2px] 
        before:rounded-full 
        before:bg-gradient-to-br 
        before:from-primary-teal 
        before:to-blue-500 
        dark:before:from-primary-yellow 
        dark:before:to-orange-500
        shadow-lg
        overflow-hidden
        ${className}
    `}>
      {!imageError ? (
        <img 
          src="/profile.png" 
          alt="Muhammad Saqib Khan" 
          className="w-full h-full object-cover rounded-full"
          style={{ objectPosition: 'center 20%' }}
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-teal to-blue-500 dark:from-primary-yellow dark:to-orange-500 select-none text-lg">
          MSK
        </span>
      )}
    </div>
  );
};

export default Avatar;