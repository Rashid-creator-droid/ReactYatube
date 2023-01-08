import React from 'react';

const Input = ({
    extraClass = "",
  extraInputClass = "",
  type,
  id,
  error,
  ...rest
}) => {

    const [passwordOpen, setPasswordOpen] = React.useState(false);
  const customType =
    type === "password" ? (passwordOpen ? "text" : "password") : type;
  const passwordIcon = customType === "password" ? "ds" : "sqw";

  const handleTogglePassword = () => {
    setPasswordOpen(!passwordOpen);
  };

    return (
        <div>
            <input
        id={id}
        type={customType}
        className={`text text_type_medium-16 text_color_primary`}
        {...rest}
      />
        </div>
    );
};

export default Input;