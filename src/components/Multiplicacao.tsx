import { Text, View } from "react-native";

type MultiplicacaoProps = {
  valor1: number;
  valor2: number;
  valor3: number;
};

export default function Multiplicacao(props: MultiplicacaoProps) {
  const resultado = props.valor1 * props.valor2 * props.valor3;

  return (
    <View>
      <Text>Resultado da Multiplicacao:</Text>
      <Text>
        {props.valor1} x {props.valor2} x {props.valor3} = {resultado}
      </Text>
    </View>
  );
}