import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['red', 'blue', 'gray'],
        },
        label: { control: 'text' },
    },
};

export const Default = {
    args: {
        color: 'red',
        label: 'Button',
    },
};
