import styled from 'styled-components';

module.exports = {
  HeaderWrapper: styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  `,
  SiteName: styled.h1`
    color: rgb(102,51,153);
    background-color: transparent;
    cursor: pointer;
    margin: 0;
    max-width: 380px;
    transition: all 0.3s ease-out;
    &:hover {
      color: white;
      background-color: rgba(102,51,153, 0.5);
      transition: all 0.3s ease-out;
    }
  `,
  SiteWrapper: styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
  `,
}