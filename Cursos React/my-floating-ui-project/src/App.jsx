import { useRef, useState, useEffect } from 'react';
import {
  useFloating,
  useClick,
  useHover,
  useInteractions,
  FloatingArrow,
  arrow,
  offset,
} from '@floating-ui/react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context, update } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom',
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset(10),
    ],
  });

  const click = useClick(context);
  const hover = useHover(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, hover]);

  useEffect(() => {
    const handleResize = () => {
        update();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [update]);

  return (
    <>
      <div id='btn' ref={refs.setReference} {...getReferenceProps()}>
        Reference element
      </div>
      <div
        id="container"
        className={isOpen ? 'visible' : 'hidden'}
        ref={refs.setFloating}
        style={floatingStyles}
        {...getFloatingProps()}
      >
        <FloatingArrow id="arrow" ref={arrowRef} context={context} fill="#353535" anch />
        Floating element
      </div>
    </>
  );
}

export default App
