import { AsyncStorage } from 'react-native';

const saveAvatar = async (avatar) => {
    try {
        await AsyncStorage.setItem('@avatar', avatar);
        return 'THANH_CONG';
    } catch (e) {
        return 'THAT_BAI';
    }
};

export default saveAvatar;
