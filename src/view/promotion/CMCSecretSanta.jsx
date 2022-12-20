import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Text,
} from '@chakra-ui/react';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react';
import AnimatedNumbers from 'react-animated-numbers';
import { db } from '../../firebase.config';

export default function CMCSecretSanta() {
    const [giftCode, setGiftCode] = useState();
    const [ldap, setLdap] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const genGiftCode = async () => {
        const code = Math.floor(Math.random() * 300);

        const checkGiftCodeQuery = query(
            collection(db, 'cmcglobal-xmas'),
            where('giftcode', '==', code)
        );

        return await getDocs(checkGiftCodeQuery).then((res) => {
            if (res.empty) {
                setGiftCode(code);
                return code;
            } else return genGiftCode();
        });
    };

    const getCode = async () => {
        setIsLoading(true);
        setGiftCode();

        const q = query(
            collection(db, 'cmcglobal-xmas'),
            where('ldap', '==', ldap)
        );

        getDocs(q)
            .then(async (res) => {
                if (res.empty) {
                    const newCode = await genGiftCode();
                    addDoc(collection(db, 'cmcglobal-xmas'), {
                        ldap: ldap,
                        giftcode: newCode,
                    }).catch((err) => console.error(err));
                } else
                    res.forEach((doc) => {
                        const data = doc.data();
                        setGiftCode(data.giftcode);
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
            alignItems="flex-start"
            pt="16vh"
            width="100vw"
            height="110vh"
            bgImage={
                'https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEyL3AtNDIxLWt1dC0wMTAzLWV5ZS5qcGc.jpg'
            }
            bgSize="cover"
            mb="-22vh"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                transition="height ease 2s"
                h="fit-content"
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    // maxHeight="300px"
                    maxWidth="640px"
                    width="90vw"
                    bgColor="white"
                    marginBottom="4"
                    borderRadius="2xl"
                    mt="4"
                    className="mx-8 px-4 py-6 md:pt-10"
                    transition="height ease 2s"
                    h="fit-content"
                >
                    <Image
                        src={
                            'https://assets.topdev.vn/images/2021/10/20/TopDev-TopDev-CMCGlobal-Logo-1626313776-1634712603.jpg'
                        }
                        maxHeight="128px"
                        maxWidth="180px"
                    />
                    <Text
                        my="6"
                        fontSize="xl"
                        fontWeight="medium"
                        textAlign="center"
                    >
                        Hãy nhập LDAP của bạn <br />
                        để lấy số thứ tự của món quà bí mật!
                    </Text>
                    <InputGroup
                        maxWidth="360px"
                        size="md"
                        borderColor="blue.500"
                        mb="4"
                    >
                        <Input
                            pr="4.5rem"
                            value={ldap}
                            placeholder="LDAP"
                            onChange={(e) => {
                                setLdap(e.target.value);
                                if (giftCode) setGiftCode();
                            }}
                        />
                        <InputRightElement width="4.5rem"></InputRightElement>
                    </InputGroup>
                    {giftCode ? (
                        <AnimatedNumbers
                            animateToNumber={giftCode}
                            fontStyle={{ fontSize: 128, fontWeight: 'bold' }}
                            configs={(number, index) => {
                                return {
                                    mass: 1,
                                    tension: 230 * (index + 1),
                                    friction: 140,
                                };
                            }}
                        ></AnimatedNumbers>
                    ) : (
                        <Text fontSize="148px">🎁</Text>
                    )}
                    <Button
                        mt="4"
                        isLoading={isLoading}
                        colorScheme="red"
                        loadingText="Đang kiểm tra túi quà..."
                        onClick={() => getCode()}
                        disabled={!ldap || giftCode}
                    >
                        🎁 Nhận quà 🎁
                    </Button>
                </Box>
                <Alert
                    maxWidth="640px"
                    width="92vw"
                    status="info"
                    borderRadius="xl"
                    fontWeight="bold"
                    opacity={giftCode ? 1 : 0}
                    transitions="all"
                >
                    <AlertIcon />
                    Bạn hãy nhớ mã số này để nhận được đúng món quà thuộc về
                    mình nha!
                </Alert>
            </Box>
        </Box>
    );
}
