import React from 'react';
import HighlightCard from '../../components/HighlightCard';
import TransactionCard, { TransactionCardProps }  from '../../components/TransactionCard/TransactionCard';

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
  TransactionsList,
  LogoutButton
} from './styles'

export interface DatalistProps extends TransactionCardProps{
  id: string;
}

export default function Dashboard() {

  const data : DatalistProps[] = [{
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site', 
    amount: 'R$ 12.000,00',
    date:'13/04/2020', 
    category: {
      name: 'vendas', 
      icon: 'dollar-sign'
    }
  },
  {
    id: '2',
    type: 'negative',
    title: 'Hamburgueria Pizzy', 
    amount: 'R$ 59,00',
    date:'10/04/2020', 
    category: {
      name: 'Alimentação', 
      icon: 'coffee'
    }
  },
  {
    id: '3',
    type: 'positive',
    title: 'Desenvolvimento de site', 
    amount: 'R$ 12.000,00',
    date:'13/04/2020', 
    category: {
      name: 'Casa', 
      icon: 'home'
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

          <LogoutButton onPress={() => {}}>
            <Icon name='power' ></Icon>
          </LogoutButton>

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
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item}></TransactionCard>}
          />
      </Transactions>

    </Container>
  );
}
