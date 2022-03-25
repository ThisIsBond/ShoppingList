import { Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import styles from './styles';

const CardView = (props: CardViewProps) => {

    const { name } = props;

    return (
        <View style={styles.container}>
                <Text style={styles.textView}>{name}</Text>
        </View>
    )
}
export default CardView;
