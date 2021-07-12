import React, { useRef, useEffect } from 'react'
import { record } from 'rrweb';

export default function useRrWeb() {
  const ref = useRef<any>([]);
  useEffect(() => {
    record({
      emit(event) {
        console.log(event)
        ref.current= [...ref.current, event]
        window.chunks = [...ref.current, event];
      },
    });
  }, []);
  return ref
}
