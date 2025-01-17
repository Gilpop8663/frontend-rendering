'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70px;

  position: fixed;
  top: 0;

  background-color: var(--header);

  padding: 0 80px;
`;

export const LogoWrapper = styled.div`
  height: 50%;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`;
