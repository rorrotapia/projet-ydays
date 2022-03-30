import React from 'react';
import styled from "styled-components";

const Table = styled.div`
  margin-top: 3rem;
  color:white;
  font-family: 'Staatliches';
`;
const TitleCalendar = styled.h3`
  font-size: 2rem;
`;
const TableHead = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;
const TableItem = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;
const TableItemLi = styled.li`
 background-color: rgba(69,85,42,.6);
 width: 25%;
`;
const ItemDay = styled.li`
  padding: 0.1rem 1rem;
  margin: 0 1rem 0 0;
  width: 25%;
`;

let d = new Date()
let getTotalDays = new Date(d.getFullYear(), d.getMonth() +1 , 0).getDate() //Get total days in a month

let sundays = []  //Declaring array for inserting Sundays

for(let i=1;i<=getTotalDays;i++){    //looping through days in month
  let newDate = new Date(d.getFullYear(),d.getMonth(),i)
  if(newDate.getDay() === 0){
    sundays.push(newDate);
  }
}

const Calendar = () => {
  return (
    <Table>
      <TitleCalendar>Next Wipes</TitleCalendar>
      <TableHead>
        <TableItemLi>DATE</TableItemLi>
        <TableItemLi>TYPE</TableItemLi>
        <TableItemLi>Remove Map</TableItemLi>
        <TableItemLi>Remove Recipe</TableItemLi>
      </TableHead>
      {sundays.map((sunday,item) => (
        <TableItem key={item}>
          <ItemDay>
            {`${(sunday.getDate() >= 9 ? sunday.getDate() : `0${sunday.getDate()}` )}
            /${(sunday.getMonth() >= 9 ? sunday.getMonth() + 1 : `0${sunday.getMonth() + 1}` )}
            /${sunday.getFullYear()}`}
          </ItemDay>
          <ItemDay>Map Wipe</ItemDay>
          <ItemDay>YES</ItemDay>
          <ItemDay>
            {((sundays.length - 1) === item)
              ? "yes"
              : "no"}
          </ItemDay>
        </TableItem>
      ))}
    </Table>
  )
}

export default Calendar