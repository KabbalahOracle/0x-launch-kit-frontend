import { Theme, themeColors, ThemeColors, ThemeModalStyle } from './commons';

const modalThemeStyle: ThemeModalStyle = {
    content: {
        bottom: 'auto',
        borderColor: themeColors.borderColor,
        flexGrow: '0',
        left: 'auto',
        minWidth: '350px',
        position: 'relative',
        right: 'auto',
        top: 'auto',
    },
    overlay: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '12345',
    },
};

const whiteThemeColors: ThemeColors = {
    background: '#f5f5f5',
    borderColor: '#DEDEDE',
    darkBlue: '#002979',
    darkGray: '#474747',
    darkerGray: '#666',
    errorButtonBackground: '#FF6534',
    errorCardBackground: '#FAF4EF',
    errorCardBorder: '#F39E4B',
    errorCardText: '#F68C24',
    gray: '#808080',
    green: '#3CB34F',
    lightGray: '#B9B9B9',
    orange: '#F6851B',
    rowActive: '#FBFDFF',
    textLight: '#999',
    notificationActive: '#F8F8F8',
};

export class DefaultTheme implements Theme {
    public componentsTheme: ThemeColors;
    public modalTheme: ThemeModalStyle;
    constructor() {
        this.componentsTheme = whiteThemeColors;
        this.modalTheme = modalThemeStyle;
    }
}
