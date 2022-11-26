import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    ListItem,
    Stack,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RWebShare } from 'react-web-share';
import { db } from '../../firebase.config';
import { openModal } from '../../redux/modalSlice';

export default function FreeNetflix() {
    const dispatch = useDispatch();
    const [isCopiedEmail, setIsCopiedEmail] = useState(false);
    const [isCopiedPsswd, setIsCopiedPssw] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsCopiedEmail(false);
            setIsCopiedPssw(false);
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    }, [isCopiedEmail, isCopiedPsswd]);

    const getAccount = async () => {
        setIsLoading(true);

        const docRef = doc(db, 'trial', 'ihFmJWs75Z9aj3FjXz0p');

        getDoc(docRef)
            .then((doc) => {
                const data = doc.data();
                setEmail(data.email);
                setPassword(data.password);
                setIsLoading(false);
                return;
            })
            .catch((err) => console.error(err));
    };

    return (
        <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            height="85vh"
            bgColor="var(--bg-light)"
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                maxWidth="540px"
                width="90vw"
                className="pt-12"
            >
                <Stack
                    alignItems="center"
                    bgColor="white"
                    marginBottom="8"
                    marginTop="24"
                    className="px-4 py-6 md:py-12 w-full rounded-3xl"
                >
                    <Text
                        mb="6"
                        fontSize="2xl"
                        fontWeight="bold"
                        textAlign="center"
                    >
                        Account Netflix Free
                    </Text>
                    <InputGroup
                        maxWidth="360px"
                        size="md"
                        borderColor="blue.500"
                        mb="3"
                    >
                        <Input
                            pr="4.5rem"
                            value={email}
                            placeholder="Email"
                            onChange={() => {}}
                            disabled
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                disabled={!email}
                                colorScheme="blue"
                                h="1.75rem"
                                mr="0.4rem"
                                size="sm"
                                onClick={() => {
                                    navigator.clipboard.writeText(email);
                                    setIsCopiedEmail(true);
                                }}
                            >
                                {isCopiedEmail ? 'Copied' : 'Copy'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <InputGroup
                        maxWidth="360px"
                        size="md"
                        borderColor="blue.500"
                        mb="12"
                    >
                        <Input
                            pr="4.5rem"
                            value={password}
                            placeholder="Password"
                            onChange={() => {}}
                            disabled
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                disabled={!password}
                                colorScheme="blue"
                                h="1.75rem"
                                mr="0.4rem"
                                size="sm"
                                onClick={() => {
                                    navigator.clipboard.writeText(password);
                                    setIsCopiedPssw(true);
                                }}
                            >
                                {isCopiedPsswd ? 'Copied' : 'Copy'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <Button
                        isLoading={isLoading}
                        colorScheme="red"
                        loadingText="Đang lấy dữ liệu..."
                        onClick={() => getAccount()}
                    >
                        Lấy account
                    </Button>
                </Stack>

                <Box
                    bgColor="white"
                    className="px-6 py-8 rounded-2xl"
                    width="100%"
                >
                    <Text
                        textAlign="center"
                        fontSize="16px"
                        fontWeight="semibold"
                    >
                        Ước gì đằng ấy tặng cho chúng mình 1 like và chia sẻ nhỉ
                        🥺
                    </Text>
                    <Box
                        marginTop="5"
                        className="flex flex-col md:flex-row items-center justify-between"
                    >
                        <Button
                            width="100%"
                            onClick={() => {
                                window.location.href =
                                    'https://www.facebook.com/trananhpremium';
                            }}
                            colorScheme="facebook"
                            leftIcon={<FontAwesomeIcon icon={faFacebook} />}
                        >
                            Facebook
                        </Button>
                        <Button
                            width="100%"
                            className="m-2"
                            onClick={() => {
                                window.location.href =
                                    'https://www.instagram.com/trananhpremium/';
                            }}
                            colorScheme="pink"
                            leftIcon={<FontAwesomeIcon icon={faInstagram} />}
                        >
                            Instagram
                        </Button>
                        <RWebShare
                            data={{
                                text: 'Ở đây mỗi ngày đều có account Netflix miễn phí cho mọi người nèeee!',
                                url: 'https://trananhpremium.com/',
                                title: '🎁 Nhận account Netflix miễn phí 🎁',
                            }}
                            onClick={() => console.log('shared successfully!')}
                        >
                            <Button
                                width="100%"
                                colorScheme="teal"
                                leftIcon={<FontAwesomeIcon icon={faShare} />}
                            >
                                Chia sẻ ngay
                            </Button>
                        </RWebShare>
                    </Box>
                </Box>

                <Card
                    backgroundColor="orange.50"
                    borderRadius="3xl"
                    className="p-2 pb-8 leading-6 w-full mt-8"
                >
                    <CardHeader>
                        <Heading size="md">Lưu ý</Heading>
                    </CardHeader>
                    <CardBody
                        paddingTop="0px"
                        paddingBottom="0px"
                        className="px-8"
                    >
                        <UnorderedList spacing="16px" textAlign="justify">
                            <ListItem>
                                Account sẽ tự động đổi password sau 24h
                            </ListItem>
                            <ListItem>
                                Tuyệt đối không thay đổi thông tin của tài khoản
                            </ListItem>
                            <ListItem>
                                Nếu account ở trên không đăng nhập được, hãy
                                thông báo với chúng mình tại{' '}
                                <Box
                                    onClick={() => dispatch(openModal())}
                                    className="inline-flex text-gray-600 font-semibold text-md cursor-pointer"
                                >
                                    đây
                                </Box>
                            </ListItem>
                        </UnorderedList>
                    </CardBody>
                </Card>
            </Box>
        </Stack>
    );
}
