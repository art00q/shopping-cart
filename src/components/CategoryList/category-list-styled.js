import styled from 'styled-components';

const CategoryListStyled = styled.div`
  width: 100%;
`;

const ListHeader = styled.h4`
  margin: 25px 0;
  color: #838383;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export { CategoryListStyled, ListHeader, List };
