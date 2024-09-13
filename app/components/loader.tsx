import React from 'react';

export const SpinnerLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-[2vh]">
      <div className="loader border-t-4 border-b-4 border-green-500 border-solid rounded-full w-16 h-16"></div>
      <style jsx>{`
        .loader {
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

 
