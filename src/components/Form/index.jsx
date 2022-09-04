import React, { useState } from "react";
import Grid from "../Grid";
import * as Styled from "./styles";
const Form = ({handleAdd, setTransactionsList, transactionsList}) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }
    const transaction = {
        id: generateID,
        desc: desc,
        amount: amount,
        expense: isExpense
      };
      handleAdd(transaction);
      setDesc("");
      setAmount("")
  };

 console.log(isExpense)
  return (
    <>
    <Styled.Container>
      <Styled.InputContent>
        <Styled.Label>Descrição</Styled.Label>
        <Styled.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </Styled.InputContent>
      <Styled.InputContent>
        <Styled.Label>Valor</Styled.Label>
        <Styled.Input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Styled.InputContent>
      <Styled.RadioGroup>
        <Styled.Input
          type={"radio"}
          id={"rIncome"}
          defaultChecked
          name="group1"
          onChange={() => setExpense(!isExpense)}
        />
        <Styled.Label htmlFor="rIncome">Entrada</Styled.Label>
        <Styled.Input
          type={"radio"}
          id={"rExpenses"} 
          name="group1"
          onChange={() => setExpense(!isExpense)}
        />
        <Styled.Label htmlFor="rIncome">Saída</Styled.Label>
      </Styled.RadioGroup>
      <Styled.Button onClick={handleSave}>ADICIONAR</Styled.Button>
    </Styled.Container>
    <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  );
};

export default Form;
