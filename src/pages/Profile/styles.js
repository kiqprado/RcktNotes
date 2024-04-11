import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    max-width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;

      transition: all 0.3s ease-in-out;
    }

    svg:hover {
      color: ${({ theme }) => theme.COLORS.WHITE};
      transform: scale(1.1);
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 32px auto;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -134px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    svg {
      font-size: 22px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    input {
      display: none;
    }
  }
`
