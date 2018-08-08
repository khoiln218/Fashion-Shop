import { AsyncStorage } from 'react-native';

const getAvatar = async () => {
    try {
        const value = await AsyncStorage.getItem('@avatar');
        if (value !== null) {
            return value;
        }
        return '';
    } catch (error) {
    // Error retrieving data
        return '';
    }
};

export default getAvatar;
