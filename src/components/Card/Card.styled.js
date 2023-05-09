import styled from "styled-components";
export const Item = styled.li`
  box-sizing: border-box;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  width: 380px;
  height: 460px;

  padding: 28px 36px 36px 36px;
  position: relative;
`;
export const Rectangle = styled.img`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  position: absolute;
  top: 214px;
  left: 0px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;

  display: block;
  position: absolute;
  top: 178px;
  left: 150px;
  z-index: 1;

  border-radius: 50%;
`;
export const Ellipse = styled.img`
  position: absolute;
  display: block;
  top: 178px;
  left: 145px;
  z-index: 2;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
`;

export const Text = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
  margin: 0;
`;

export const Follow = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;

  text-transform: uppercase;

  color: #373737;
  margin-top: 10px;
`;
export const Unfollow = styled.button`
  width: 196px;
  height: 50px;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  padding: 14px 28px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  margin-top: 10px;
  text-transform: uppercase;

  color: #373737;
`;

export const TweetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
