import React from 'react';
import { useEffect } from 'react';
import { record } from 'rrweb';

export default function index(props: any) {
  window.events: any[] = [];
  useEffect(() => {
    record({
      emit(event) {
        console.log(event)
        events.push(event);
      },
    });
  }, []);

  return <div>{props.children}</div>;
}
