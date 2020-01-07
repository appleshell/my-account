import React from 'react'
import './style.scss'

function RippleButton ({ children, onClick }) {
  const [coords, setCoords] = React.useState({ x: -1, y: -1});
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(
    () => {
      if (coords.x !==-1 && coords.y !== -1) {
        setIsRippling(true);
        setTimeout(() => setIsRippling(false), 1500)
      }
    },
    [coords]
  );

  React.useEffect(
    () => {
      if (!isRippling) setCoords({ x: -1, y: -1 });
    },
    [isRippling]
  );

  return (
    <button
      className="ripple-button"
      onClick={e => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        setCoords({ x, y });
        // onClick && onClick(e);
      }}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{ left: coords.x + 10, top: coords.y }}
        />
      ) : (
        ''
      )}
      <span className="content">{children}</span>
    </button>
  );
}

export default RippleButton