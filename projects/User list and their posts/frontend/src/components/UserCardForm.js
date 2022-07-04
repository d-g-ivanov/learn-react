// hooks
import { useContext } from "react";

// components
import Input from "./Input";

// others
import { UserPropsContext } from "../store/UserPropsContext";

function getVal(source, path) {
  const keyPath = path.split('.');
  for (let i = 0; i < keyPath.length; i++) {
    source = source[keyPath[i]];
  }
  return source;
}

export default function UserCardForm({ user }) {
  const { onChange: sendUpdate, inputList } = useContext(UserPropsContext);

  const onChange = (e) => {
    sendUpdate(user.id, {
      field: e.target.name,
      value: e.target.value
    });
  };

  return (
    <form className="user-fields">
      { 
        inputList.map( 
          ({name, placeholder}, idx) => 
            <Input 
              key={idx} 
              name={name} 
              placeholder={placeholder} 
              value={getVal(user, name)} 
              onChange={onChange} 
            />
        )
      }
    </form>
  );
}
