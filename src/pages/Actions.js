import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { 
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text
} from "react-native";

function Actions() {
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
          <Text style={styles.title}>01 - P/L ou P/LPA{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            Preço da ação na bolsa / lucro líquido no ano da empresa ÷ número de ações emitidas.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            O P/L mostra em quantos anos o investimento reaveria seu capital caso:{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            A EMPRESA DISTRIBUÍSSE 100% DOS SEUS LUCROS AOS ACIONISTAS.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            A EMPRESA LUCRASSE SEMPRE O MESMO QUE HOJE.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Na TEORIA, quanto menor for o P/L, maior o potencial de valorização da ação.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Como saber se essa teoria é válida?{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Verificando o histórico de lucro líquido.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            P/ L = 20 é muito alto{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            P/ L = 3 é muito baixo{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>02 - Dividend Yield{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            É a relação percentual entre o que você investe na prática de dividendos e juros sobre capital próprio.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            DY = Dividendos pagos nos últimos 12 meses / Investimento.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Atenção! Seja crítico.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Empresa SMALL CAPS:
          </Text>
          <Text style={styles.txtColorWhite}>
            São empresas novas na bolsa, com pouca capitalização, baixa liquidez e altos potencial de crescimento.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
          Se DY for alto pode haver riscos da empresa quebrar, já DY baixo pode haver oportunidade de crescimento da empresa e consequentemente a valorização das ações.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Empresas BLUE CHIPS:
          </Text>
          <Text style={styles.txtColorWhite}>
            São consideradas as maiores e mais seguras empresas da bolsa, geralmente são empresas líderes de seu setor e são grandes pagadoras de dividendos.{`\n`}
          </Text>          
          <Text style={styles.txtColorWhite}>
            Se DY for alto a chances de crescimento da empresa são menores e o risco das ações caírem de preço são maiores e por isso elas pagam mais dividendos.{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>03 - P/VPA ou P/VP{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            É o preço da ação na bolsa sobre o património líquido ÷ número de ações emitidas.{`\n`}  
          </Text>
          <Text style={styles.txtColorWhite}>
            Patrimônio líquido é a diferença da subtração de ATIVOS - PASSIVOS.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            P/VPA = 1 
          </Text>
          <Text style={styles.txtColorWhite}>
            Empresa precificada igual ao seu PL{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            P/VPA {'>'} 1
          </Text>
          <Text style={styles.txtColorWhite}>
            Empresa precificada acima de seu PL{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            P/VPA {'<'} 1
          </Text>
          <Text style={styles.txtColorWhite}>
            Empresa precificada abaixo do seu PL{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Atenção! Verificar o histórico de crescimento de PL (patrimônio líquido).{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>04 - Margem Líquida{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            Mostra a relação entre o quanto se vende e o quanto se lucra.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Receita líquida é o dinheiro que sobra depois de todos procedimentos para adquirir ela foram pagos.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Sempre comparação com empresa de mesmo certo.{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>05 - DB/PL{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            DB = dívida bruta
          </Text>
          <Text style={styles.txtColorWhite}>
            PL = patrimônio líquido
          </Text>
          <Text style={styles.txtColorWhite}>
            Atenção!
          </Text>
          <Text style={styles.txtColorWhite}>
            Empresas com DB/PL {'>'} 1 ou DB/PL {'>'} 100% têm um valor de dívidas maior do que o que vale a própria empresa. É um alto risco de perdas.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Foque em empresas com DB/PL {'<'} 0,5 ou 50% caso seja maior pode parar a análise e procurar outras ações.{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>06 - ROE (Return on Equity) ou RPL{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            Retorno sobre o património líquido.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Lucro líquido sobre patrimônio líquido.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Quanto maior o ROE, melhor. A partir de 10% é aceitável.{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>07 - EV/ EBIT{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            EV - Enterprise Value.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            EV = (P * Número de Ações Emitidas) + Dívida líquida.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            P = o preço da ação negociada na bolsa.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Dívida Líquida é ( DB - Caixa).{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            EBIT - Earnings Before Interest and Taxes.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            LAJIR - Lucros antes de juros e imposto de renda.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Porque o EBIT é comparado ao valor de mercado da empresa + suas dívidas (EV) e não somente ao valor de mercado (P · N° Ações emitidas), como em P/L?{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Quanto menor for EV / EBIT = (P · Número) + dívidas ÷ lucro operacional. Melhor é a empresa pois mostra que está bem avaliada.{`\n`}
          </Text>
        </RectButton>

        <RectButton style={styles.card}>
          <Text style={styles.title}>08 - A qualidade da governança{`\n`}</Text>
          <Text style={styles.txtColorWhite}>
            Verificar se a empresa está:{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            1. Listada no novo mercado.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            2. Ter bom Free Float + de 30%.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            3. Boa reputação da empresa no reclame aqui.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            4. Não ter alta parte do governo.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Free Float - ações disponíveis no mercado, ações quê não pertencem a acionistas estratégicos como controladores e diretores da empresa e acionistas que tenham 5% do capital da empresa.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Importante!
          </Text>
          <Text style={styles.txtColorWhite}>
            Sempre reveja as ações a cada 1 ano e responda.{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Se essa empresa tivesse os mesmos indicadores que têm hoje, na hora em que comprei suas ações há um ano atrás, eu ainda gostaria de me tornar dono dessa empresa?{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Sim - mantenha as ações{`\n`}
          </Text>
          <Text style={styles.txtColorWhite}>
            Não - venda as ações{`\n`}
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

export default Actions;