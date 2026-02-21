import React from 'react'

const AuthPage = ({children}) => {
  return (
    <div className='
      min-h-screen 
      flex 
      items-center 
      justify-center 
      bg-blue-50'
    >
      <nav>
        <button>

        </button>
        
      </nav>
        <div className='
            w-full 
            max-w-md 
            flex 
            flex-col 
            items-center 
            px-1 
            py-4 
            bg-white 
            rounded-xl 
            shadow-sm'
        >
            {children}
        </div>
    </div>
  )
}

export default AuthPage;