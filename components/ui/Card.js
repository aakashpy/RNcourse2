import {View,StyleSheet} from 'react-native'
import Colors from '../../constants/colors'
const Card=({children})=>{
return(
    <View style={styles.card}>{children}</View>
)
}
export default Card;
const styles= StyleSheet.create({
    card: {
        padding: 16,
        marginHorizontal: 24,
        marginTop: 36,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: "center",
        justifyContent: "center",
      },
})