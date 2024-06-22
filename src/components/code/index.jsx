import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "Helper text";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl() {
    const [formData, setFormData] = useState({});
    const [code, setCode] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const res = await auth.sign_up(formData);
        if (res.status === 200) {
          localStorage.setItem("email", formData.email);
          navigate("/code");
          const payload = {
            code: code,
            email: localStorage.getItem("email"),
          };
  
          console.log(payload);
        }
      } catch (error) {
        console.log(error);
      }
  
      event.target.reset();
    };
  return (
    <form noValidate autoComplete="off" className="codePage">
      <FormControl sx={{ width: "50ch" }}>
        <OutlinedInput placeholder="Please enter Code.." />
        <MyFormHelperText />
      </FormControl>
      <button className="btn">Enter</button>
    </form>
  );
}
