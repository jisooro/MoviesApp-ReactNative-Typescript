import ImageColors from 'react-native-image-colors';


const getColors = async ( uri: string ) => {

    const colors = await ImageColors.getColors(uri, {})

    let primary;
    let secondary;

    switch (colors.platform) {
        case 'android':
            // android result properties
            primary = colors.dominant
            secondary = colors.average
            break
        case 'web':
            // web result properties
            primary = colors.dominant
            secondary = colors.platform
            break
        case 'ios':
            // iOS result properties
            primary = colors.primary
            secondary = colors.secondary
            break
        default:
            throw new Error('Unexpected platform key')
    }

    return [primary, secondary]

}

export default getColors