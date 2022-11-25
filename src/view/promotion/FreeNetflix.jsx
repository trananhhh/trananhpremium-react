import {
    Box,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Text,
} from '@chakra-ui/react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase.config';

export default function FreeNetflix() {
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

        const q = query(
            collection(db, 'trial'),
            where('type', '==', 'netflix')
        );

        getDocs(q)
            .then((res) => {
                res.forEach((doc) => {
                    const data = doc.data();
                    setEmail(data.email);
                    setPassword(data.password);
                });
                setIsLoading(false);
                return;
            })
            .catch((err) => console.error(err));
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            height="80vh"
            bgColor="var(--bg-light)"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                paddingTop="15vh"
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    maxHeight="300px"
                    maxWidth="540px"
                    width="90vw"
                    bgColor="white"
                    marginBottom="4"
                    borderRadius="2xl"
                    className="mx-8 px-4 py-6 md:py-16"
                >
                    <Text
                        mb="6"
                        fontSize="2xl"
                        fontWeight="bold"
                        textAlign="center"
                    >
                        Account
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
                </Box>
                <Button
                    isLoading={isLoading}
                    colorScheme="red"
                    loadingText="Đang lấy dữ liệu..."
                    onClick={() => getAccount()}
                >
                    Lấy account
                </Button>
            </Box>
        </Box>
    );
}
