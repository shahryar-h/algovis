import styled from "styled-components/macro";

const SortItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

const SortItem = styled.div`
  width: 8%;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.selected ? "linear-gradient(145deg, #0e799a, #0c6682)" : "#0d7190"};
  box-shadow: ${(props) =>
    props.selected
      ? "inset 5px 5px 13px #095168,inset -5px -5px 13px #1191b8"
      : "5px 5px 13px #095168, -5px -5px 13px #1191b8"};

  height: ${(props) => `${props.sortPosition * 10 + 35}%`};
`;

export { SortItems, SortItem };
