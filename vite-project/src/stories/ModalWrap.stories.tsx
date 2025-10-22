import Modal from '../components/modal/ModalWrap';

export default {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        title: { control: 'text' },

    },
};

export const Default = {
    args: {
        size: 'sm',
        title: <h3>안녕</h3>,
        body: <p>안녕</p>,
        footer: <p>안녕</p>
    },
};
