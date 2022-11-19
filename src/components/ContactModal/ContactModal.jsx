import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
} from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { useLocation } from 'react-router-dom';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import './index.scss';

const ContactModal = ({ isOpen, onClose }) => {
    const location = useLocation();

    let insta = 'trananhpremium';
    if (location.pathname === '/netflix') insta = 'trananh.netflixx';
    if (location.pathname === '/spotify') insta = 'trananh.spotify';

    return (
        <Modal
            className="rounded-2xl mt-[50%]"
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent className="mx-8 pb-4">
                <ModalHeader>
                    <i className="fa-regular fa-circle-user mr-2"></i>Các kênh
                    hỗ trợ
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Player
                        src={
                            process.env.PUBLIC_URL +
                            '/assets/lottie/contact.json'
                        }
                        background="transparent"
                        speed="1"
                        style={{ width: '100%' }}
                        loop
                        autoplay
                    ></Player>
                    <Stack marginTop="12px">
                        <ButtonWithIcon
                            text="Messenger"
                            iconSrc="messenger.webp"
                            href="https://m.me/trananhpremium"
                        />
                        <ButtonWithIcon
                            text="Instagram"
                            iconSrc="insta.webp"
                            href={
                                'https://www.instagram.com/' + insta ??
                                'trananhpremium'
                            }
                        />
                        <ButtonWithIcon
                            text="Zalo"
                            iconSrc="zalo.webp"
                            href="https://zalo.me/trananhpremium"
                        />
                        <ButtonWithIcon
                            text="Hotline"
                            iconSrc="phone.webp"
                            href="tel:0982202602"
                        />
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ContactModal;
