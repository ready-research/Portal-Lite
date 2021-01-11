import styled, { keyframes } from 'styled-components';
const AniFade = keyframes`
  from{
    opacity:.2;
  }
  to{
    opacity:.8;
  }
`;
const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0.2rem;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.6rem 0.8rem;
  .icon {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: -0.4rem;
    animation: ${AniFade} 1s infinite alternate;
  }
`;

export default function Loading({ tip = '加载中' }) {
  return (
    <StyledWrapper>
      <svg
        t="1609919775032"
        className="icon"
        viewBox="0 0 1365 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="15447"
        width="32"
        height="32"
      >
        <path
          d="M1052.444444 910.222222h-28.672v-96.824889h28.672c88.348444 0 160.028444-72.305778 160.028445-161.450666a161.678222 161.678222 0 0 0-80.896-140.344889 158.151111 158.151111 0 0 0-98.417778-19.911111c-22.755556-158.947556-158.264889-281.031111-322.048-281.031111-163.783111 0-299.235556 122.083556-321.991111 281.031111a159.232 159.232 0 0 0-98.474667 19.911111 161.621333 161.621333 0 0 0-80.839111 140.344889c0 89.144889 71.623111 161.450667 159.971556 161.450666h125.553778V910.222222H369.777778C228.408889 910.222222 113.777778 794.567111 113.777778 651.946667a257.877333 257.877333 0 0 1 198.997333-251.904 425.927111 425.927111 0 0 0-8.248889 26.851555C353.28 246.442667 516.835556 113.777778 711.111111 113.777778c184.490667 0 341.333333 119.637333 398.336 286.264889A257.877333 257.877333 0 0 1 1308.444444 651.946667c0 142.620444-114.631111 258.275556-256 258.275555z"
          fill="#36ab60"
          p-id="15448"
        ></path>
        <path
          d="M812.657778 563.143111a136.192 136.192 0 1 0-192.625778 192.568889A136.192 136.192 0 0 0 812.657778 563.2z m144.497778 288.995556a34.019556 34.019556 0 1 1-48.184889 48.071111l-72.248889-72.248889c-0.853333-0.796444-1.137778-1.934222-1.877334-2.844445a203.889778 203.889778 0 0 1-262.997333-21.162666 204.344889 204.344889 0 1 1 288.995556-288.995556 203.889778 203.889778 0 0 1 21.219555 262.997334c0.910222 0.739556 1.991111 1.024 2.844445 1.877333l72.248889 72.248889z"
          fill="#36ab60"
          p-id="15449"
        ></path>
      </svg>
      <div>{tip}</div>
    </StyledWrapper>
  );
}
