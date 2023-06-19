"use client"

import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    font-weight: normal;
    font-style: normal;
  }
  :root {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --lightGrey: #e1e1e1; 
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 2px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
  }
  * , *::before, *::after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Inter',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: var(---black);
  }
  a:hover {
    text-decoration: underline;
  }
`
export const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`