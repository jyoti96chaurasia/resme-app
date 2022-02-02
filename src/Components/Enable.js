import { useState } from "react";

export const Enable = () => {
    const [mode, setMode] = useState("dark");

    const toggleMode=()=>{
        if (mode === "light") {
            setMode("dark");
            document.body.style.background = "grey"; //forbackground color
          } else {
            setMode("light");
            document.body.style.background = "white";
          
        };
    }
  return <div>
      <div class="form-check form-switch">
  <input  className="container" onClick={toggleMode}class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label class="form-check-label" for="flexSwitchCheckChecked"></label>
</div>
  </div>;
};
