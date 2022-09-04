import React from "react";
import GridItems from "../GridItems";
import * as styled from "./styles";
const Grid = ({ itens, setItens }) => {
    function onDelete(ID) {
        const newArray = itens.filter((transactions) => transactions.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray))
    }

  return (
    <styled.Table>
      <styled.Thead>
        <styled.Th width={40}>Descrição</styled.Th>
        <styled.Th width={40}>Valor</styled.Th>
        <styled.Th width={10} alignCenter>
          Tipo
        </styled.Th>
        <styled.Th width={10}></styled.Th>
      </styled.Thead>
      <styled.Tbody>
        {itens?.map((item, index) => (
            <GridItems key={index} item={item} onDelete={onDelete} />
        ))}
      </styled.Tbody>
    </styled.Table>
  );
};

export default Grid;
