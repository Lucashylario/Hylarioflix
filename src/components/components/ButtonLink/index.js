import React from 'react';

function ButtonLink(props) {

  return (
      <a className={props.className} href={props.href}>
          Novo Video
      </a>
  );
}

export default ButtonLink;