import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"



export default function App() {
  return(
    <Table variant="simple" size="sm">
      <Thead>
        <Tr>
          <Th>A</Th>
          <Th>B</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>a</Td>
          <Td>b</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}



