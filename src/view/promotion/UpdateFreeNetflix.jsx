import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Text,
} from '@chakra-ui/react';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase.config';

export default function UpdateFreeNetflix() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false);
        }, 2000);
        return () => {
            clearTimeout(timeout);
        };
    }, [isSuccess]);

    const updateAccount = async () => {
        setIsLoading(true);

        const docRef = doc(db, 'trial', 'ihFmJWs75Z9aj3FjXz0p');

        updateDoc(docRef, {
            email,
            password,
        })
            .then(() => {
                setIsSuccess(true);
                setIsLoading(false);
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
                {isSuccess && (
                    <Alert
                        maxWidth="540px"
                        width="92vw"
                        status="success"
                        borderRadius=""
                    >
                        <AlertIcon />
                        Update account thành công!
                    </Alert>
                )}

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
                    mt="4"
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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputRightElement width="4.5rem"></InputRightElement>
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem"></InputRightElement>
                    </InputGroup>
                </Box>
                <Button
                    isLoading={isLoading}
                    colorScheme="red"
                    loadingText="Đang lấy dữ liệu..."
                    onClick={() => updateAccount()}
                >
                    Update account
                </Button>
            </Box>
        </Box>
    );
}
