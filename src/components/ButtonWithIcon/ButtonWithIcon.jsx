import { Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modalSlice';
import { loading } from '../../redux/uiSlice';
import './index.scss';

const ButtonWithIcon = ({ text, iconSrc, href }) => {
    const dispatch = useDispatch();
    return (
        <Button
            width="100%"
            size="lg"
            justifyContent="flex-start"
            onClick={() => {
                dispatch(closeModal());
                dispatch(loading());
                window.location.href = href;
            }}
        >
            <Image
                src={process.env.PUBLIC_URL + '/assets/logo/' + iconSrc}
                boxSize="28px"
                marginRight="12px"
                objectFit="cover"
                borderRadius="8px"
                marginLeft="-8px"
            />
            <Text flex="1">{text}</Text>
        </Button>
    );
};

export default ButtonWithIcon;
