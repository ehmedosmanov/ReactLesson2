import { useState } from "react";
import "./index.css";

const Calculate = () => {
  const [text, setText] = useState("");
  const [memo, setMemo] = useState({
    value: "",
    operator: "",
  });
  const handleValue = (e) => {
    setText(text + e.target.value);
  };
  const handleChange = (e) => {
    setText(parseInt(e.target.value));
  };
  const handleOperation = (e) => {
    switch (e.target.value) {
      case "+":
        setMemo({
          value: text,
          operator: "+",
        });
        setText("");
        break;
      case "-":
        setMemo({
          value: text,
          operator: "-",
        });
        setText("");
        break;
      case "*":
        setMemo({
          value: text,
          operator: "*",
        });
        setText("");
        break;
      case "/":
        setMemo({
          value: text,
          operator: "/",
        });
        setText("");
        break;
      case "=":
        handleEqual(memo)
        break;
      default:
        break;
    }

    function handleEqual(memo) {
        switch (memo.operator) {
            case "+":
              console.log(memo.value);
              setText(parseFloat(memo.value) + parseFloat(text));
              break;
            case "-":
              setText(parseFloat(memo.value) - parseFloat(text));
              break;
            case "/":
              setText(parseFloat(memo.value) / parseFloat(text));
              break;
            case "*":
              setText(parseFloat(memo.value) * parseFloat(text));
              break;
            default:
              break;
          }
    }
  };
  return (
    <form>
      <table>
        <tr>
          <td colSpan="3">
            <input onChange={handleChange} value={text} type="text" />
          </td>
          <td>
            <input
              type="button"
              value="c"
              onClick={() => {
                setText("");
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              onClick={(e) => {
                handleValue(e);
              }}
              type="button"
              value="1"
            />
          </td>
          <td>
            <input
              onClick={(e) => {
                handleValue(e);
              }}
              type="button"
              value="2"
            />
          </td>
          <td>
            <input
              onClick={(e) => {
                handleValue(e);
              }}
              type="button"
              value="3"
            />
          </td>
          <td>
            <input
              onClick={(e) => {
                handleOperation(e);
              }}
              type="button"
              value="/"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              onClick={(e) => {
                handleValue(e);
              }}
              type="button"
              value="4"
            />
          </td>
          <td>
            <input
              onClick={(e) => {
                handleValue(e);
              }}
              type="button"
              value="5"
            />
          </td>
          <td>
            <input
              onClick={(e) => {
                handleValue(e);
              }}
              type="button"
              value="6"
            />
          </td>
          <td>
            <input
              onClick={(e) => {
                handleOperation(e);
              }}
              type="button"
              value="*"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              onClick={(e) => {
                handleValue(e);
              }}
              type="button"
              value="7"
            />
          </td>
          <td>
            <input
              onClick={(e) => {
                handleValue(e);
              }}
              type="button"
              value="8"
            />
          </td>
          <td>
            <input
              onClick={(e) => {
                handleValue(e);
              }}
              type="button"
              value="9"
            />
          </td>
          <td>
            <input
              onClick={(e) => {
                handleOperation(e);
              }}
              type="button"
              value="-"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input onClick={(e) => {
                handleValue(e);
              }} type="button" value="0" />
          </td>
          <td>
            <input
              onClick={(e) => {
                handleValue(e);
              }}
              type="button"
              value="."
            />
          </td>
          <td>
            <input
              onClick={(e) => {
                handleOperation(e);
              }}
              type="button"
              value="="
            />
          </td>
          <td>
            <input
              onClick={(e) => {
                handleOperation(e);
              }}
              type="button"
              value="+"
            />
          </td>
        </tr>
      </table>
    </form>
  );
};

export default Calculate;
