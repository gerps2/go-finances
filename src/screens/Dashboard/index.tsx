import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import HighlightCard from '../../components/HighlightCard';
import TransactionCard from '../../components/TransactionCard/TransactionCard';

import {
  Container,
  Header,
  UserInfo,
  UserWrapper,
  User,
  Photo,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles'

export default function Dashboard() {

  const data = [{
    title: 'Desenvolvimento de site', 
    amount: 'R$ 12.000,00',
    date:'13/04/2020', 
    category: {
      name: 'vendas', 
      icon: 'dollar-sign'
    }
  },
  {
    title: 'Desenvolvimento de site', 
    amount: 'R$ 12.000,00',
    date:'13/04/2020', 
    category: {
      name: 'vendas', 
      icon: 'dollar-sign'
    }
  },
  {
    title: 'Desenvolvimento de site', 
    amount: 'R$ 12.000,00',
    date:'13/04/2020', 
    category: {
      name: 'vendas', 
      icon: 'dollar-sign'
    }
  }];

  return (
    <Container>
      <Header>
        <UserWrapper>

          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/62313131?v=4' }} />
            <User>
              <UserGreeting>Ola,</UserGreeting>
              <UserName>Gerson</UserName>
            </User>
          </UserInfo>

          <Icon name='power' ></Icon>

        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title='entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
          type='up' />

        <HighlightCard
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 03 de abril'
          type='down' />

        <HighlightCard
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de abril'
          type='total' />

      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList 
          data={data}
          renderItem={({ item }) => <TransactionCard data={item}></TransactionCard>}
          showsVerticalScrollIndicator = {false}
          contentContainerStyle={{ paddingBottom: getBottomSpace() }}/>
      </Transactions>

    </Container>
  );
}
