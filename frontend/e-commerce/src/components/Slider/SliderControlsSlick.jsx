import React from 'react';
export function NextBtn({ onClick }) {
   return (
      <button className="glide__arrow glide__arrow--right" onClick={onClick} style={{ zIndex: 2 }}>
         <i className="bi bi-chevron-right"></i>
      </button>
   );
}

export function PrevButton({ onClick }) {
   return (
      <button className="glide__arrow glide__arrow--left" onClick={onClick} style={{ zIndex: 2 }}>
         <i className="bi bi-chevron-left"></i>
      </button>
   );
}
