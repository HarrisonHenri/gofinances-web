import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-radius: 0 0.5rem;

    th {
      color: var(--body);
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;

      padding: 1rem 2rem;
    }

    td {
      padding: 1rem 2rem;

      border: 0;
      border-radius: 0.25rem;
      background: var(--shape);

      color: var(--body);

      &:first-child {
        color: var(--title);
      }

      &.deposit {
        color: var(--success);
      }

      &.withdraw {
        color: var(--attention);
      }
    }
  }
`;
