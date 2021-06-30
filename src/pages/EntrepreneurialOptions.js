import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { 
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text
} from "react-native";

function EntrepreneurialOptions() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollCards}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      >
        <RectButton style={styles.card}>
          <Text style={styles.title}>01 - Dinheiro é Consequência{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            1. Do número de pessoas que ajudamos resolvendo seus problemas;{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            2. Da magnitude do problema resolvido.{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>02 - A Alma do Negócio{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            1. 65% Marketing;
          </Text>
          <Text style={styles.txtColorWhite}>
            2. 25% Produção;
          </Text>
          <Text style={styles.txtColorWhite}>
            3. 15% Operações.{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>03 - Os Fatores do Sucesso{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            A. Lucro - É a diferença entre o faturamento e todos os custos do negócio.{`\n`}  
          </Text>
          <Text style={styles.txtColorWhite}>
            B. Caixa - É todo dinheiro disponível para uso imediato no negócio.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            C. Fluxo de Caixa - É a projeção de todo dinheiro que entrará no caixa da empresa contra o que sairá em um determinado período de tempo.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            D. Gastos - Custos vs Despesas.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            E. Faturamento - todo dinheiro que entra no negócio.{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>04 - Ticket Médio{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            Faturamento dividido pelo Total de produtos vendidos.{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>05 - CAC ( Custo de Aquisição do Cliente){`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            É o valor necessário para adquirir novos clientes.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Custo de Marketing.
          </Text>
          <Text style={styles.txtColorWhite}>
            Custo de Vendas.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            MKT + Vendas ÷ Total de Novos Clientes{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>06 - Burn Rate{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            É o tempo restante em que é possível continuar queimado as mesmas quantidades de caixa até o dinheiro acabar.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Caixa ÷ Despesas - Faturamento{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>07 - Modelo pré-existente{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            É preciso analisar:{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            1. Ameaça de Novos Entrantes{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            2. Ameaça de Produtos Substitutos{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            3. Rivalidade Entre Firmas Existente{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            4. Poder de Barganha dos Compradores{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            5. Poder de Barganha dos Fornecedores{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>08 - Como escolher o que vender?{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            Ao começar um negócio escolha primeiro o preço, escolher o preço antes do produto, você precisa se fazer duas perguntas:{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            1. O que outras pessoas estão oferecendo a este preço?{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            2. O que eu posso oferecer a este preço?{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>09 - Espaço Amostral{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            Outrageous Offer - Boa demais para não testar.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Upsell - Oferecer mais produtos para somar com a compra original.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Downsell - Oferecer produtos de valores menores quando a oferta Inicial é rejeitada.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Breakeven - Quando o valor do investimento é recuperado pelo valor do faturamento.{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>10 - Como escolher para quem vender?{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            Conhecendo seus clientes ideais você vai conseguir responder às duas perguntas principais do seu cliente:{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            1. Por que eu devo comprar isso?{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            2. Por que eu devo comprar de você?{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Quem vem por preço vai por preço, dificilmente pequenos empreendedores vão conseguir ganhar no jogo do preço.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Mas por que alguém compraria algo de você se os preços não são os melhores?{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            As pessoas não compram o que você faz, mas o porquê do que faz.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Por que? / Como? / O que?{`\n`}
          </Text>
        </RectButton>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: 10,
    backgroundColor: '#20232a',
  },
  scrollCards: {
    width: '100%',
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#353A47',
    marginTop: 10,
    padding: 10,
  },
  title: {
    color: '#c6c6c6',
    fontSize: 18,
  },
  txtColorWhite: {
    color: '#c6c6c6',
    fontSize: 15,
  },
});

export default EntrepreneurialOptions;