import React from 'react';

interface IconProps {
  type: string
}

const Icon:React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>{props.type}</span>
  );
}

export default Icon;
