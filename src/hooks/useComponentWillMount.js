// https://stackoverflow.com/a/56818036/9749931
import { useEffect, useRef } from "react";

const useComponentDidMount = func => useEffect(func, []);
const useComponentWillMount = func => {
  const willMount = useRef(true);

  if (willMount.current) {
    func();
  }

  useComponentDidMount(() => {
    willMount.current = false;
  });
};

export default useComponentWillMount;
