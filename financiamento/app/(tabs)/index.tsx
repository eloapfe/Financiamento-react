import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export default function SimuladorFinanciamento() {
  const [valor, setValor] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [juros, setJuros] = useState('');
  const [taxaAdicional, setTaxaAdicional] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularFinanciamento = () => {
    const mensal = parseFloat(valor.replace(',', '.'));
    const t = parseInt(parcelas);
    const i = parseFloat(juros.replace(',', '.')) / 100;
    const taxaExtra = parseFloat(taxaAdicional.replace(',', '.')) || 0;

    if (!mensal || !t || isNaN(i)) {
      setResultado('Por favor, preencha todos os campos corretamente.');
      return;
    }

    let montanteR = mensal + taxaExtra;

    for (let j = 1; j <= t; j++) {
      montanteR = montanteR + montanteR * i;
    }

    const parcelaFinal = (montanteR / t).toFixed(2);

    setResultado(
      `Montante total: R$ ${montanteR.toFixed(2)}\nValor aproximado por parcela: R$ ${parcelaFinal}`
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <Text style={styles.title}>Simulador de Financiamento</Text>

        <TextInput
          style={styles.input}
          placeholder="Valor do bem (R$)"
          keyboardType="numeric"
          value={valor}
          onChangeText={setValor}
        />

        <TextInput
          style={styles.input}
          placeholder="Número de parcelas"
          keyboardType="numeric"
          value={parcelas}
          onChangeText={setParcelas}
        />

        <TextInput
          style={styles.input}
          placeholder="Taxa de juros mensal (%)"
          keyboardType="numeric"
          value={juros}
          onChangeText={setJuros}
        />

        <TextInput
          style={styles.input}
          placeholder="Taxas adicionais (opcional)"
          keyboardType="numeric"
          value={taxaAdicional}
          onChangeText={setTaxaAdicional}
        />

        <Button title="Calcular" onPress={calcularFinanciamento} />

        {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#b30059',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#b30059',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    color: '#660033',
    textAlign: 'center',
  },
});
