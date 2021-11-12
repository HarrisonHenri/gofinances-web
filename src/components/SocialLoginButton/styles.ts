import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: var(--background);
  border-radius: 5px;

  color: var(--primary);
  font-weight: 600;

  height: 56px;
  min-width: 320px;
  margin-top: -28px;

  &:hover {
    filter: brightness(0.9);
  }
`;
