import { useState } from "react";

const Abrorbek = () => {
const [click,setClick] = useState(false)
  
  return <div>
       <button onClick={() => setClick(!Click)}>
        Toggle Text
      </button>

      {click && <h1>Abrorbek</h1>}
  </div>;
};

export default Abrorbek;
