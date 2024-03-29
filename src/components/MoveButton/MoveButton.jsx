import { Link } from 'react-router-dom';
import { ButtonCounter, MoveButtonStyled } from './move-button-styled';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MoveButton({ path, shape, count }) {
  const [hovered, setHovered] = useState(false);

  const onHover = () => setHovered(true);
  const onUnhover = () => setHovered(false);

  return (
    <MoveButtonStyled>
      <Link to={path}>
        <FontAwesomeIcon
          onMouseEnter={onHover}
          onMouseLeave={onUnhover}
          icon={shape}
          size="xl"
          style={{ color: hovered ? '#000000' : '#535353' }}
        />
      </Link>
      {count ? <ButtonCounter>{count}</ButtonCounter> : ''}
    </MoveButtonStyled>
  );
}

export default MoveButton;
